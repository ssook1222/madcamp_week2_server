

export class WeatherController{
    static weatherLookRequest = async (req,res)=>{
        const convert = require('xml-js');
        var request = require('request');

        const ServiceKey = 'SZBwGGlg176EolbuT7gYxTRfBnuVKsOWYjNLnYfpjwnzPzQ82TbsYxo8tBVa7f7f0OG8VBVwh7bONOHs6OhYIg%3D%3D';
        const dataCd = "ASOS"
        const dateCd = "DAY"
        let data="";

        var now = new Date();
        var today = new Date(now.setDate(now.getDate()));

        var year = today.getFullYear();
        var month = today.getMonth();
        var date = today.getDate();

        var month_ = ("0"+(1+today.getMonth())).slice(-2);
        var day_ = ("0"+today.getDate()).slice(-2);

        var todayDt = year+month_+day_;

        var url ='http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=SZBwGGlg176EolbuT7gYxTRfBnuVKsOWYjNLnYfpjwnzPzQ82TbsYxo8tBVa7f7f0OG8VBVwh7bONOHs6OhYIg%3D%3D&pageNo=1&numOfRows=1000&dataType=XML&base_date='+todayDt+'&base_time=0500&nx=67&ny=100'

        const axios = require('axios');
        const get_test = await axios.get(url);
        var xmlToJson=convert.xml2json(get_test.data,{compact: true, spaces: 4})
        xmlToJson=JSON.parse(xmlToJson);
        for(var i=0; i<xmlToJson.response.body.items.item.length; i++){

             if(xmlToJson.response.body.items.item[i].fcstDate._text.toString()==todayDt){
                 if(xmlToJson.response.body.items.item[i].category._text.toString()=="TMP"){
                     if(xmlToJson.response.body.items.item[i].fcstTime._text.toString()=="1200"){
                         data=xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                     }
                 }
             };
        }
        res.send(data);
    }
}