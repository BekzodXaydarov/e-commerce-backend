import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category) private readonly categoryRepositort: typeof Category) { }

    async create(createCategoryDto: CreateCategoryDto) {
        return await this.categoryRepositort.create(createCategoryDto)
    }

    async findAll() {
        return await this.categoryRepositort.findAll()
    }

    async findOne(id: number) {
        const category = await this.categoryRepositort.findByPk(id)

        if (!category) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        return category
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto) {
        const category = await this.categoryRepositort.findByPk(id)
        if (!category) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        const newCategory = await this.categoryRepositort.update({
            ...updateCategoryDto
        }, {
            where: {
                id: id
            },
            returning: true
        })
        return newCategory
    }

    async remove(id: number) {
        const category = await this.categoryRepositort.findByPk(id)
        if (!category) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        await this.categoryRepositort.destroy({
            where: {
                id: id
            }
        })
        return "Category deleted"
    }
}
