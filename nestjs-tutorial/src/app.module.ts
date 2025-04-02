import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Thay bằng username của bạn
      password: '123456', // Thay bằng password của bạn
      database: 'taskdb', // Thay bằng tên database của bạn
      entities: [Task],
      autoLoadEntities: true, // Tự động load entities
      synchronize: true, // Tự động tạo bảng (chỉ dùng trong development)
    }),
  ],
})
export class AppModule {}
