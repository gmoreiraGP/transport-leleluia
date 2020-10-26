import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Address from "../models/Address";
import Invoice from "../models/Invoice";
import Product from "../models/Product";

class InvoiceController {
  async index(req: Request, res: Response) {
    const invoices = await getRepository(Invoice).find();
    return res.json(invoices);
  }

  async getById(req: Request, res: Response) {
    const invoice = await getRepository(Invoice);
    const id = req.body;

    invoice.findOne({ where: id });

    res.json(invoice);
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(Invoice);
    const invoice = req.body;

    const newInvoice = repository.create(invoice);
    await repository.save(newInvoice);

    return res.status(200).json(newInvoice);
  }

  async products(req: Request, res: Response) {
    const repository = getRepository(Product);
    const product = req.body;

    const newProduct = repository.create(product);
    await repository.save(newProduct);

    return res.status(200).json(newProduct);
  }
  async address(req: Request, res: Response) {
    const repository = getRepository(Address);
    const address = req.body;

    const newAddress = repository.create(address);
    await repository.save(newAddress);

    return res.status(200).json(newAddress);
  }
}

export default new InvoiceController();
