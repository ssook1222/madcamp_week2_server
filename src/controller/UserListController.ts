import {UserList} from "../entity/UserList";
import {getConnection, IsNull} from "typeorm";

export class UserListController{

    static addUser = async(req, res)=>{
        const {id, nickname, password, gender} = req.body;
        const userlist = new UserList();
        userlist.id = id;
        userlist.nickname = nickname;
        userlist.password = password;
        userlist.gender = gender;

        const result = await getConnection().getRepository(UserList).save(userlist);
        console.log(result);
        res.send(result);
    }
}