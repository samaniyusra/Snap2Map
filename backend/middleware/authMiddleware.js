import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;// directly from 'token' header
    //  console.log("Incoming token:", req.headers.token);

    if (!token) {
      return res.status(401).json({ success: false, message: "No authentication token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    const user = await User.findById(decoded.userId).select("-Password");
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User Not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("protect route", error.message);
    res.status(401).json({ success: false, message: error.message });
  }
};

