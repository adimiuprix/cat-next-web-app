"use server"

import prisma from '@/lib/prisma';

async function newUser(chatId, uplineId) {
    const user = await prisma.User.create({
        data: {
            balance: 0,
            chat_id: chatId,
            reff_code: '567tfhgr5',
            reff_by: uplineId,
        },
    });
    return user;
}

export async function validate(id){
    try {
        const user = await prisma.user.findFirst({
            where: { chat_id: id },
        });

        if(!user){
            const upl_id = 174664534
            const upl_res = await prisma.user.findFirst({
                where: { chat_id: upl_id },
            });

            const chatId = id
            const uplineId = upl_res.id;

            const user = await newUser(chatId, uplineId)
            return user;
        }

        return user;
    } catch (error) {
        console.error('Error during validate:', error);
        return { error: 'Database query failed' };
    }

}