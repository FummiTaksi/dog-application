import { HumanService } from './human.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateHumanDto } from './createHuman.dto';
import { Human } from '../entities/human.entity';

@Controller('humans')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Post()
  public create(@Body() createHumanDto: CreateHumanDto): Promise<Human> {
    return this.humanService.create(createHumanDto);
  }
}
