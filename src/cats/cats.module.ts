import { Module } from '@nestjs/common';
import { CatsGetService } from './appliaction/service/cats.getService';
import { CatsController } from './adpater/in/cats.controller';
import { CatsRepositoryMemoryImpl } from './adpater/out/cats.repository.memoryImpl';

@Module({
  providers: [
    CatsGetService,
    { provide: 'CatsRepository', useClass: CatsRepositoryMemoryImpl },
    { provide: 'GetAllCatsUseCase', useClass: CatsGetService },
  ],
  controllers: [CatsController],
})
export class CatsModule {}
