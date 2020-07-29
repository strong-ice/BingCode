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
 * 사용법 1: HTML 내부에서 <script> 태그내에 사용
 * 사용법 2: .js 파일로 만들고, <script src="파일경로">를 사용해서 불러오기
 
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
```js
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

### 반복문
### 조건문
### DOM 다루기
### 함수
