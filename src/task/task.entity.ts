import { User } from './../user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    desc:string;
    
    @Column()
    userId: number;

    @ManyToOne(()=> User ,(user:User)=>user.task)
    @JoinColumn({name: 'userId'})
    user: User;
}
