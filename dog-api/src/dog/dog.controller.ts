import { Body, Controller, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from '../entities/dog.entity';
import { CreateDogDto } from './createDog.dto';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  /**
   * Creates a Dog entity
   */
  @Post()
  public create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogService.create(createDogDto.dogSize);
  }
}
