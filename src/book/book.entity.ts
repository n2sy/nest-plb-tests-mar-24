import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("livre")
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    // name : 'titre',
    length: 50,
    // update : false,
    // unique : true,
    // type : ''
  })
  title: string;

  @Column()
  editor: string;

  @Column({
    type: "int",
  })
  year: number;
}
