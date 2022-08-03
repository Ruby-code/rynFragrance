import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { OrdersService } from '../../SERVICES/order/orders.service';
import { CreateOrderDto } from '../../../orders/dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
    @Get(':get')
      getOrder(@Param('get') get : string): string{
        return this.ordersService.findByName(get);

        // or use this but the code above is the cleaner code
        // getOrder(@Param() param): string{
          // return `Item ${param.get}`;
  }
  @Post()
  insertOrder(@Body() createOrderDto: CreateOrderDto): any{
     const postdetails = this.ordersService.store(createOrderDto);
     if (!postdetails) {
      throw  new BadRequestException()
     }
    return `Succesfully Posted`;
     

    // return `Fragrance: ${CreateOrderDto.fragrance}
    //  Size: ${CreateOrderDto.size} 
    //  Type: ${createOrderDto.type}
    //   Quantity: ${createOrderDto.qty}`;
    // @Post()
    // createFragrance(@Body() regBody: FragranceDto): any[] {
    //   return this.fragranceService.store(regBody);

  }

  @Get()
     getAll(): any[] {
   return this.ordersService.findAll();
     }

//   @Get()
//   getAll(@Req()req: Request,@Res() res: Response): Response{
// console.log(req.url); 
//  return res.send('Hello Girl');
//  }

  @Post()
  postOrder(){
    return ' This is what i ordered for';
  }

  @Put(':get')
  update(@Body() updateOrderDto: CreateOrderDto, @Param('get') get): string{
    return `Update ${get} -- Name: ${updateOrderDto.fragrance} Size: ${updateOrderDto.size}`;
  }

  @Patch()
  patchOrder(){
    return 'i want to patch order';
  }

  @Delete(':get')
  deleteOrder(@Param('get') get): string{
    return `Deleted ${get}`;
  }
}
      