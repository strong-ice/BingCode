## JavaScript 기초문법
### 주의사항 및 자습 안내
속도가 빠르고 구체적인 개념을 알려주지 않기 때문에 추가적인 학습이 필요하다!!

**학습을 도와주는 참고사이트**
* [W3C School](https://www.w3schools.com): 한글화 지원
* [MDN Document](https://developer.mozilla.org/ko/docs/Web/JavaScript): 한글화 지원
* [생활코딩 WEB2 - Javascript](http://opentutorials.org/course/3085): 문서화
* [ofcourse](https://ofcourse.kr/): 문서화

### JavaScript
* 웹페이지를 **동적으로** 만들 때 사용하는 언어
* **객체 기반**의 스크립트 언어
* 할 수 있는 일이 굉장히 많다.
  * **Browser API** - DOM, 위치정보, audio, 화면공유 등 Browser 에서 제공하는 API들
  * **2D, 3D 그래픽 작업** (ex. NullSchool: 3D 지구본 - 오로지 JavaScript로 만들어짐)
  * 클라이언트 뿐만 아니라 **서버**도 자바스크립트로 가능 - Node.js
  
 * 스크립트 언어 + 인터프리터 방식 (파이썬과 동일)
  * 입력 후 바로 결과 확인이 가능
  * 브라우저에 내장된 엔진으로 즉시 해석된다.
 * 사용법 1: HTML 내부에서 `<script>` 태그내에 사용
 * 사용법 2: .js 파일로 만들고, `<script src="파일경로">`를 사용해서 불러오기
 
 #### JavaScript 사용법
1. html:5를 통해 생성한 HTML 문서 불러오기
 ```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
 ```
2. 간단한 Script 문서안 삽입
 ```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- 1. Script 태그 안에 작성하기 -->
  <script>
    console.log("Hello world");
    alert("Hello world\nScript 태그 안에 작성됐습니다!");
  </script>
  
  
  <!-- 2. JS 파일을 외부에서 불러오기 -->
  <script src="1-2 JS불러오기.js"></script>
</body>
</html>
 ```
3. 외부에서 불러올 JavaScript 파일
```js
setTimeout(function(){
  alret("2초 뒤에 실행됩니다. \n외부에 쓰여진 JS파일에서 호출됐습니다.")
}, 2000);
```

### 변수
* 사용가능한 데이터 타입: Boolean, Null, Undefined, Number, String, Symbol, Object
* var: 권장하지 않는 변수 선언 방식
 * Hosting
 * Function scope 변수 (타 언어와 다른 점)
 * 중복 선언 가능
 * 예측하기 어려운 코드를 만들 수 있다
* let: block scope 변수 (타 언어와 비슷하게 동작)
* const: 변하지 않는 데이터를 저장 (ex. 파이, 객체)

**변수를 이용한 실습**
1. Chrome → F12 → Console
2. 여러 타입의 변수 선언해보기
```javascript
let booleanVal = true
let numberVal = 0
let nullVal = null
let undefinedVal = undefined
let stringVal = ''
let person = {
  name : "빙빙이",
  phoneNumber : "010-0000-0000",
  email : "bing@bing.com"
  }
```
3. 선언 결과 살펴보기
```javascript
booleanVal
// true
typeof(booleanVal)
// "boolean"
typeod(numberVal)
// "number"
typeof(nullVal)
// "object"
typeof(undefined)
// "undefined"
null * 2
// 0
undefined * 2
// NaN(Not a Number)
typeof(stringVal)
// "string"
typeof(person)
// "object"
```
> null과 undefiend 모두 '없음'을 뜻하지만 출력결과는 다르다

### 반복문
1. for 문
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// 0부터 9까지 세로로 출력
```
2. for of 문(iterale)
```javascript
const oddNums = [1, 3, 5, 7, 9, 11];
for(const i of oddNums){
  console.log(i);
}
// 리스트 값들을 순서대로 세로로 출력

```
3. while 문
```javascript
// i 값 선언
let i = 0;
while (i < 10> {
  console.log(i);
  i++;
  // 0부터 9까지 세로로 출력
})
```
### 조건문
1. promt를 사용한 Input
```javascript
let score = prompt("점수를 입력하세요. 1", 0);
if(score >= 90) {
    console.log("A+");
} else if (score >= 80){
    colsole.log("B+");
} else {
  console.log("C+");
}
// 중첩된 if문으로 해석
scoer = prompt("점수를 입력하세요. 2", 0);
if (score >= 90) {
    console.log("A+");
} else {
    // 아래와 같이 실행할 문장이 한 문장이라면
    // 중괄호를 생략해도 된다
    if (score >= 80)
      colsole.log("B+");
   else 
      console.log("C+");
}
// 점수에 따라 스코어 출력
```

### DOM 다루기
* **DOM**: **D**icument **O**bject **M**odel
* 웹페이지에 접근할 수 있게 해주는 일종의 인터페이스
* Javascript와는 별개
* **Javascript에 DOM을 조작할 수 있는 API가 존재**
1. Node 선택하기
```javascript
// ID로 DOM 객체 선택
let idObj = document.getElementById("name");
// Class로 DOM 객체 선택
let classIbj = document.getElementsByClassName("");
// CSS 선택자로 DOM 객체 선택
let selectorObj = document.querySelector("#main");
```
2. 속성 변경하기
```javascript
// 사용할 수 있는 속성들
// style, innerText, innerHtml
selectorObj.style = "color:yellow";
selectorObj.innerText = "헬로";
selectorObj.innerHTML = '<a href="https://www.naver.com>네이버로 가기</a>';
// a Tag의 herf 속성같은 각종 태그들의 속성들
aTag.href = "https://www.naver.com";
```
### 함수
1. 기본적인 형태
```javascript
// 새로운 노드를 추가해주는 함수
funtion ver1_appendNewNode(target, tag="p", text="기본값") {
  let newTag = document.createElement(tag);
  newTag.innerText = ext;

  target.appendChild(newTag);
}

appendNewNode(target);
appendNewNode(target, "a");
appendNewNode(target, "a", "A태그!");
```
2. 익명함수
```javascript
// 익명함수의 형태
let ver2_appendNewNode = function(target, tag="p", text="기본값") {
  let newTag = document.createElement(tag);
  newTag.innerText = text;

  target.appendChild(newTag);
}
```
3. 화살표함수
```javascript
let ver3_appendNewNode = (target, tag="p", text="기본값") => {
  let newTag = document.creteElement(tag);
  newTag.innerText = text;

  target.appendChild(newTag);
}
```