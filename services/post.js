const PostModel = require("../models/blog/post");
const convertToSlug = require("../util/url_helper").convertToSlug;
const today = require("../util/date").formatDateNow();

exports.getAllPost = async () => {
    const posts = await PostModel.find();
    return posts;
};

exports.createPost = async (post) => {
    const newPost = new PostModel(post);
    newPost.slug = convertToSlug(newPost.title);
    newPost.time_upload = today;
    newPost.time_update = today;
    newPost.format = [
        {
            "open_tag": "<p>",
            "close_tag": "</p>",
        }
    ];
    await newPost.save();
    return newPost;
};

exports.getPostByID = async (id) => {
    return await PostModel.findById(id);
};

exports.getPostByTitle = async (title) => {
    return await PostModel.findOne({ title: title });
}

exports.getPostBySlug = async (slug) => {
    return await PostModel.findOne({ slug: slug });
}

exports.updatePost = async (id, post) => {
    return await PostModel.update(id, post);
};

exports.deletePost = async (id) => {
    return await PostModel.delete(id);
};
