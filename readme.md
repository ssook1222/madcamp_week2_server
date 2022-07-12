# 🧙🏻‍♀️ 마법옷장
당신을 위한 **마법옷장**,    
더 이상 오늘 날씨에 어떤 옷을 입을지 고민하지 마세요!   

**마법옷장**은 날씨에 따라 당신에게 어울리는 옷을 추천해드리는 어플리케이션입니다.

본 readme는 `서버` repository의 `readme`입니다.     
**어플리케이션 기능 및 전체적인 UI는 프론트엔드 repository**에 있으니,     
이 곳의 readme를 보고 싶으신 분께서는 **아래 링크로 이동**해주세요!

[프론트엔드 리드미로 이동 🚶🏻‍♂️](https://github.com/mscj1004/madcamp_week2)

[어플리케이션 프로토타입 다운 받으러 가기🚶🏻‍♀️](https://drive.google.com/file/d/1aBmzPkRekIs_3M5biMXd-knHz4tfLSt7/view?usp=sharing)

---

![thumbnail](https://user-images.githubusercontent.com/60427387/178412572-217cf3c2-c2f1-4945-b314-6c6a498654f2.png)

---

### 📍 백엔드 API 개요

|백엔드 API 명|설명|
|---|---|
|user|회원가입, 로그인, 아이디 중복 등을 처리해 줍니다.|
|weather|공공데이터 API에서 오늘의 날씨를 가져와서 안드로이드 앱으로 보내줍니다.|
|shopping|필요한 패션 아이템에 대해서 아이템 정보와 쇼핑 url을 찾줍니다.|
|recommend|오늘의 날씨에 따른 패션 스타일을 추천해줍니다. 본인의 새로운 패션 스타일 추가가 가능합니다.|
|public|공유 가능으로 설정된 다른 사람들의 패션 스타일들을 저장해 줍니다.|


---

### 📍 ERD
<p align = "center" style = "color:gray">
<img src = "https://user-images.githubusercontent.com/102964058/178426293-4295bae8-81fe-4c14-bfa2-3dec6b19bb04.png" width = "250" height = "400" />
</p>


---






### 📍 백엔드 API 설명


#### 👤 user

> **기능** 

---

```typescript
static addUser = async(req, res)=>{
...
const result = await getConnection().getRepository(UserList).save(userlist);
}
```

addUser 함수는 새로운 유저를 회원가입 해주는 함수입니다. 
안드로이드 앱에게 request로 회원정보를 받아오게 됩니다.
회원정보들을 DataBase 안의 UserList 안에 저장합니다.
result로 저장한 회원정보들을 안드로이드 앱으로 다시 전송합니다.

```typescript
static findUser = async (req, res) => {
...
const result = await getConnection().getRepository(UserList).findOne({where:{id, password}});
if(result != null){
            return res.status(200).send({ loginSuccess: true, message: result, nickname:result.nickname, gender:result.gender, id:result.id});
}
```

findUser 함수는 로그인을 도와주는 함수입니다.
안드로이드 앱에서 보내준 로그인 정보인 아이디와 패스워드로 UserList를 확인합니다.
UserList 안에 해당 정보가 있을 경우 loginsuccess = true 와 회원정보를 안드로이드 앱으로 보내줍니다. 
해당 정보가 없을 경우 loginsuccess = false 와 로그인에 실패했다는 메시지를 보내줍니다.

그 밖에 회원가입 시 아이디 중복을 확인해주는 matchId 함수가 있습니다.

#### ☂️ weather

> **기능** 

---
```typescript
static weatherLookRequest = async (req,res)=>{
...
var url = ... 
const axios = require('axios');
        const get_test = await axios.get(url);
        var xmlToJson=convert.xml2json(get_test.data,{compact: true, spaces: 4})
        xmlToJson=JSON.parse(xmlToJson);
        ...
        res.send({"tmp":tmp, "snow":snow, "rain":rain});
        }
        
```

weatherLookRequest 함수는 request를 받으면 오늘의 날씨를 알려주는 함수입니다.
request를 받을경우 공공데이터 API에서 오늘의 날씨 정보를 xml 형식으로 받아옵니다.
이 xml형식의 날씨 정보를 JSON으로 파싱하고, 온도, 적설량, 강수량을 가져옵니다.
result에 해당 JSON을 포함시켜 안드로이드 앱으로 보내줍니다.


#### 🛒 shopping

> **기능** 

---
```typescript
static test = async(req, res)=> {
var url ="https://openapi.naver.com/v1/search/shop?query="+encodeURI(item);
...
const shopping = await axios.get(url,{
            headers:{
                ...
            }
        });
...
data_array.push({"title":title,"url":url,"price":price});
        }
        res.send({"data":data_array});
    }
```

필요한 옷과 그 색깔에 따라 네이버 쇼핑에서 해당하는 옷을 찾아주는 함수입니다
안드로이드 앱에서 옷과 색깔 정보를 request로 보내줍니다.
이를 네이버 쇼핑 url에 적용시켜서 바로 이동할 수 있는 url을 만들어 줍니다.
옷 종류와 가격도 해당 url에서 받아와서 JSON에 넣어줍니다.
해당 JSON들을 array 안에 넣어서 result를 통해 안드로이드 앱에 보내줍니다.


#### 🌟 recommend

> **기능** 

---

```typescript
static recFashion = async (req, res)=>{
const result1 = await getConnection().getRepository(FashionList_recommend).find({

            where:{
                min_temp : LessThanOrEqual(temp),
                max_temp : MoreThanOrEqual(temp),
                gender : Equal(gender)
            }

        })
        ...
        const ans_list = new Array<FashionList_recommend>;
        for(let i = 0; i<id_list.length; i++){
            let j = id_list[i];
            const r = await getConnection().getRepository(FashionList_recommend).findOne({
              where:{
                  id: Equal(j)
              }
            })
            ans_list.push(r);
        }
        res.send(ans_list);
    }

```
날씨, 온도에 따라 데이터베이스에 기록된 옷 List들을 추천해주는 함수입니다.
안드로이드 앱에서 request로 gender, temperature, snow, rain을 받아옵니다.
database에서 저장된 FashionList_recommend의 tuple 중 받은 temperature이 min_temp와 max_temp 사이에 있는 tuple들의 id를 가져옵니다.
snow, rain을 통해 오늘의 날씨를 지정합니다.
database의 weather_recommend tuple 중 오늘의 날씨와 FashionList_recommed에서 가져온 id가 모두 만족하는 tuple 들을 가져와서 Array에 넣습니다.
result로 해당 Array를 전송합니다.

```typescript
static addFashion = async (req, res)=>{
...
const result = await getConnection().getRepository(FashionList).save(fashionlist);
if(result!=null){
            return res.status(200).send({addSuccess: true, message: "추가하였습니다."});
        }
```
자신만의 코디를 추가해주는 함수입니다.
request로 database 안의 FashionList 안에 추가할 옷들과 public 여부를 보내줍니다.
이 정보들을 database 안에 저장하고 성공 시 addSuccess = true와 "추가하였습니다" message를 보내줍니다.

#### 🌱 public

> **기능** 

---
```typescript
static loadFashion = async (req, res)=>{
const raw_result = await getConnection().getRepository(FashionList).find({
            where:{
                public : true
            }, relations:{userlist: true}});
            
...
data_array.push(...)
res.send({"data":data_array});
    }
```
public 을 설정해놓은 다른사람들의 코디를 가져와주는 함수입니다.
함수를 실행요청하는 request를 받으면 database의 FashionList에서 public이 설정되어있는 tuple들을 가져오게 됩니다.
이 tuple들의 정보를 Array에 넣습니다.
이 Array를 result로 안드로이드 앱에 전송하게 됩니다.



