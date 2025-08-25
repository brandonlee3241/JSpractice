import prisma from './db';
async function main() {

    // tests conneciton by getting user headcount
    const userCount = await prisma.user.count();
    console.log('DB conn successful! User count: ' + userCount);

    const users = await prisma.user.findMany({
        take: 5,
        select: {
            id: true,
            email: true,
            name: true
        }

    });

}