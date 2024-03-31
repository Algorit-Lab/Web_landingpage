function file_type(file_ext) {
    switch (file_ext) {
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpeg';
        case '.jpeg':
            return 'image/jpeg';
        case '.gif':
            return 'image/gif';
        case '.webp':
            return 'image/webp';
        case '.svg':
            return 'image/svg+xml';
        case '.mp4':
            return 'video/mp4';
        case '.webm':
            return 'video/webm';
        case '.ogg':
            return 'video/ogg';
        case '.mp3':
            return 'audio/mpeg';
        case '.wav':
            return 'audio/wav';
        case '.flac':
            return 'audio/flac';
        case '.txt':
            return 'text/plain';
        case '.pdf':
            return 'application/pdf';
        case '.doc':
            return 'application/msword';
        case '.docx':
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case '.xls':
            return 'application/vnd.ms-excel';
        case '.xlsx':
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        case '.ppt':
            return 'application/vnd.ms-powerpoint';
        case '.pptx':
            return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        case '.zip':
            return 'application/zip';
        case '.rar':
            return 'application/x-rar-compressed';
        case '.7z':
            return 'application/x-7z-compressed';
        case '.tar':
            return 'application/x-tar';
        case '.gz':
            return 'application/gzip';
        case '.bz2':
            return 'application/x-bzip2';
        default:
            return 'application/octet-stream';
    }
}

module.exports = {
    file_type
};
