import { CatsRepository } from '../../appliaction/port/out/cats.repository';
import { fakeCats } from './data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsRepositoryMemoryImpl implements CatsRepository {
  async getAllCats() {
    return fakeCats;
  }
}
