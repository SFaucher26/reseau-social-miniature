import { verifyUserToken } from "../services/jwt.js";
import User from "../models/userModel.js";

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {Function} next
 */
export async function requireAuthToken(req, res, next) {
  const token = req.headers.authorization;
  const userPayload = await verifyUserToken(token).catch((error) => {
    res.status(403).json({ error: true, message: "Acces refused" });
  });
  if (userPayload) {
    console.log("userPayload", userPayload);

    req.user = User.findById(userPayload.id);
    next();
  }
}
