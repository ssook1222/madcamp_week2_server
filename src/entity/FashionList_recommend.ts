import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {weather_recommend} from "./weather_recommend";

@Entity()
export class FashionList_recommend{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:10})
    top: string;

    @Column({length:10})
    top_color: string;

    @Column({length:10})
    bottom?: string;

    @Column({length:10})
    bottom_color?: string;

    @Column({length:10})
    accessory?: string;

    @Column({length:10})
    accessory_color? : string;

    @Column({length:10})
    outer?: string;

    @Column({length:10})
    outer_color?: string;

    @Column()
    gender: boolean;

    @Column()
    min_temp: number;

    @Column()
    max_temp: number;

    @OneToMany(()=> weather_recommend, weathers => weathers.id)
    weathers : weather_recommend[];
}