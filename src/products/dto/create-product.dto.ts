import { IsString , IsNumber, IsBoolean } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
    @IsString()
    @ApiProperty()
    name:string;
    @IsString()
    @ApiProperty()
    description:string;
    @IsNumber()
    @ApiProperty()
    value:number;
    isActive!:boolean;
}
