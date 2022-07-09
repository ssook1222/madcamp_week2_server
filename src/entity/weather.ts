import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {FashionList} from "./FashionList";


@Entity()
export class weather {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weather: string;

    @ManyToOne(() => FashionList, flist => flist.id)
    flist: FashionList[];
}