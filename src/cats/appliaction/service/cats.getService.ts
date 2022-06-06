import { Inject, Injectable } from '@nestjs/common';
import { CatsRepository } from '../port/out/cats.repository';
import { GetAllCatsUseCase } from '../port/in/getAllCatsUseCase';

@Injectable()
export class CatsGetService implements GetAllCatsUseCase {
  constructor(
    @Inject('CatsRepository') private readonly catsRepository: CatsRepository,
  ) {}

  public async getAllCats() {
    return await this.catsRepository.getAllCats();
  }
}
