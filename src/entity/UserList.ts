import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";

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
}