import prisma from "@/lib/prisma";

async function getRefCode() {
    const user = await prisma.user.findFirst({
        where: { chat_id: 174664534 },
    });
    return user ? user.reff_code : null;
}

export async function GET() {
    try {
        const reffCode = await getRefCode();
        return new Response(JSON.stringify({ reffCode }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to get referral code' }), {
            status: 500,
        });
    }
}