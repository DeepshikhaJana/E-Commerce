import express from "express";
import {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
//   verifyStripe,
} from "../controller/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// ADMIN FEATURES
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// PAYMENT FEATURES
orderRouter.post("/place", authUser, placeOrder);

// USER FEATURE
orderRouter.post("/userorders", authUser, userOrders);

// verify payment
// orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
