import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'user' })
export class User extends Model<User> {
    @ApiProperty({ example: "1", description: "User id" })
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, unique: true })
    id: number;

    @ApiProperty({ example: "Bekzod", description: "User name" })
    @Column({ type: DataType.STRING })
    first_name: string

    @ApiProperty({ example: "Xaydarov", description: "User last name" })
    @Column({ type: DataType.STRING })
    last_name: string

    @ApiProperty({ example: "123456789", description: "User password" })
    @Column({ type: DataType.STRING,unique:true })
    password: string

    @ApiProperty({ example: "bekzod@gmail.com", description: "User email" })
    @Column({ type: DataType.STRING,unique:true })
    email: string

    @ApiProperty({ example: "Namangan", description: "User address" })
    @Column({ type: DataType.STRING })
    address: string

}