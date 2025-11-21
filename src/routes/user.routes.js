import express from "express";
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/user.controller.js";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User CRUD APIs
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: 677c9e2f5cfeadbd23a41ce1
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: johndoe@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: johndoe@gmail.com
 *         password:
 *           type: string
 *           example: 123456
 *
 *     UpdateUserInput:
 *       type: object
 *       required:
 *         - _id
 *       properties:
 *         _id:
 *           type: string
 *           example: 677c9e2f5cfeadbd23a41ce1
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         code:
 *           type: string
 *         status:
 *           type: number
 *       examples:
 *         UserExists:
 *           summary: User already exists
 *           value:
 *             message: User already exists
 *             code: USER_EXISTS
 *             status: 400
 *         UserNotFound:
 *           summary: User not found
 *           value:
 *             message: User does not exist
 *             code: USER_NOT_FOUND
 *             status: 400
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: User already exists
 *         content:
 *           application/json:
 *             examples:
 *               UserExists:
 *                 $ref: '#/components/schemas/ErrorResponse/examples/UserExists'
 *       500:
 *         description: Server error
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */
router.get("/", getAllUser);

/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserInput'
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: User not found
 *         content:
 *           application/json:
 *             examples:
 *               UserNotFound:
 *                 $ref: '#/components/schemas/ErrorResponse/examples/UserNotFound'
 *       500:
 *         description: Server error
 */
router.put("/", updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         example: 677c9e2f5cfeadbd23a41ce1
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: User not found
 *         content:
 *           application/json:
 *             examples:
 *               UserNotFound:
 *                 $ref: '#/components/schemas/ErrorResponse/examples/UserNotFound'
 *       500:
 *         description: Server error
 */
router.delete("/:id", deleteUser);

export default router;
