const postService = require("../services/post");

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await postService.getAllPost();
        // res.setHeader('Content-Type', 'text/html');
        // res.send({ posts: posts, status: "success" })
        // res.render("user/pages/blog", { posts: posts })
        req.posts = posts;
        next();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.createPost = async (req, res, next) => {
    try {
        // console.log("🚀 ~ exports.createPost= ~ req.body:", req.body)
        const post = await postService.createPost(req.body);
        res.redirect('/admin/dashboard/create-success');
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.getPostByID = async (req, res, next) => {
    try {

        // console.log("🚀 ~ exports.getPostByID= ~ req.params.postID:", req.params.postID)
        const post = await postService.getPostByID(req.params.postID);
        req.post = post;
        next();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

exports.getPostByTitle = async (req, res, next) => {
    try {
        const post = await postService.getPostByTitle(req.params.postTitle);
        req.post = post;
        next();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

exports.getPostBySlug = async (req, res, next) => {
    try {
        const post = await postService.getPostBySlug(req.params.slug);
        req.post = post;
        next();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await postService.updatePost(req.params.id, req.body);
        res.render({ data: post, status: "success" });
    } catch (err) {
        res.status(500).render({ error: err.message });
    }
};

exports.deletePost = async (req, res, next) => {
    try {
        const post = await postService.deletePost(req.params.id);
        res.render({ data: post, status: "success" });
    } catch (err) {
        res.status(500).render({ error: err.message });
    }
};
