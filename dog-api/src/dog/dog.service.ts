import { DogRepository } from './dog.repository';
import { Injectable } from '@nestjs/common';
import { Dog, DogSize } from '../entities/dog.entity';
import { HumanRepository } from '../human/human.repository';
import { AddOwnerDto } from './addOwner.dto';

@Injectable()
export class DogService {
  public constructor(
    private readonly dogRepository: DogRepository,
    private readonly humanRepository: HumanRepository,
  ) {}

  public async create(dogSize: DogSize): Promise<Dog> {
    const dog = new Dog();
    dog.size = dogSize;

    return this.dogRepository.save(dog);
  }

  public async addOwner(addOwnerDto: AddOwnerDto): Promise<Dog> {
    const dog = await this.dogRepository.findOne(addOwnerDto.dogId);
    const human = await this.humanRepository.findOne(addOwnerDto.humanId);

    dog.owner = human;

    return this.dogRepository.save(dog);
  }

  public async findAll(): Promise<Dog[]> {
    return this.dogRepository.find();
  }
}
