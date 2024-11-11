import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: "category" })
export class Category extends Model<Category> {
    @ApiProperty({ example: "1", description: "Caregiry id" })
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
    id: number

    @ApiProperty({ example: "Clothes", description: "Category Title" })
    @Column({ type: DataType.STRING })
    title: string

    @ApiProperty({ example: "description", description: "Category Description" })
    @Column({ type: DataType.STRING })
    description: string


    @ApiProperty({ example: "", description: "Category Image" })
    @Column({ type: DataType.STRING })
    img: string
}