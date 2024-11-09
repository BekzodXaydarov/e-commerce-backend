import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) { }
    async create(createUserDto: CreateUserDto) {
        return await this.userRepository.create(createUserDto)
    }

    async findAll() {
        return this.userRepository.findAll()
    }

    async findOne(id: number) {
        const user = await this.userRepository.findByPk(id)

        if (!user) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        return user
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findByPk(id)

        if (!user) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        const newUser = await this.userRepository.update({ ...updateUserDto }, { where: { id: id }, returning: true })
        return newUser
    }

    async remove(id: number) {
        const user = await this.userRepository.findByPk(id)
        if (!user) {
            throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
        }
        await this.userRepository.destroy({
            where: {
                id: id
            }
        })

        return "User Deleted"
    }
}
