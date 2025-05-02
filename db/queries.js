const { PrismaClient } = require('../generated/prisma');
const { connect, search } = require('../routes/indexRouter');


const prisma = new PrismaClient();

async function createFolder(name) {
    try {
        await prisma.folders.create({
            data: { name: name }
        });
    } catch (error) {
        throw new Error('Folder name already exists.')
    }
};

async function readFolders() {
    const folders = await prisma.folders.findMany({
        orderBy: [{ name: 'asc' }]
    });
    return folders;
};

async function readFolderById(searchId) {
    const folder = await prisma.folders.findUnique({
        where: { id: Number(searchId) }
    });
    return folder;
};

async function updateFolder(folderId, folderName) {
    try {
        await prisma.folders.update({ 
            where: { id: folderId }, 
            data: { name: folderName } 
        });
    } catch (error) {
        throw new Error('Folder not found.')
    }
};

async function deleteFolder(folderId) {
    try {
        await prisma.folders.delete({
            where: { id: Number(folderId) }
        });
    } catch (error) {
        throw new Error('Folder not found.')
    }
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

// error handling on fileController
async function createFiles(uploadedFile, uploadToFolder, publicURL) {
    console.log('UPLOADEDFILE: ', uploadedFile, ', FOLDER: ', uploadToFolder)    

    let uploadData = {
        name: uploadedFile.originalname,
        size: uploadedFile.size,
        url: publicURL
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

async function readFiles(folderId) {
    let searchId;
    if(!folderId) {
        searchId = null;
    } else {
        searchId = Number(folderId);
    }

    const files = await prisma.file.findMany({
        where: { folderId: searchId },
        orderBy: [{ name: 'asc' } ]
    });

    return files;
};

async function readFileDetails(fileId) {
    const currentFile = await prisma.file.findUnique({
        where: { id: Number(fileId) },
    });

    if(!currentFile) {
        throw new Error('File not found.')
    }

    return currentFile;
};

async function updateFile(fileId, fileName) {
    try {
        await prisma.file.update({
            where: { id: fileId },
            data: { name: fileName },
        })
    } catch (error) {
        throw new Error(error)
    }
};

async function deleteFile(fileId) {
    try {
        await prisma.file.delete({
            where: { id: Number(fileId) }
        })
    } catch (error) {
        throw new Error(error)
    }
};


module.exports = {
    createFolder,
    readFolders,
    readFolderById,
    updateFolder,
    deleteFolder,

    createFiles,
    readFiles,
    readFileDetails,
    updateFile,
    deleteFile
}