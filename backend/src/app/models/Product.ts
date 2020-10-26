import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";

import Invoice from "./Invoice";

@Entity("product")
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @OneToOne(type => Invoice)
  @JoinColumn()
  invoice: Invoice;
}
