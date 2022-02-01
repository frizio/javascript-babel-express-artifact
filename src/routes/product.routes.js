import { Router } from "express";
import { 
  createProduct, 
  deleteProduct, 
  readProduct, 
  readProducts, 
  updateProduct
} from "../controllers/product.controller";


const router = Router();

router.get("/read-products", readProducts);
router.get("/read-product", readProduct);
router.post("/create-product", createProduct);
router.put("/update-product", updateProduct);
router.delete("/delete-product", deleteProduct);

export default router;
