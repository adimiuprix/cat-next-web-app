"use server"
import prisma from "@/lib/prisma";

async function getUser() {
    const user = await prisma.user.findFirst({
        where: { chat_id: 174664534 },
    });
    return user;
}

export async function GET() {
    const userData = await getUser();
    try {
        const balance = userData.balance
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