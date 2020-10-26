import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  PrimaryColumn
} from "typeorm";
import Address from "./Address";
import Product from "./Product";

@Entity("invoice")
export default class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  numberNote: string;

  @Column()
  document: number;

  @Column()
  emission: Date;
}
