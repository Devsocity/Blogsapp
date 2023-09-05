import asyncHandler from 'express-async-handler';
import Post from '../models/Post.js';
import { cloudUpload } from '../utils/cloudinary.js';

/**
 * @DESC Get All Post
 * @ROUTE /api/v1/post
 * @method GET
 * @access public
 */
export const fetchAllPost = asyncHandler(async (req, res) => {
  let post = await Post.find()
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  res.status(200).json({ data: post, message: 'Fetch All post success.' });
});

/**
 * @DESC Get Single Post
 * @ROUTE /api/v1/post/id
 * @method GET
 * @access public
 */
export const fetchSinglePost = asyncHandler(async (req, res) => {
  // post exist check
  const post = await Post.findById(req.params.id)
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  if (!post) return res.status(404).json({ message: 'Post not found!' });

  res.status(200).json({ data: post, message: 'Fetch this post success.' });
});

/**
 * @DESC Create a Post
 * @ROUTE /api/v1/post
 * @method POST
 * @access public
 */
export const createPost = asyncHandler(async (req, res) => {
  const { postedUserId, text } = req.body;

  // check validation
  if (!postedUserId) return res.status(400).json({ message: 'Poster Id is required!' });

  if (!text) {
    if (!req?.files['postPhotos']) return res.status(400).json({ message: 'Text or Image is required!' });
  }

  // <!-- photo update -->
  let photos;
  if (req?.files['postPhotos']) {
    const photoData = await cloudUpload(req?.files['postPhotos'][0].path);
    photos = photoData?.secure_url;
  }

  // create new post data
  const post = await Post.create({
    postedUserId,
    text: req?.body?.text || null,
    codeText: req.body?.codeText || null,
    category: req.body?.category || null,
    photos,
    type: req.body.type || 'public'
  });

  const postData = await Post.findById(post._id)
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  // check
  if (post) {
    return res.status(201).json({ data: postData, message: 'Post created successful' });
  } else {
    return res.status(400).json({ message: 'Post not created. Try again!' });
  }
});

/**
 * @DESC Delete a Post
 * @ROUTE /api/v1/post
 * @method DELETE
 * @access public
 */
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id)
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  if (!post) return res.status(400).json({ message: 'Post not deleted.' });

  res.status(200).json({ data: post, message: 'Your post deleted successful.' });
});

/**
 * @DESC Update a Post
 * @ROUTE /api/v1/post
 * @method PUT/PATCH
 * @access public
 */
export const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const post = await Post.findById(id)
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (!req?.body) return res.status(400).json({ message: 'You nothing changed' });

  // for photo update
  let photos = post.photos;
  if (req?.files['postPhotos']) {
    const photoData = await cloudUpload(req?.files['postPhotos'][0].path);
    photos = photoData?.secure_url;
  }

  // for status update
  let status = req.body?.status || post.status;

  // for trash update
  let trash = req.body?.trash || post.trash;

  // Like update
  let like = post.like;
  if (req.body.like) {
    const checkLike = like.find((item) => item._id == req.body.like);

    if (checkLike) {
      like = like.filter((item) => item._id != req.body.like);
    } else {
      like = [...like, req.body.like];
    }
  }

  // Update All Post data
  const postUpdate = await Post.findByIdAndUpdate(
    id,
    {
      text: req.body?.text || post.text,
      type: req.body?.type || post.type,
      codeText: req.body?.codeText || post.codeText,
      category: req.body?.category || post.category,
      photos,
      like,
      status,
      trash
    },
    { new: true }
  )
    .populate({
      path: 'comment',
      populate: {
        path: 'commentedUserId',
        model: 'User'
      }
    })
    .populate(['postedUserId', 'like', 'category']);

  res.status(200).json({ data: postUpdate, message: `Update success` });
});
