import { Cat } from '../../../domain/cat';

export interface GetAllCatsUseCase {
  getAllCats: () => Promise<Cat[]>;
}
