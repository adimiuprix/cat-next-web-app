import prisma from "@/lib/prisma";

async function getAllHoder() {
    const holders = await prisma.user.findMany();
    return holders;
}

export async function GET() {
    try {
        const allHolders = await getAllHoder();
        return new Response(JSON.stringify({ allHolders }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get user data' }), {
            status: 500,
        });
    }
}