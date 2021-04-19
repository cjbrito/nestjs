import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import {IProduct} from './interface/product'
import {Repository} from 'typeorm';

@Injectable()
export class ProductService {
   constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ){  } 

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

  async create(createProductDto: CreateProductDto){
    const obj=  this.productRepository.create(createProductDto)
    
    return await this.productRepository.save(obj);
  }

  async findAll():Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number):Promise<Product>{
    const obj =await this.productRepository.findOne(id);
    if (!obj) {  throw new NotFoundException()}
    return obj;
  }

  async update(id: number, updateProductDto: UpdateProductDto):Promise<Product> {
    const obj=await this.productRepository.findOne(id);
    if(!obj) {  
      throw new NotFoundException("Product not exist");
    }
    const editObj= Object.assign(obj, updateProductDto);
    console.log(editObj);
    return await this.productRepository.save(editObj);
  }

  async remove(id: number) {
    return await this.productRepository.delete(id);
  }
}
