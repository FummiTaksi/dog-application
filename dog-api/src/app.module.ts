import path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';
import { DogRepository } from './dog/dog.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [path.join(__dirname, 'entities', '*.entity.{ts,js}')],
      migrations: [path.join(__dirname, 'migrations', '*.{ts,js}')],
      migrationsTableName: process.env.TYPEORM_MIGRATIONS_TABLE_NAME,
      migrationsRun: true,
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      },
    }),

    TypeOrmModule.forFeature([DogRepository]),
  ],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
