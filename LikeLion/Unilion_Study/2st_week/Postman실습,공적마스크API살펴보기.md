## REST API 실습, Open API
### [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
* Fake online REST API
* REST API를 테스트, 프로토타이핑 가능
* 실습할 내용: GET, POST, PUT, PATCH, DELETE
* 사이트 메인 Resources 참고
* Routes

**URL의 구성**
1. 프로토콜: http, https, file 등
2. 호스트주소: www.naver.com, www.google.com
3. 파일경로(리소스 경로): /home, /index.html
4. Query parameter: ?id=1&postld=1 (검색, 필터링, 데이터 교환 시 사용)

### Postman 실습
[Postman 다운로드](https://www.postman.com/downloads/)
1. 상단의 '+' 버튼 클릭 → Untitled Request
2. Get 매소드로 요청 (https://jsonplaceholder.typicode.com/posts)
3. Send 버튼 누르기
4. 새로 만들어서 Post 매소드로 요청
5. Get 매소드 8번 글 복사 → POST Body에 JSON으로 붙여넣기 → Send
```JSON
 {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  }
```

6. 출력결과
```JSON
{
  "userId": 1,
  "id": 101,
  "comments": [],
  "title": "dolorem dolore est ipsam",
  "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
}
```

7. "comments" 추가해보기
```JSON
 {
    "userId": 1,
    "id": 8,
    "comments": [],
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  }
```
8. 출력결과
```JSON
{
  "userId": 1,
  "id": 101,
  "comments": [],
  "title": "dolorem dolore est ipsam",
  "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
}
```
  * 이런 추가는 여기서는 지원을 해주지만 다른 서비스에선 오류가 날 수 있다.
  *GET URL에 '/1'을 붙여주면 1번 글만, '/n'은 n번 글만 출력해준다.
9. POST 매소드를 PUT 매소드로 변경
10. User ID 변경 가능
> 오류 나요ㅜ
> 멀라멀라 나중에 정리할래~~~

### Open API
### 공적마스크 API 살펴보기
