import { Dog } from '@src/core/domain/entities/Dog/Dog';

import { CreateDogDto } from '@src/application/dtos/Dog/CreateDogDto/CreateDogDto';

export const mockCreateDogDto: CreateDogDto = { name: 'bob', breed: 'mongrel' };
export const mockDogWithoutId = mockCreateDogDto as Dog;
export const mockDog: Dog = {
  ...mockCreateDogDto,
  id: 'bf60d2e5-24d7-40f7-ab8e-21493cc6f8bf',
  url: 'Bob_lqwsqq16_bf60d',
};
