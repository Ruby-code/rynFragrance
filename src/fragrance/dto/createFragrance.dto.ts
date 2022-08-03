import { IsString, IsNumber, IsBoolean,IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class FragranceDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    size: number;

    @IsBoolean()
    @IsOptional()
    discount: boolean;
    
    @IsNumber()
    @IsNotEmpty()
    stock: number;

}