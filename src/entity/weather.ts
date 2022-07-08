import {Column, Entity, ManyToMany} from "typeorm";
import {FashionList} from "./FashionList";

@Entity()
export class weather {
    @Column()
    weather: string;

    @Column()
    fid: number;

}