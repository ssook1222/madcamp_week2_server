export class ShoppingController {
    static test = async(req, res)=> {
        var item = req.params.item;
        var url ="https://openapi.naver.com/v1/search/shop?query="+encodeURI(item);

        const axios = require('axios');
        const shopping = await axios.get(url,{
            headers:{
                'X-Naver-Client-Id': "aXKnFEBfkld800GKJVOK",
                'X-Naver-Client-Secret':"x8MuDLcUWi"
            }
        });
        console.log(shopping.data.items);

        var data_array = new Array();
        for(var i=0; i<shopping.data.items.length; i++){
            const title = shopping.data.items[i].title;
            const url = shopping.data.items[i].link;
            const price = shopping.data.items[i].lprice;
            data_array.push({"title":title,"url":url,"price":price});
        }
        res.send({"data":data_array});
    }
}