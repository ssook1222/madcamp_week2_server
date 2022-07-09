import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {FashionList_recommend} from "./FashionList_recommend";

@Entity()
export class weather_recommend{
    @PrimaryColumn()
    id : number;

    @Column()
    weather: string;

    @ManyToOne(() => FashionList_recommend, flist => flist.id)
    flist : FashionList_recommend[];

}