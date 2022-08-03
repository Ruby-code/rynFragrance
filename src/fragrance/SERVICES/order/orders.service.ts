import { Body, Injectable, Param, Req } from '@nestjs/common';
import { CreateOrderDto } from 'src/orders/dto/create-order.dto';
// import { request } from 'express';
import { Orders } from '../../../orders/interface/orders.interface'; 
@Injectable()
export class OrdersService {

    // private readonly 
   orderArray: any[] = [];
        // {
        //     id: "325464",
        //     fragrance: "bab n",
        //     size: "small",
        //     type: "nujd",
        //     qty: 100,
        // },
        // {
        //     id: "32235",
        //     fragrance: "bab n",
        //     size: "small",
        //     type: "nujd",
        //     qty: 50,
        // },
        // {
        //     id: "32214",
        //     fragrance: "bgree n",
        //     size: "small",
        //     type: "nujd",
        //     qty: 140,
        // }
    

    findAll(){
        return this.orderArray;
    }
    // private order1: Orders [ ] = [];

    // insertOrder(name: string,size: number, type: string ){
    //     const newOrder = new Orders()

    // }
    findByName(fragranceName: string) {
        return this.orderArray.find((element) => {
          return element.fragrance === fragranceName;
        });
    }

    postOrder(@Body() createOrdersDto: CreateOrderDto ): any  {
    return  ` name: ${createOrdersDto.fragrance}  
    size:  ${createOrdersDto.size}  
    Type:  ${createOrdersDto.type}  
    Quantity:  ${createOrdersDto.qty}`; 
 
    }
    
  store(regBody:CreateOrderDto){
    this.orderArray.push(regBody);
 
     return this.findAll();
   }
}

