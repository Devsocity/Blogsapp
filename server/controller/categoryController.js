import asyncHandler from 'express-async-handler';
import Category from '../models/Categories.js';
import bcrypt from 'bcrypt';
import { createSlug } from '../utils/slug.js';

/**
 * @DESC Get all category data
 * @ROUTE /api/v1/category
 * @method GET
 * @access public
 */
export const getAllCategory = asyncHandler(async (req, res) => {
  const category = await Category.find();

  res.status(200).json({ category, message: 'Fetch all category data success' });
});

/**
 * @DESC Get Single category data
 * @ROUTE /api/v1/category/:id
 * @method GET
 * @access public
 */
export const getSingleCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findById(id);

  if (!category) {
    return res.status(404).json({ message: 'Category data not found' });
  }

  res.status(200).json({ category, message: 'Fetch category data success' });
});

/**
 * @DESC Create new Category
 * @ROUTE /api/v1/category
 * @method POST
 * @access public
 */
export const createCategory = asyncHandler(async (req, res) => {
  // get values
  const { name } = req.body;

  // validations
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  // category check
  const checkCategory = await Category.findOne({ name });

  if (checkCategory) return res.status(400).json({ message: 'Category already exist!' });

  // create new category
  const category = await Category.create({
    name,
    slug: createSlug(name)
  });

  res.status(200).json({ category, message: 'Category created success' });
});

/**
 * @DESC Delete A Category
 * @ROUTE /api/v1/category/:id
 * @method DELETE
 * @access public
 */
export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await Category.findByIdAndDelete(id);

  res.status(200).json({ data: category, message: 'Category delete successfully' });
});
