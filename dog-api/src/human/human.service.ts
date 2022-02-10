import { HumanRepository } from './human.repository';
import { Injectable } from '@nestjs/common';
import { CreateHumanDto } from './createHuman.dto';
import { Human } from '../entities/human.entity';

@Injectable()
export class HumanService {
  public constructor(private readonly humanRepository: HumanRepository) {}

  public async create(createHumanDto: CreateHumanDto): Promise<Human> {
    const human = new Human();
    human.name = createHumanDto.name;

    return this.humanRepository.save(human);
  }
}
