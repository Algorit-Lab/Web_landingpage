const express = require('express');
const router = express.Router();
const postController = require('../controller/post');
const postFormat = require('../util/post_format');
const convertToSlug = require('../util/url_helper').convertToSlug;

router.get('/', postController.getAllPosts, (req, res, next) => {

    const summaryPosts = req.posts.map(post => {
        return post.content.map(content => {
            return postFormat.clearTags(content).slice(0, 200) + '...';
        })[0];
    });
    res.req.posts = req.posts;
    res.render('user/pages/blog', { posts: req.posts, summaryPosts: summaryPosts });
});

router.get('/create', (req, res, next) => {
    res.render('user/pages/create_post');
});

router.post('/store', (req, res, next) => {
    postController.createPost(req, res, next);
});

router.get('/create-success', (req, res, next) => {
    res.render('user/pages/create_success');
});

router.get('/:slug', postController.getPostBySlug, postController.getAllPosts, (req, res, next) => {
    const post = req.post;
    const posts = req.posts;
    const content = postFormat.formatPostContent(post);
    res.render('user/pages/post', { post, 'content': content, 'posts': posts });
});

module.exports = router;
