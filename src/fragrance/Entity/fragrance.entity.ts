import { order } from "src/orders/order.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrdersController } from "../CONTROLLERS/order/orders.controller";

@Entity()
export class Fragrance {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  size: number;

  @Column({ default: false })
  disount: boolean;

  @Column()
  stock: number;

  @Column({ default: true })
  isActive: boolean;

  // @ManyToOne(type => order, order => order.user)
  // orders: order[];
}