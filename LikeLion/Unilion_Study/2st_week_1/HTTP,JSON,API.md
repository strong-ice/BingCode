## HTTP, JSON, API
### HTTP
**H**yper
**T**ext
**T**ransfer
**P**rotocol
* __Hyper Text__: 참조를 통해 한 문서에서 관련된 다른 문서들로 넘나들며 원하는 정보를 얻을 수 있게 해주는 텍스트
  * ex) 유튜브 - 추천 동영상
* __Trasfer Protocol__: 인터넷을 통해서 정보(ex. Hyper Text)를 주고받을 때 지켜야하는 규칙
* __HTTP의 구성__: Request와 Response로 구성

__HTTP의 요청 메소드__
* __GET__: URL에 표시된 리소스를 가져오기
* __POST__: body에 정보를 담아 서버에 입력
* __PUT__: URL에 표시된 리소스와 바꿔 치기
* __PATCH__: PUT과 다르게 일부만 수정
* __DELETE__: URL에 표시된 특정 리소스를 삭제
### JSON
**J**ava
**S**cript
**O**bject
**N**otation
* Key : Value 형식
  * 파이썬 딕셔너리와 비슷한 개념
* 데이터 교환
  * 정보를 표현하기 위한 형식으로 JSON을 보편적으로 사용
  * 옛날엔 XML라는 형식도 사용함
* JSON의 특징
  * 기존 XML보다 가볍다 (더 경쟁력 있고 보편적으로 사용 가능하다)
  * 많은 프로그래밍 언어가 지원한다 (ex. 한국어는 만국공통의 언어다)
  * 전송 시: 직렬화 과정을 거친다
  * 수신 시: 역직렬화 과정을 거친다
 
__실습__
1. Chrome 접속 → F12 → Console 띄우기
2. mdn json 검색 → [Working  with JSON(JSON으로 작업하기)](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON) 접속 → [JSON 텍스트 형식](https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json) 복사
```JSON
let super_hero = {
  "squadName" : "Super Hero Squad",
  "homeTown" : "Metro City",
  "formed" : 2016,
  "secretBase" : "Super tower",
  "active" : true,
  "members" : [
    {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes",
      "powers" : [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name" : "Madame Uppercut",
      "age" : 39,
      "secretIdentity" : "Jane Wilson",
      "powers" : [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name" : "Eternal Flame",
      "age" : 1000000,
      "secretIdentity" : "Unknown",
      "powers" : [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```
```JSON
super_hero
```
```JSON
super_hero.members
```
```JSON
super_hero["members"]
```
첫 번째 멤버의 이름을 가져오기
```JSON
super_hero.members[0].name
```
직렬화하기
```JSON
JSON.stringify(super_hero);
```

### API
### REST API
