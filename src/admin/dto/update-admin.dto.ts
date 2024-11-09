import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateAdminDto {
    @ApiProperty({ example: "Bekzod", description: "Admin name" })
    @IsString()
    first_name: string

    @ApiProperty({ example: "Xaydarov", description: "Admin lastName" })
    @IsString()
    last_name: string

    @ApiProperty({ example: "123456789", description: "Admin password" })
    @IsString()
    password: string

    @ApiProperty({ example: "bekzod@gmail.com", description: "Admin email" })
    @IsEmail({}, { message: 'Invalid email address' })
    @IsNotEmpty()
    @IsString()
    email: string

}