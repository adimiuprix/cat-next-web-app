export async function GET() {
    try {
        const balance = 500
        return new Response(JSON.stringify({ balance }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get balance' }), {
            status: 500,
        });
    }
}