import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDto{

    @IsString()
    @IsNotEmpty()
     fragrance: string;
     @IsNumber()
     @IsNotEmpty()
    size: any;
    @IsString()
    @IsNotEmpty()
     type: string;
     @IsNumber()
     @IsNotEmpty()
    qty: number;
   


}

