import { Router } from "express";
import { getCarts, postCart, getId, postIntoCart, deleteProductFromCart, updateCart, updateProductsToCart, purchaseCart} from '../controllers/carts.controller.js'
import { authenticateUser } from '../controllers/sessions.controller.js'
import { authToken } from "../utils.js";
const router = Router();


router.get("/", authToken, getCarts)

router.post("/", authenticateUser, authToken, postCart)

router.get("/:id", authToken, getId)

router.post("/:cid/product/:pid", authToken, postIntoCart)

router.delete("/:cid/product/:pid",authToken, deleteProductFromCart)

router.put("/:cid", authToken, updateCart)

router.put("/:cid/products/:pid", authToken, updateProductsToCart)

router.post("/:cid/purchase", authToken, purchaseCart)




export default router;
