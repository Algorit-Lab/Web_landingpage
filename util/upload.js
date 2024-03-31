require('dotenv').config();
const { google } = require('googleapis');
const fs = require('fs');
const { path } = require('file');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URL = process.env.REDIRECT_URL;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});

var self = module.exports = {
    setFilePublic: async (fileId) => {
        try {
            await drive.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    getFileUrl: async (fileId) => {
        try {
            const result = await drive.files.get({
                fileId: fileId,
                fields: 'webViewLink, webContentLink'
            });
            return result.data;
        }
        catch (error) {
            console.log(error);
        }
    },
    uploadFile: async (fileDir, fileName, fileType) => {
        try {
            const createFile = await drive.files.create(
                {
                    requestBody: {
                        name: fileName,
                        mimeType: fileType,
                        parents: ['1V8RKpj3Nm8C8v2wi5Us4DUxnhQYSzUr3']
                    },
                    media: {
                        mimeType: fileType,
                        body: fs.createReadStream(fileDir)
                    }
                }
            )
            const fileId = createFile.data.id;
            console.log("File uploaded: ", fileId);

            await self.setFilePublic(fileId);

            const getUrl = await self.getFileUrl(fileId);
            return getUrl;
        }
        catch (error) {
            console.log(error);
        }
    },
    deleteFile: async (fileId) => {
        try {
            await drive.files.delete({
                fileId: fileId
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    deleteFolder: async (folderId) => {
        try {
            await drive.files.delete({
                fileId: folderId
            });
        }
        catch (error) {
            console.log(error);
        }
    },
    uploadFileToFolder: async (folderId, fileName, fileDir, fileType) => {
        try {
            const createFile = drive.files.create(
                {
                    requestBody: {
                        name: fileName,
                        mimeType: fileType,
                        parents: [folderId]
                    },
                    media: {
                        mimeType: fileType,
                        body: fs.createReadStream(fileDir)
                    }
                }
            )
            const fileId = createFile.data.id;
            await self.setFilePublic(fileId);
        }
        catch (error) {
            console.log(error);
        }
    },
    createFolder: async (folderName) => {
        try {
            const createFolder = drive.files.create(
                {
                    requestBody: {
                        name: folderName,
                        mimeType: 'application/vnd.google-apps.folder'
                    }
                }
            )
            const folderId = createFolder.data.id;
            return folderId;
        }
        catch (error) {
            console.log(error);
        }
    },
    downloadFile: async (fileId, filePath) => {
        try {
            const dest = fs.createWriteStream(filePath);
            const result = await drive.files.get(
                {
                    fileId: fileId,
                    alt: 'media'
                },
                {
                    responseType: 'stream'
                }
            );
            result.data
                .on('end', () => {
                    console.log('Done downloading file.');
                })
                .on('error', (err) => {
                    console.error('Error downloading file.');
                })
                .pipe(dest);

        }
        catch (error) {
            console.log(error);
        }
    }
}
