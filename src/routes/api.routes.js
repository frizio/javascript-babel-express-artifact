import { Router } from "express";
import { 
  home
} from "../controllers/api.controller";


const router = Router();

router.get("/", home);

export default router;
