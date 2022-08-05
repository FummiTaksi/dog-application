import {Body, Controller, Get, Post, Put} from '@nestjs/common';
import { DogService } from './dog.service';
import { Dog } from '../entities/dog.entity';
import { CreateDogDto } from './createDog.dto';
import {AddOwnerDto} from "./addOwner.dto";

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

  @Put()
  public addOwner(@Body() addOwnerDto: AddOwnerDto): Promise<Dog> {
    return this.dogService.addOwner(addOwnerDto);
  }

  @Get()
  public findAll(): Promise<Dog[]> {
    return this.dogService.findAll();
  }
}
