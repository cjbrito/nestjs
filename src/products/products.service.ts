import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {IProduct} from './interface/product'

@Injectable()
export class ProductsService {

  products: IProduct[] =[
    {
      id:1,
      name:"demo",
      description:"descripcion de la demo",
      value:12,
      isActive:true,
    }, 
    {
      id:2,
      name:"demo2",
      description:"descripcion de la demo2",
      value:13,
      isActive:false,
    }, 
    {
      id:3,
      name:"demo2",
      description:"descripcion de la demo2",
      value:13,
      isActive:false,
    }
  ];

  create(createProductDto: CreateProductDto) {
   
    const text= `This action adds a new product ${Math.random()*10}`;
    return {text:text, create:createProductDto};
  }

  findAll() {
    return {text:`This action returns all products`,products:this.products};
  }

  findOne(id: number):IProduct{
    return this.products.find(product=>product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const text= `This action updates a #${id}, product`;
    return {text:text, update:updateProductDto};
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
