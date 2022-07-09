import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {weather} from "./weather";
import {UserList} from "./UserList";



@Entity()
export class FashionList{
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
    public: boolean;

    @Column()
    min_temp: number;

    @Column()
    max_temp: number;

    @ManyToOne(() => UserList, userlist => userlist.id)
    userlist : UserList[];

    @OneToMany(() => weather, weathers => weathers.id)
    weathers: weather[];

}