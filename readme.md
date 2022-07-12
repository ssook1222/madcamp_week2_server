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
console.log("주요 코드를 여기다 써 줘, 성준아!!!")
```

밑에다가는 코드 설명을 써주면 돼!!

#### 🌱 public

> **기능** 

---
```typescript
console.log("주요 코드를 여기다 써 줘, 성준아!!!")
```

밑에다가는 코드 설명을 써주면 돼!!





