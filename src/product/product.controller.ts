import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { UpdateProductDto } from './dto/update-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  find() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id:number){
    return this.productService.findOne(id)
  }

  @Patch(":id")
  update(@Param("id") id:number,@Body() updateProductDto:UpdateProductDto){
    return this.productService.update(id,updateProductDto)
  }
  
  @Delete(":id")
  remove(@Param("id") id:number){
    return this.productService.remove(id)
  }
}
