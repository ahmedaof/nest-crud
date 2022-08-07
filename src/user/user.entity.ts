import { Task } from './../task/task.entity';
import { UserToken } from "src/user-tokens/entities/user-token.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class User {
    @Column({unique: true})
    email:string;
    @Column()
    name:string;
    @Column()
    password:string;
    @Column()
    isAdmin:boolean=false;
    @PrimaryGeneratedColumn()
    id:number;
    @OneToMany((type) => UserToken, (UserToken: UserToken) => UserToken.user)
    token: UserToken[];

    @OneToMany((type) => Task, (task: Task) => task.user)
    task: Task[];
}
