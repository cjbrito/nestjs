import { IsString , IsNumber, IsBoolean } from "class-validator";

export class CreateProductDto {
    @IsString()
    name:string;
    @IsString()
    description:string;
    @IsNumber()
    value:number;
    isActive?:boolean;
}
