import prisma from "@/lib/prisma";

async function getUser() {
    const user = await prisma.user.findFirst({
        where: { chat_id: 174664534 },
    });
    return user;
}

export async function GET() {
    try {
        const userData = await getUser();
        return new Response(JSON.stringify({ userData }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get user data' }), {
            status: 500,
        });
    }
}