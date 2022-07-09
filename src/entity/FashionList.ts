import {Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {weather} from "./weather";



@Entity()
export class FashionList{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:10})
    top: string;

    @Column({length:10})
    top_color: string;

    @Column({length:10})
    bottom: string;

    @Column({length:10})
    bottom_color: string;

    @Column({length:10})
    accessory: string;

    @Column({length:10})
    accessory_color : string;

    @Column({length:10})
    outer: string;

    @Column({length:10})
    outer_color: string;

    @Column()
    gender: boolean;

    @Column()
    min_tem: number;

    @Column()
    max_tem: number;

}