import { Router } from "express";
import InvoiceController from "../app/controller/InvoiceController";

const router = Router();

router.post("/products", InvoiceController.products);
router.post("/address", InvoiceController.address);
router.get("/invoices", InvoiceController.store);

export default router;
