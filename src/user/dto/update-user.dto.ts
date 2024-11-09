import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
    @ApiProperty({ example: "Bekzod", description: "User name" })
    @IsString()
    first_name: string

    @ApiProperty({ example: "Xaydarov", description: "User lastName" })
    @IsString()
    last_name: string

    @ApiProperty({ example: "123456789", description: "User password" })
    @IsString()
    password: string

    @ApiProperty({ example: "bekzod@gmail.com", description: "User email" })
    @IsEmail({}, { message: 'Invalid email address' })
    @IsNotEmpty()
    @IsString()
    email: string

    @ApiProperty({ example: "Namangan", description: "User address" })
    @IsString()
    address: string
}