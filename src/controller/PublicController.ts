import {getConnection} from "typeorm";
import {FashionList} from "../entity/FashionList";

export class PublicController{

    static loadFashion = async (req, res)=>{
        let nickname;
        let top;
        let top_color;
        let bottom;
        let bottom_color;
        let accessory;
        let accessory_color;
        let outer;
        let outer_color;

        const raw_result = await getConnection().getRepository(FashionList).find({
            where:{
                public : true
            }, relations:{userlist: true}});
        let raw_data = {"data":raw_result};

        var data_array = new Array();

        for(let i=0; i<raw_data.data.length; i++){
            nickname = raw_data.data[i].userlist["nickname"];
            top = raw_data.data[i].top;
            top_color = raw_data.data[i].top_color;
            bottom = raw_data.data[i].bottom;
            bottom_color = raw_data.data[i].bottom_color;
            accessory = raw_data.data[i].accessory;
            accessory_color = raw_data.data[i].accessory_color;
            outer = raw_data.data[i].outer;
            outer_color = raw_data.data[i].outer_color;
            data_array.push(
                {
                    "nickname": nickname,
                    "top": top,
                    "top_color": top_color,
                    "bottom": bottom,
                    "bottom_color": bottom_color,
                    "accessory": accessory,
                    "accessory_color": accessory_color,
                    "outer":outer,
                    "outer_color":outer_color
                }
            );

        }
        res.send({"data":data_array});
    }
}