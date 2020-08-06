## Fetch API
### 비동기 처리
1. **비동기 처리**
* **들어온 요청들을 순차적으로 실행시킨다면?**
  * 앞에 들어온 작업이 시간이 오래 걸리는 작업일 시 뒤에 있는 작업들이 밀리게 됨
* **이런 작업들을 그대로 실행시키면서 뒤에 있는 모드들을 실행시키는 것이 바로 비동기 처리이다!**
* Promise 객체를 사용 - 아래의 세 가지 상태를 가짐
  * 대기
  * 이행
  * 거부
2. **비동기 호출 - keyword**
* 두 가지 패턴이 존재 
* async, await 키워드를 활용한
  * `async function astncFunnction(){
            await [promise객체]
  }`
* [Promise객체]
  * .then(콜백함수)
  * .catch(콜백함수)

### fetch API
* 네트워크 통신을 위해서 제공되는 API
* Promise 객체를 반환
* Request, Response라는 두 개의 객체 사용

### 실습
1. 비동기 처리
```javascript
// Promise의 세 가지 상태
// 1. Pending (대기): 초기 상태
// 2. Resolved (이행): 성공
// 3. Rejected (거부): 실패

function promiseTest1(timer) {
    // Promise 객체를 new 키워드를 통해 만들어줍니다.
    let promiseObj = new Promise((resolve, reject) => {
        setTimeout() => {
            // resolve 함수를 통해 메시지를 반환해줍니다.
            resolve(`Timer : ${timer}`)
        }, tumer);
    });

    // 반환된 메시지는 then 함수를 통해 익명함수의 매개변수
    // 여기서는 value로 들어가게 되고,
    // console.log(value)로 출력됩니다.
    promiseObj.then((value) => console.log(value));

}

funtion promiseTest2(timer) {
    // status를 랜덤으로 만듭니다.
    // Math.floor() : 바닥함수 -> 소수점이하를 버립니다.
    // Math.random() : 0~1 사이의 랜덤한 숫자를 반환합니다.
    const status = Math.floor(Math.random() * 10) % 2;
    let promiseObj = new Promise((resolve, reject) => {
        // 랜덤으로 뽑은 status가 1이면 resolve
        // status가 0이면 reject로 메시지를 반환합니다.
        setTimeout(() => {
            if (status === 1) resolve('성공!');
            else reject('실패!');
        }, timer)
    })

    promiseObj
        .then((value) => console.log(value))    // 성공
        .catch((error) => console.log(error));  // 실패
}
```
