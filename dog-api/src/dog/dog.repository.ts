import { EntityRepository, Repository } from 'typeorm';
import { Dog } from '../entities/dog.entity';

@EntityRepository(Dog)
export class DogRepository extends Repository<Dog> {}
