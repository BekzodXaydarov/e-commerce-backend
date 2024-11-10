import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: 'Product', description: 'Product title' })
  @IsString()
  title: string;

  @ApiProperty({ example: '', description: 'Product img' })
  @IsString()
  img: string;

  @ApiProperty({ example: '15.00', description: 'Product price' })
  @IsString()
  price: string;

  @ApiProperty({ example: '1', description: 'Discount ID' })
  @IsNumber({}, { message: 'Price`discount id must be a number' })
  discountId: number;

  @ApiProperty({ example: 5, description: 'Product star' })
  @IsNumber({}, { message: 'Price`star id must be a number' })
  star: number;

  @ApiProperty({example:"95",description:"Product rating"})
  @IsNumber({},{message:"Product's rating must be number"})
  rating: number

  @ApiProperty({example:"1",description:"Product Details ID"})
  @IsNumber({},{message:"Product's productDetailsId must be number"})
  productDetailsId: number;

  @ApiProperty({example:"1",description:"Product Category"})
  @IsNumber({},{message:"Product's category must be number"})
  categoryId: number;

  @ApiProperty({example:"1",description:"Product's colours"})
  @IsNumber({},{message:"Product's color must be number"})
  colours: number;
}
