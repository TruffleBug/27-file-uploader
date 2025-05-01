const { PrismaClient } = require('../generated/prisma');
const { connect, search } = require('../routes/indexRouter');

const prisma = new PrismaClient();

async function createFolder(name) {
    await prisma.folders.create({
        data: {
            name: name
        }
    })
};

async function readFolders() {
    const folders = await prisma.folders.findMany({
        orderBy: [
            { name: 'asc' }
        ]
    });
    // console.log('FOLDERS: ', folders);
    return folders
};

async function readFolderById(searchId) {
    const folder = await prisma.folders.findUnique({
        where: {
            id: Number(searchId)
        }
    });
    return folder
};

async function updateFolder(folderId, folderName) {
    await prisma.folders.update({
        where: {
            id: folderId,
        },
        data: {
            name: folderName,
        },
    })
};

async function deleteFolder(folderId) {
    await prisma.folders.delete({
        where: {
            id: Number(folderId)
        }
    })
};

// allFolders()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

// FILES -------------------------
async function createFiles(uploadedFile, uploadToFolder) {
    console.log('UPLOADEDFILE: ', uploadedFile, ', FOLDER: ', uploadToFolder)    

    let uploadData = {
        name: uploadedFile.originalname,
        size: uploadedFile.size
    };

    if(uploadToFolder != 'none') {
        uploadData.folder = {
            connect: { name: uploadToFolder }
        }
    };

    await prisma.file.create({
        data: uploadData
    });
};

async function readFiles(id) {
    let searchId;
    if(!id) {
        searchId = null;
    } else {
        searchId = Number(id);
    }

    const files = await prisma.file.findMany({
        where: {
            folderId: searchId
        },
        orderBy: [
            { name: 'asc' }
        ]
    });
    // console.log(files)
    return files
};

async function updateFile(fileId, fileName) {
    await prisma.file.update({
        where: {
            id: fileId,
        },
        data: {
            name: fileName,
        },
    })
};

async function deleteFile(fileId) {
    await prisma.file.delete({
        where: {
            id: Number(fileId)
        }
    })
};



module.exports = {
    createFolder,
    readFolders,
    readFolderById,
    updateFolder,
    deleteFolder,

    createFiles,
    readFiles,
    updateFile,
    deleteFile
}