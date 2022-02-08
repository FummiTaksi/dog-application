import { DogRepository } from './dog.repository';
import { Injectable } from '@nestjs/common';
import { Dog, DogSize } from '../entities/dog.entity';

@Injectable()
export class DogService {
  public constructor(private readonly dogRepository: DogRepository) {}

  public async create(dogSize: DogSize): Promise<Dog> {
    const dog = new Dog();
    dog.size = dogSize;

    return this.dogRepository.save(dog);
  }
}
