## Github 기초 (1강)
### Github 소개
Git + hub: 파일의 변천사(Git)가 모여있는 곳(Hub)
1. Git은 코드의 변화를 기록한다
2. Github는 git과 코드를 저장하고 관리하는 서비스
  * 파일을 누가 언제 어디를 수정했는지 기록되어서 누가 한 부분에서 에러가 났는지 알 수 있음
  * 개발자의 포트폴리오 역할로도 쓰인다
### Github 환경설정
1. [Git 다운로드](https://git-scm.com/downloads): 다 확인 누르고 마지막에 Launch Git Bash 체크!
    * Git Bash도 같이 다운로드 됨
2. Git Bash: 맥, 윈도우 모두 같은 환경에서 개발을 하기 위해 설치한다
3. [GitHub](https://github.com/) 계정생성

### 레포지토리 생성 후 푸시
__Repository 만드는 방법__
1. Repository New
2. Repository 이름 정하기
3. Repository 설명 적기(선택사항)
4. Public/Private: 공개 비공개 설정
5. Create Repository
6. URL 복사하기

__TERMINAL 명령어__
1. __$ git init__: Git을 시작하겠다
2. __$ git remote add origin "Repository URL"__: 해당 Repository와 연결
3. __$ git add__: git 파일에 Repository 모든 내용을 추가(Local 컴퓨터에)
4. __$ git commit-m "(원하는 내용)"__: commit에 대한 설명 기재
5. __$ git push origin master__: 준비한 파일들을 Repository로 전송
6. __코드를 수정했을 땐 3, 4, 5번 반복__
