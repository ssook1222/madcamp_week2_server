# π§π»ββοΈ λ§λ²μ·μ₯
λΉμ μ μν **λ§λ²μ·μ₯**,    
λ μ΄μ μ€λ λ μ¨μ μ΄λ€ μ·μ μμμ§ κ³ λ―Όνμ§ λ§μΈμ!   

**λ§λ²μ·μ₯**μ λ μ¨μ λ°λΌ λΉμ μκ² μ΄μΈλ¦¬λ μ·μ μΆμ²ν΄λλ¦¬λ μ΄νλ¦¬μΌμ΄μμλλ€.

λ³Έ readmeλ `μλ²` repositoryμ `readme`μλλ€.     
**μ΄νλ¦¬μΌμ΄μ κΈ°λ₯ λ° μ μ²΄μ μΈ UIλ νλ‘ νΈμλ repository**μ μμΌλ,     
μ΄ κ³³μ readmeλ₯Ό λ³΄κ³  μΆμΌμ  λΆκ»μλ **μλ λ§ν¬λ‘ μ΄λ**ν΄μ£ΌμΈμ!

[νλ‘ νΈμλ λ¦¬λλ―Έλ‘ μ΄λ πΆπ»ββοΈ](https://github.com/mscj1004/madcamp_week2)

[μ΄νλ¦¬μΌμ΄μ νλ‘ν νμ λ€μ΄ λ°μΌλ¬ κ°κΈ°πΆπ»ββοΈ](https://drive.google.com/file/d/1aBmzPkRekIs_3M5biMXd-knHz4tfLSt7/view?usp=sharing)

---

![thumbnail](https://user-images.githubusercontent.com/60427387/178412572-217cf3c2-c2f1-4945-b314-6c6a498654f2.png)

---

### π λ°±μλ API κ°μ

|λ°±μλ API λͺ|μ€λͺ|
|---|---|
|user|νμκ°μ, λ‘κ·ΈμΈ, μμ΄λ μ€λ³΅ λ±μ μ²λ¦¬ν΄ μ€λλ€.|
|weather|κ³΅κ³΅λ°μ΄ν° APIμμ μ€λμ λ μ¨λ₯Ό κ°μ Έμμ μλλ‘μ΄λ μ±μΌλ‘ λ³΄λ΄μ€λλ€.|
|shopping|νμν ν¨μ μμ΄νμ λν΄μ μμ΄ν μ λ³΄μ μΌν urlμ μ°Ύμ€λλ€.|
|recommend|μ€λμ λ μ¨μ λ°λ₯Έ ν¨μ μ€νμΌμ μΆμ²ν΄μ€λλ€. λ³ΈμΈμ μλ‘μ΄ ν¨μ μ€νμΌ μΆκ°κ° κ°λ₯ν©λλ€.|
|public|κ³΅μ  κ°λ₯μΌλ‘ μ€μ λ λ€λ₯Έ μ¬λλ€μ ν¨μ μ€νμΌλ€μ λΆλ¬μ μ€λλ€.|


---

### π ERD
<p align = "center" style = "color:gray">
<img src = "https://user-images.githubusercontent.com/102964058/178426293-4295bae8-81fe-4c14-bfa2-3dec6b19bb04.png" width = "250" height = "400" />
</p>


---






### π λ°±μλ API μ€λͺ


#### π€ user

> **κΈ°λ₯** 

---

```typescript
static addUser = async(req, res)=>{
...
const result = await getConnection().getRepository(UserList).save(userlist);
}
```

addUser ν¨μλ μλ‘μ΄ μ μ λ₯Ό νμκ°μ ν΄μ£Όλ ν¨μμλλ€. 
μλλ‘μ΄λ μ±μκ² requestλ‘ νμμ λ³΄λ₯Ό λ°μμ€κ² λ©λλ€.
νμμ λ³΄λ€μ DataBase μμ UserList μμ μ μ₯ν©λλ€.
resultλ‘ μ μ₯ν νμμ λ³΄λ€μ μλλ‘μ΄λ μ±μΌλ‘ λ€μ μ μ‘ν©λλ€.

```typescript
static findUser = async (req, res) => {
...
const result = await getConnection().getRepository(UserList).findOne({where:{id, password}});
if(result != null){
            return res.status(200).send({ loginSuccess: true, message: result, nickname:result.nickname, gender:result.gender, id:result.id});
}
```

findUser ν¨μλ λ‘κ·ΈμΈμ λμμ£Όλ ν¨μμλλ€.
μλλ‘μ΄λ μ±μμ λ³΄λ΄μ€ λ‘κ·ΈμΈ μ λ³΄μΈ μμ΄λμ ν¨μ€μλλ‘ UserListλ₯Ό νμΈν©λλ€.
UserList μμ ν΄λΉ μ λ³΄κ° μμ κ²½μ° loginsuccess = true μ νμμ λ³΄λ₯Ό μλλ‘μ΄λ μ±μΌλ‘ λ³΄λ΄μ€λλ€. 
ν΄λΉ μ λ³΄κ° μμ κ²½μ° loginsuccess = false μ λ‘κ·ΈμΈμ μ€ν¨νλ€λ λ©μμ§λ₯Ό λ³΄λ΄μ€λλ€.

κ·Έ λ°μ νμκ°μ μ μμ΄λ μ€λ³΅μ νμΈν΄μ£Όλ matchId ν¨μκ° μμ΅λλ€.

#### βοΈ weather

> **κΈ°λ₯** 

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

weatherLookRequest ν¨μλ requestλ₯Ό λ°μΌλ©΄ μ€λμ λ μ¨λ₯Ό μλ €μ£Όλ ν¨μμλλ€.
requestλ₯Ό λ°μκ²½μ° κ³΅κ³΅λ°μ΄ν° APIμμ μ€λμ λ μ¨ μ λ³΄λ₯Ό xml νμμΌλ‘ λ°μμ΅λλ€.
μ΄ xmlνμμ λ μ¨ μ λ³΄λ₯Ό JSONμΌλ‘ νμ±νκ³ , μ¨λ, μ μ€λ, κ°μλμ κ°μ Έμ΅λλ€.
resultμ ν΄λΉ JSONμ ν¬ν¨μμΌ μλλ‘μ΄λ μ±μΌλ‘ λ³΄λ΄μ€λλ€.


#### π shopping

> **κΈ°λ₯** 

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

νμν μ·κ³Ό κ·Έ μκΉμ λ°λΌ λ€μ΄λ² μΌνμμ ν΄λΉνλ μ·μ μ°Ύμμ£Όλ ν¨μμλλ€
μλλ‘μ΄λ μ±μμ μ·κ³Ό μκΉ μ λ³΄λ₯Ό requestλ‘ λ³΄λ΄μ€λλ€.
μ΄λ₯Ό λ€μ΄λ² μΌν urlμ μ μ©μμΌμ λ°λ‘ μ΄λν  μ μλ urlμ λ§λ€μ΄ μ€λλ€.
μ· μ’λ₯μ κ°κ²©λ ν΄λΉ urlμμ λ°μμμ JSONμ λ£μ΄μ€λλ€.
ν΄λΉ JSONλ€μ array μμ λ£μ΄μ resultλ₯Ό ν΅ν΄ μλλ‘μ΄λ μ±μ λ³΄λ΄μ€λλ€.


#### π recommend

> **κΈ°λ₯** 

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
λ μ¨, μ¨λμ λ°λΌ λ°μ΄ν°λ² μ΄μ€μ κΈ°λ‘λ μ· Listλ€μ μΆμ²ν΄μ£Όλ ν¨μμλλ€.
μλλ‘μ΄λ μ±μμ requestλ‘ gender, temperature, snow, rainμ λ°μμ΅λλ€.
databaseμμ μ μ₯λ FashionList_recommendμ tuple μ€ λ°μ temperatureμ΄ min_tempμ max_temp μ¬μ΄μ μλ tupleλ€μ idλ₯Ό κ°μ Έμ΅λλ€.
snow, rainμ ν΅ν΄ μ€λμ λ μ¨λ₯Ό μ§μ ν©λλ€.
databaseμ weather_recommend tuple μ€ μ€λμ λ μ¨μ FashionList_recommedμμ κ°μ Έμ¨ idκ° λͺ¨λ λ§μ‘±νλ tuple λ€μ κ°μ Έμμ Arrayμ λ£μ΅λλ€.
resultλ‘ ν΄λΉ Arrayλ₯Ό μ μ‘ν©λλ€.

```typescript
static addFashion = async (req, res)=>{
...
const result = await getConnection().getRepository(FashionList).save(fashionlist);
if(result!=null){
            return res.status(200).send({addSuccess: true, message: "μΆκ°νμμ΅λλ€."});
        }
```
μμ λ§μ μ½λλ₯Ό μΆκ°ν΄μ£Όλ ν¨μμλλ€.
requestλ‘ database μμ FashionList μμ μΆκ°ν  μ·λ€κ³Ό public μ¬λΆλ₯Ό λ³΄λ΄μ€λλ€.
μ΄ μ λ³΄λ€μ database μμ μ μ₯νκ³  μ±κ³΅ μ addSuccess = trueμ "μΆκ°νμμ΅λλ€" messageλ₯Ό λ³΄λ΄μ€λλ€.

#### π± public

> **κΈ°λ₯** 

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
public μ μ€μ ν΄λμ λ€λ₯Έμ¬λλ€μ μ½λλ₯Ό κ°μ Έμμ£Όλ ν¨μμλλ€.
ν¨μλ₯Ό μ€νμμ²­νλ requestλ₯Ό λ°μΌλ©΄ databaseμ FashionListμμ publicμ΄ μ€μ λμ΄μλ tupleλ€μ κ°μ Έμ€κ² λ©λλ€.
μ΄ tupleλ€μ μ λ³΄λ₯Ό Arrayμ λ£μ΅λλ€.
μ΄ Arrayλ₯Ό resultλ‘ μλλ‘μ΄λ μ±μ μ μ‘νκ² λ©λλ€.



