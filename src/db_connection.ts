import { User } from './user/user.entity';
import { UserToken } from './user-tokens/entities/user-token.entity';
import 'dotenv/config' 
import { Task } from './task/task.entity';
export default{

    type: 'mysql',
    host: process.env.HOST,
    port: +process.env.dbPORT,
    username: process.env.dbUSER,
    password: process.env.PASSWORD,
    database: 'coreAuth',
    entities: [User,UserToken,Task],
    synchronize: true,
};

