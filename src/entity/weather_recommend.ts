import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {FashionList_recommend} from "./FashionList_recommend";

@Entity()
export class weather_recommend {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weather: string;

    @ManyToOne(() => FashionList_recommend, flist => flist.id)
    flist: FashionList_recommend[];


}