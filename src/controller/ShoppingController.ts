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
        res.send(shopping.data);
    }
}