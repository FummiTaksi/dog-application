import { Body, Controller, Post } from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from '../entities/dog.entity';
import { CreateDogDto } from './createDogDto';

@Controller('dogs')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  public create(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogService.create(createDogDto.dogSize);
  }
}
