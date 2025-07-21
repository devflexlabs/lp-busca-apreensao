// app/api/rdstation-event/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('🔥 API Route chamada: POST', request.url);
  
  const apiKey = process.env.RD_STATION_API_KEY;
  console.log('🔑 API Key encontrada:', apiKey ? 'SIM' : 'NÃO');
  
  if (!apiKey) {
    return NextResponse.json({ error: 'API Key não configurada.' }, { status: 500 });
  }

  try {
    const body = await request.json();
    
    const basePayload: Record<string, any> = {
      conversion_identifier: body.conversion_identifier,
      email: body.email,
      name: body.name,
      mobile_phone: body.mobile_phone,
      banco: body.banco,
      parcelas_atraso: body.parcelas_atraso,
      vencimento_parcela: body.vencimento_parcela
    };

    if (body.state) basePayload.state = body.state;

    if (body.banco) basePayload.cf_banco_formulario = body.cf_banco;
    if (body.parcelas_atraso) basePayload.cf_parcelas_em_atraso = body.cf_parcelas_atraso;
    if (body.vencimento_parcela) basePayload.cf_data_vencimento = body.cf_vencimento_parcela;

    Object.keys(basePayload).forEach((k) => {
      if (basePayload[k] == null) {
        delete basePayload[k];
      }
    });

    console.log('📥 Payload enviado:', basePayload);

    const url = `https://api.rd.services/platform/conversions?api_key=${apiKey}`;
    const rdRes = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: basePayload
      }),
    });

    const text = await rdRes.text();
    console.log(`📤 RD Station respondeu ${rdRes.status}:`, text);

    if (!rdRes.ok) {
      return NextResponse.json({ error: text }, { status: rdRes.status });
    }

    return NextResponse.json({ success: true, message: 'Conversão enviada com sucesso!' });
  } catch (err: any) {
    console.error('❌ Erro ao chamar RD Station:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'API está funcionando!' });
}