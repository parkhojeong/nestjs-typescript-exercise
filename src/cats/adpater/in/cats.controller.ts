import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllCatsUseCase } from '../../appliaction/port/in/getAllCatsUseCase';

@Controller('cats')
export class CatsController implements CatsController {
  constructor(
    @Inject('GetAllCatsUseCase')
    private readonly catsService: GetAllCatsUseCase,
  ) {}

  @Get('/')
  getAllCat() {
    return this.catsService.getAllCats();
  }
}
