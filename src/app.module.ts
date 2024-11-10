import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.model';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.model';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Admin,User,Product],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    UserModule,
    ProductModule,
    
  ],
})
export class AppModule { }
