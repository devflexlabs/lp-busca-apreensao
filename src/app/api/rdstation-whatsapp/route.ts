import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const basePayload = {
            conversion_identifier: 'formulario_whatsapp-busca-e-apreensao',

            name: body.nome,
            email: body.email,
            mobile_phone: body.telefone,
            cf_plug_opportunity_origin: body.utm_source || 'Desconhecida',
            cf_banco: body.banco,
            cf_internal_source: body.internal_source,
            cf_utm_source_0: body.utm_source,
            cf_utm_medium: body.utm_medium,
            cf_utm_campaign: body.utm_campaign,
            cf_utm_term: body.utm_term,
            cf_utm_content: body.utm_content,
        };

        const apiKey = process.env.RD_STATION_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'RD_STATION_API_KEY não configurada.' }, { status: 500 });
        }

        const response = await fetch(
            `https://api.rd.services/platform/conversions?api_key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event_type: 'CONVERSION',
                    event_family: 'CDP',
                    payload: basePayload,
                }),
            }
        );

        const responseBody = await response.text();
        if (!response.ok) {
            return NextResponse.json({ error: responseBody }, { status: response.status });
        }

        return NextResponse.json({ success: true, message: 'Conversão enviada com sucesso!' });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
