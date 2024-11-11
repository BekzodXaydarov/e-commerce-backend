import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/admin.model';
import { UserModule } from './user/user.module';
import { User } from './user/user.model';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.model';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.model';
import { DiscountModule } from './discount/discount.module';


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
      models: [Admin,User,Product,Category],
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    UserModule,
    ProductModule,
    CategoryModule,
    DiscountModule,
    
  ],
})
export class AppModule { }
