import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'testPassword',
      database: 'car-value',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule, 
    ReportsModule],
})
export class AppModule {}
