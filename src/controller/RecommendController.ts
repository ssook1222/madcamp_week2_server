import {FashionList_recommend} from "../entity/FashionList_recommend";
import {Between, Equal, getConnection, LessThanOrEqual, MoreThanOrEqual} from "typeorm";
import {weather_recommend} from "../entity/weather_recommend";
import {weather} from "../entity/weather";

export class RecommendController{



    static recFashion = async (req, res)=>{
        const gender =req.body.gender;
        const temp = req.body.temp;
        const snow = req.body.snow;
        const rain = req.body.rain;






        const result1 = await getConnection().getRepository(FashionList_recommend).find({

            where:{
                min_temp : LessThanOrEqual(temp),
                max_temp : MoreThanOrEqual(temp),
                gender : Equal(gender)
            }

        })

        let weather1;
        if(snow != null){
            weather1 = "눈";
        }else if(rain != null){
            weather1 = "비";
        }else{
            weather1 = "맑음";
        }


        const result2 = await getConnection().getRepository(weather_recommend).find(weather1)
        const id_list = new Array<number>;

        for(let i = 0; i<result1.length; i++ ){
            let j = result1[i].id;
            const r = await getConnection().getRepository(weather_recommend).find({
                where:{
                    weather : Equal(weather1),
                    id: Equal(j)
                }
            })
            if(r!= null){
                id_list.push(j);
            }

        }
        const ans_list = new Array<FashionList_recommend>;
        for(let i = 0; i<id_list.length; i++){
            let j = id_list[i];
            const r = await getConnection().getRepository(FashionList_recommend).findOne({
              where:{
                  id: Equal(j)
              }
            })
            ans_list.push(r);
            console.log(r);

        }



        console.log(ans_list);


    }


}