import { NextResponse } from 'next/server';
import { query } from '@/lib/db';
import { OFFICIAL_LISTINGS, PropertyListing } from '@/lib/portfolioData';

interface DbUnitRow {
  id: number;
  property_id: number;
  unit_number: string;
  unit_type: string;
  area_sqft: string | number;
  rent_price: string | number;
  status: string;
  floor: number;
  image_url: string | null;
  video_url: string | null;
  property_name: string;
  property_address: string;
  property_type: string;
  property_image: string | null;
  property_video: string | null;
}

export async function GET() {
  try {
    const dbUnits = await query<DbUnitRow>(`
      SELECT
        u.id,
        u.property_id,
        u.unit_number,
        u.unit_type,
        u.area_sqft,
        u.rent_price,
        u.status,
        u.floor,
        u.image_url,
        u.video_url,
        p.name AS property_name,
        p.address AS property_address,
        p.type AS property_type,
        p.image_url AS property_image,
        p.video_url AS property_video
      FROM units u
      JOIN properties p ON p.id = u.property_id
      WHERE u.status IN ('AVAILABLE', 'UNDER_OFFER', 'OCCUPIED', 'LEASED')
      ORDER BY u.id ASC
    `);

    if (dbUnits && dbUnits.length > 0) {
      const syncedListings: PropertyListing[] = dbUnits.map((row, idx) => {
        const sqft = Number(row.area_sqft) || 1200;
        const monthly = Number(row.rent_price) || 1800;
        const cover =
          row.image_url ||
          row.property_image ||
          '/properties/79th-st-1.jpg';

        const category: PropertyListing['category'] =
          row.property_type === 'Industrial'
            ? 'Industrial'
            : row.unit_type.toLowerCase().includes('office') ||
              row.unit_type.toLowerCase().includes('oficina')
            ? 'Office'
            : 'Commercial';

        const isAvailable = row.status === 'AVAILABLE';
        const isUnderOffer = row.status === 'UNDER_OFFER';
        const statusValue = isAvailable ? 'AVAILABLE' : isUnderOffer ? 'UNDER_OFFER' : 'LEASED';

        return {
          id: `db-unit-${row.id}`,
          code: `HYCO-${row.unit_number}`,
          title: {
            en: `${row.property_name} — Suite ${row.unit_number}`,
            es: `${row.property_name} — Suite ${row.unit_number}`,
          },
          subtitle: {
            en: `${row.unit_type} · Floor 0${row.floor || 1} · Live CRM Inventory`,
            es: `${row.unit_type} · Piso 0${row.floor || 1} · Inventario en Tiempo Real CRM`,
          },
          address: row.property_address.split(',')[0] || row.property_address,
          cityStateZip: 'Indianapolis, IN 46268',
          category,
          areaSqft: sqft,
          areaDisplay: {
            en: `${sqft.toLocaleString()} Sq Ft`,
            es: `${sqft.toLocaleString()} Pies²`,
          },
          priceDisplay: {
            en: `$${monthly.toLocaleString()} /Mo`,
            es: `$${monthly.toLocaleString()} /Mes`,
          },
          priceSubtext: {
            en: 'Directly synchronized with HYCO Property Management Operations CRM.',
            es: 'Sincronizado en tiempo real con el CRM de HYCO Property Management.',
          },
          leaseType: {
            en: row.property_type === 'Industrial' ? 'Gross Lease' : 'Commercial Lease',
            es: row.property_type === 'Industrial' ? 'Arrendamiento Bruto (Gross Lease)' : 'Arrendamiento Comercial',
          },
          status: statusValue,
          baths: 1,
          offices: category === 'Industrial' ? 1 : 2,
          levelNumber: String(idx + 1).padStart(2, '0'),
          levelLabel: {
            en: `FLOOR 0${row.floor || 1} · ${sqft.toLocaleString()} SF`,
            es: `PISO 0${row.floor || 1} · ${sqft.toLocaleString()} PIES²`,
          },
          coverImage: cover,
          gallery: [cover, row.property_image || '/properties/morris-aerial-1.jpg'],
          description: {
            en: `Strategic commercial space located at ${row.property_address}, Indianapolis, IN. Managed by HYCO Property Management with 24/7 maintenance dispatch, professional lease administration, and verified tenant services.`,
            es: `Espacio comercial estratégico ubicado en ${row.property_address}, Indianápolis, IN. Administrado por HYCO Property Management con despacho de mantenimiento 24/7, administración contractual profesional y servicios verificados.`,
          },
          highlights: {
            en: [
              `${sqft.toLocaleString()} Sq Ft ${row.unit_type}`,
              `Located at ${row.property_address}`,
              'Synchronized in real-time with HYCO Admin Dashboard',
              '24/7 emergency repair and certified contractor response',
            ],
            es: [
              `${sqft.toLocaleString()} Pies² de ${row.unit_type}`,
              `Ubicado en ${row.property_address}`,
              'Sincronizado en tiempo real con el CRM de HYCO',
              'Soporte de emergencias 24/7 y red de contratistas certificados',
            ],
          },
          featured: true,
        };
      });

      return NextResponse.json({
        listings: syncedListings,
        syncedFromDb: true,
        total: syncedListings.length,
      });
    }

    return NextResponse.json({
      listings: OFFICIAL_LISTINGS,
      syncedFromDb: false,
      total: OFFICIAL_LISTINGS.length,
    });
  } catch {
    return NextResponse.json({
      listings: OFFICIAL_LISTINGS,
      syncedFromDb: false,
      total: OFFICIAL_LISTINGS.length,
    });
  }
}
