import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admin.model';
import { where } from 'sequelize';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private readonly adminRepository: typeof Admin) { }
  async create(createAdminDto: CreateAdminDto) {
    return await this.adminRepository.create(createAdminDto);
  }

  async findAll() {
    return await this.adminRepository.findAll();
  }

  async findOne(id: number) {
    const admin = await this.adminRepository.findByPk(id)

    if (!admin) {
      throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
    }

    return admin
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findByPk(id)
    if (!admin) {
      throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
    }

    const newAdmin = await this.adminRepository.update({ ...updateAdminDto }, { where: { id: id }, returning: true })
    return newAdmin
  }

  async remove(id: number) {
    const admin = await this.adminRepository.findByPk(id)
    if (!admin) {
      throw new HttpException("Id notog`ri", HttpStatus.BAD_REQUEST)
    }
    await this.adminRepository.destroy({
      where: {
        id: id,
      },
    });

    return "Admin Deleted";
  }
}
