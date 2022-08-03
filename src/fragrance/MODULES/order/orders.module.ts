import { Module } from '@nestjs/common';
import { OrdersService } from '../../SERVICES/order/orders.service';
import { OrdersController } from '../../CONTROLLERS/order/orders.controller';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
