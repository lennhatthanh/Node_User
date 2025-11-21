import User from "../models/user.model.js";
import { success, error } from "../utils/response.js";

export const createUser = async (req, res) => {
    try {
        const { email } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return error(res, "User already exists", 400, "USER_EXISTS");
        }
        const user = new User(req.body);
        await user.save();
        success(res, "User created successfully", user);
    } catch (err) {
        error(res, err.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userExists = await User.findOne({ _id: id });
        if (!userExists) {
            return error(res, "User does not exist", 400, "USER_NOT_FOUND");
        }
        await userExists.deleteOne();
        success(res, "User deleted successfully");
    } catch (err) {
        error(res, err.message);
    }
};

export const updateUser = async (req, res) => {
    try {
        const { _id, email, name, password } = req.body;
        const userExists = await User.findOne({ _id });
        if (!userExists) {
            return error(res, "User does not exist", 400, "USER_NOT_FOUND");
        }
        const userUpdate = await User.updateOne({ _id }, { email, name, password });
        success(res, "User updated successfully", userUpdate);
    } catch (err) {
        error(res, err.message);
    }
};

export const getAllUser = async (req, res) => {
    try {
        const userData = await User.find();
        success(res, "Users retrieved successfully", userData);
    } catch (err) {
        error(res, err.message);
    }
};
