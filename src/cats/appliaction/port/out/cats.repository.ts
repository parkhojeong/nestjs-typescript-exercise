import { Cat } from '../../../domain/cat';

export interface CatsRepository {
  getAllCats: () => Promise<Cat[]>;
}
