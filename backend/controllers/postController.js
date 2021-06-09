const Post = require('../models/postModel');

exports.getPosts = async (req, res, next) => {
    const posts = await Pot.find({});
    res.status(200).json({
      data: posts
    });
};

exports.getPost = async (req, res, next) => {
    try {
      const postId = req.params.postId;
      const post = await Post.findById(postId);
      if (!post) return next(new Error("Данной записи не существует")); //Post does not exist
      res.status(200).json({
        data: post,
      });
    } catch (error) {
      next(error);
    }
  };

  exports.updatePost = async (req, res, next) => {
    try {
      const update = req.body;
      const postId = req.params.userId;
      await Post.findByIdAndUpdate(postId, update);
      const post = await Post.findById(postId);
      res.status(200).json({
        data: post,
        message: "Запись обновлена", //Post has been updated
      });
    } catch (error) {
      next(error);
    }
  };
  
  exports.deletePost = async (req, res, next) => {
    try {
      const postId = req.params.postId;
      await Post.findByIdAndDelete(postId);
      res.status(200).json({
        data: null,
        message: "Запись удалена", //Post has been deleted
      });
    } catch (error) {
      next(error);
    }
  };