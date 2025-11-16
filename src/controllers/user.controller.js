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

