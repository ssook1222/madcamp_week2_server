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

    static findUser = async (req, res) => {
        console.log(req.body)
        const id = req.body.id;
        const password = req.body.password;
        const result = await getConnection().getRepository(UserList).findOne({where:{id, password}});

        if(result != null){
            return res.status(200).send({ loginSuccess: true, message: "로그인 성공"});

        }

        else{
            return res.status(200).send({ loginSuccess: false, message: "로그인에 실패하였습니다."});
        }
        console.log(result);
        res.send(result);

    }
}