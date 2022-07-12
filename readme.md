# 🧙🏻‍♀️ 마법옷장
당신을 위한 **마법옷장**,    
더 이상 오늘 날씨에 어떤 옷을 입을지 고민하지 마세요!   

**마법옷장**은 날씨에 따라 당신에게 어울리는 옷을 추천해드리는 어플리케이션입니다.

본 readme는 `서버` repository의 `readme`입니다.     
**어플리케이션 기능 및 전체적인 UI는 프론트엔드 repository**에 있으니,     
이 곳의 readme를 보고 싶으신 분께서는 **아래 링크로 이동**해주세요!

[프론트엔드 리드미로 이동 🚶🏻‍♂️]()

[어플리케이션 프로토타입 다운 받으러 가기🚶🏻‍♀️](https://drive.google.com/file/d/1aBmzPkRekIs_3M5biMXd-knHz4tfLSt7/view?usp=sharing)

---

![thumbnail](https://user-images.githubusercontent.com/60427387/178412572-217cf3c2-c2f1-4945-b314-6c6a498654f2.png)

---

### 📍 백엔드 API 개요

|백엔드 API 명|설명|
|---|---|
|user||
|weather||



---

### 📍 ERD



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
console.log("주요 코드를 여기다 써 줘, 성준아!!!")
```

밑에다가는 코드 설명을 써주면 돼!!      




#### 🛒 shopping

> **기능** 

---
```typescript
console.log("주요 코드를 여기다 써 줘, 성준아!!!")
```

밑에다가는 코드 설명을 써주면 돼!!     



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



