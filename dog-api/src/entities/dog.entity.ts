import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Human } from './human.entity';

export enum DogSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

@Entity()
export class Dog {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('varchar')
  public size: DogSize;

  @ManyToOne(() => Human)
  public owner: Human;
}
