"use server"

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

async function newUser(chat_id, upline) {
    await prisma.User.create({
        data: {
            balance: 0,
            chat_id: chat_id,
            reff_code: '567tfhgr5',
            reff_by: upline,
        },
    });
    revalidatePath('/');
    redirect('/');
}

export async function validate(id){
    try {
        const user = await prisma.user.findFirst({
            where: { chat_id: id },
        });

        if(!user){
            console.log("data gak ada")
        }
    
        return user;
    } catch (error) {
        console.error('Error during validate:', error);
        return { error: 'Database query failed' };
    }

}