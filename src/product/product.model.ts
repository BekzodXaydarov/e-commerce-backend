import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'product' })
export class Product extends Model<Product> {
  @ApiProperty({ example: '1', description: 'Product id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example:"Product",description:"Product title"})
  @Column({type:DataType.STRING})
  title: string

  @ApiProperty({example:"",description:"Product img"})
  @Column({type:DataType.STRING})
  img: string

  @ApiProperty({example:"15.00",description:"Product price"})
  @Column({type:DataType.STRING})
  price: string

  @ApiProperty({example:"1",description:"Discount ID"})
  @Column({type:DataType.INTEGER})
  discountId: number;

  @ApiProperty({example:5,description:"Product star"})
  @Column({type:DataType.INTEGER})
  star: number;

  @ApiProperty({example:"95",description:"Product rating"})
  @Column({type:DataType.INTEGER})
  rating: number;

  @ApiProperty({example:"1",description:"Product Details ID"})
  @Column({type:DataType.INTEGER})
  productDetailsId: number;

  @ApiProperty({example:"1",description:"Product Category"})
  @Column({type:DataType.INTEGER})
  categoryId: number;

  @ApiProperty({example:"1",description:"Product's colours"})
  @Column({type:DataType.INTEGER})
  colours: number;
}
