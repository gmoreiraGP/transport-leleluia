import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import Invoice from "./Invoice";

@Entity("address")
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  receiverName: string;

  @Column()
  phone: string;

  @Column()
  document: string;

  @Column()
  place: string;

  @Column()
  number: string;

  @Column()
  cep: string;

  @Column()
  setor: string;

  @Column()
  city: string;

  @OneToOne(type => Invoice)
  @JoinColumn()
  invoice: Invoice;
}
