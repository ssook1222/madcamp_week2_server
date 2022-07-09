import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {FashionList} from "./FashionList";

@Entity()
export class weather {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weather: string;

    @Column()
    fid: number;
}