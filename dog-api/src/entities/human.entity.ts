import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Dog } from './dog.entity';

@Entity()
export class Human {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public name: string;

  @OneToMany(() => Dog, (dog) => dog.owner)
  public dogs: Dog[];
}
