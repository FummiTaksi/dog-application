import { Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Human } from './human.entity';

export enum DogSize {
  Small = 1,
  Medium = 2,
  Large = 3,
}

@Entity()
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('int')
  public size: DogSize;

  @ManyToOne(() => Human)
  public owner: Human;
}
