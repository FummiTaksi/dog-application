import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

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
}
