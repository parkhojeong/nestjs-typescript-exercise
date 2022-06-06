import { Module } from '@nestjs/common';
import { CatsGetService } from './appliaction/service/cats.getService';
import { CatsController } from './adpater/in/cats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsRepositoryMongoImpl } from './adpater/out/mongo/cats.repository.mongoImpl';
import { Cat, CatSchema } from './adpater/out/mongo/schemas/cat.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [
    CatsGetService,
    { provide: 'CatsRepository', useClass: CatsRepositoryMongoImpl },

    { provide: 'GetAllCatsUseCase', useClass: CatsGetService },
  ],
  controllers: [CatsController],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
  ],
})
export class CatsModule {}
