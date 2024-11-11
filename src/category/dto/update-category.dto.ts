import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class UpdateCategoryDto {
    @ApiProperty({example:"Clothes",description:"Category title"})
    @IsString()
    title: string

    @ApiProperty({example:"description",description:"Category Description"})
    @IsString()
    description: string

    
    @ApiProperty({example:"",description:"Category Image"})
    @IsString()
    img: string
}