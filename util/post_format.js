const formatDictionary = { // Static key
    'b': {
        open: '<strong>',
        close: '</strong>'
    },
    'i': {
        open: '<em>',
        close: '</em>'
    },
    'br': {
        open: '<br>',
        close: ''
    },
    '/br': {
        open: '',
        close: '<br>'
    }
};

function getFormat(dict, key) {
    // Dynamic key
    if (key.startsWith('a{') && key.endsWith('}')) { // a{link} -> <a href="link">
        const link = key.slice(2, -1);
        return {
            open: `<a href="${link}">`,
            close: '</a>'
        };
    } else if (/^#[0-9a-f]{6}$/i.test(key)) { // #ffffff -> <span style="color: #ffffff;">
        return {
            open: `<span style="color: ${key};">`,
            close: '</span>'
        };
    }
    return dict[key];
}


function insideFormat(content) {
    // Match all format options in the content
    const formatOptions = content.match(/#\((.+?)\)(.+?)\/#/g);
    if (!formatOptions) return content; //notag -> return

    // Loop over all format options
    for (let i = 0; i < formatOptions.length; i++) {
        // regex text, match[0] is content, match[1] is format option, match[2] is content to format
        // example: #((b i))Bold and italic./#
        const match = formatOptions[i].match(/#\((.+?)\)(.+?)\/#/);
        const option = match[1];
        const contentToFormat = match[2];

        const options = option.split(' ');

        const openTags = options.map(option => {
            const formatInfo = getFormat(formatDictionary, option);
            if (formatInfo && formatInfo.open) { // Check in dict
                if (typeof formatInfo.open === 'function') {
                    return formatInfo.open(option);
                } else {
                    return formatInfo.open;
                }
            } else {
                return '';
            }
        });

        const closeTags = options.map(option => {
            const formatInfo = getFormat(formatDictionary, option);
            return formatInfo && formatInfo.close || '';
        });

        const formattedContent = openTags.join('') + contentToFormat + closeTags.reverse().join('');
        content = content.replace(formatOptions[i], formattedContent);
    }

    return content;
}

exports.clearTags = (content) => {
    return content.replace(/#\((.+?)\)(.+?)\/#/g, '$2');
}

exports.formatPostContent = (post) => {
    if (!post || !Array.isArray(post.content) || !Array.isArray(post.format)) {
        throw new Error('Invalid post object');
    }

    const content = post.content;
    const format = post.format;

    if (content.length !== format.length) {
        throw new Error('Content and format arrays must be the same length');
    }

    let result = [];

    for (let i = 0; i < content.length; i++) {
        if (!format[i] || typeof format[i].open_tag !== 'string' || typeof format[i].close_tag !== 'string') {
            throw new Error('Invalid format object at index ' + i);
        }
        result.push(format[i].open_tag + insideFormat(content[i]) + format[i].close_tag);
    }

    return result;
}
