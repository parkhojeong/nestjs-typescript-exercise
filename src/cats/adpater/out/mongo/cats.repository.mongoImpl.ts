import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CatsRepository } from '../../../appliaction/port/out/cats.repository';

@Injectable()
export class CatsRepositoryMongoImpl implements CatsRepository {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getAllCats(): Promise<Cat[]> {
    const res = await this.catModel.find().exec();
    const filteredRes: Cat[] = res.map((data) => {
      return {
        id: data._id as string,
        name: data.name,
      };
    });
    return filteredRes;
  }
}
