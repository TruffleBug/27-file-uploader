const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

async function createFolder(name) {
    await prisma.folders.create({
        data: {
            name: name
        }
    })
}

async function readFolders() {
    const folders = await prisma.folders.findMany({
        orderBy: [
            { name: 'asc' }
        ]
    });
    console.log('FOLDERS: ', folders);
    return folders
}

async function updateFolder(folderId, folderName) {
    await prisma.folders.update({
        where: {
            id: folderId,
        },
        data: {
            name: folderName,
        },
    })
}

async function deleteFolder(folderId) {
    await prisma.folders.delete({
        where: {
            id: Number(folderId)
        }
    })
}

// allFolders()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

module.exports = {
    createFolder,
    readFolders,
    updateFolder,
    deleteFolder
}