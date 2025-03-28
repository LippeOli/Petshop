import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from './pets/pets.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'petshop',
      password: '123',
      database: 'pet_shop',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PetsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
