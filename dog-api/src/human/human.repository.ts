import { EntityRepository, Repository } from 'typeorm';
import { Human } from '../entities/human.entity';

@EntityRepository(Human)
export class HumanRepository extends Repository<Human> {}
