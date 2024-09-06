import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function newUser() {
    await prisma.User.create({
        data: {
            balance: 0,
            chat_id: 174664534,
            reff_code: '567tfhgr5',
            ref_by: '0',
        },
    });
    revalidatePath('/');
    redirect('/');
}
