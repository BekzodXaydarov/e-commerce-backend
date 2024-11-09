import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin> {
    @ApiProperty({ example: '1', description: 'Unique ID' })
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;


    @ApiProperty({ example: "Bekzod", description: "Admin name" })
    @Column({ type: DataType.STRING })
    first_name: string

    @ApiProperty({ example: "Xaydarov", description: "Admin last name" })
    @Column({ type: DataType.STRING })
    last_name: string

    @ApiProperty({ example: "123456789", description: "Admin password" })
    @Column({ type: DataType.STRING, unique: true })
    password: string

    @ApiProperty({ example: "bekzod@gmail.com", description: "Admin email" })
    @Column({ type: DataType.STRING, unique: true })
    email: string

}
