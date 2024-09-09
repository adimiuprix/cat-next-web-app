import prisma from "@/lib/prisma";

async function getTotHolder() {
    const holders = await prisma.user.count({
        where: {
            balance: {
                gt: 0,
            },
        },
    });
    return holders;
}

export async function GET() {
    try {
        const tot_holders = await getTotHolder();
        return new Response(JSON.stringify({ tot_holders }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get user data' }), {
            status: 500,
        });
    }
}