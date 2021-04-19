import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger'
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return await this.productService.create(createProductDto);
  }

  @Get()
  async findAll() {
   const data= await this.productService.findAll();
   return {
    message:"Respuesta Correcta",
    data,
    code:200
    };
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Product,
  })
  async findOne(@Param('id') id: string) {
    const data= await this.productService.findOne(+id);
    //return await this.productService.findOne(+id);
    return {
     message:"Respuesta Correcta",
     data,
     code:200
     }; 
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edit Product' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto):Promise<Product> {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Product' })
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
