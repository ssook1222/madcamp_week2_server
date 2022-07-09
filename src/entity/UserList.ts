import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {FashionList} from "./FashionList";



@Entity()
export class UserList {
    @PrimaryColumn({length:15})
    id: String;

    @Column({length:15})
    nickname: string;

    @Column({length:15})
    password: string;

    @Column()
    gender: boolean;

    @OneToMany(( )=> FashionList, flist => flist.id )
    flist : FashionList[];
}