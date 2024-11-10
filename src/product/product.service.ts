import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product) private readonly productRepository: typeof Product,
  ) {}

  async create(createProductDto: CreateProductDto) {
    if (createProductDto.star >= 5) {
      throw new HttpException(
        'Yulduz 5ta dan past Bo`lishi kerak',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.productRepository.create(createProductDto);
  }

  async findAll() {
    return await this.productRepository.findAll();
  }

  async findOne(id: number) {
    const product = await this.productRepository.findByPk(id);

    if (!product) {
      throw new HttpException('Id notog`ri', HttpStatus.BAD_REQUEST);
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.findByPk(id);

    if (!product) {
      throw new HttpException('Id notog`ri', HttpStatus.BAD_REQUEST);
    }
     
    if (updateProductDto.star >= 5) {
      throw new HttpException(
        'Yulduz 5ta dan past Bo`lishi kerak',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newProduct = await this.productRepository.update(
      { ...updateProductDto },
      { where: { id: id }, returning: true },
    );
    return newProduct;
  }
}
