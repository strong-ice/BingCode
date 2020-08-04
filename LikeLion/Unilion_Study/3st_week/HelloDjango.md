## Hello, Django
### 가상환경 & PIP 이해
* **가상환경**: 자신이 원하는 Python 환경 구축을 위해 필요한 모듈만 담아놓는 바구니
* **PIP**: Python으로 작성된 패키지 소프트웨어를 관리하는 **패키지 관리 시스템**
* **VS Code 단축키 모음**
  * 터미널 생성: ctrl + shift + `
  * 이전 명령어 불러오기: 화살표 ↑
  * 현재 커서 위치의 코드 복사: Ctrl + D (여러 줄 가능)
  * 현재 커서 위치의 코드 이동: Alt + 화살표 ↑ ↓
* **가상환경 명령어 모음**
  * 가상환경 생성: python -m venv <가상환경 이름>
  * 가상환경 활성화
    * 윈도우 | source <가상환경 이름>/Scripts/activate
    * Linux, Mac | source <가상환경 이름>/bin/activate
  * 가상환경 끄기: deactivate
* **Django 명령어 모음**
  * 패키지 설치: pip install django
  * 프로젝트 생성: django-admin startproject<프로젝트 명> .
    * (마지막에 .(온점)을 붙이면 새로운 폴더 생성 x)
  * App 생성: python manage.py startapp <App 이름>
  * 로컬 서버 시작: Python manage.py runserver
### Django 프로젝트 생성 & 구조 파악
  * 이전에 했던 것들 복습
  * Django의 Project & App 개념
    * 하나의 Project == 하나의 Web Site
    * Project 안의 의미있는 기능들을 각각의 App으로 관리
  * **Project 파일명**
    * **setting.py: 전체 프로젝트를 관리하는 설정 파일**
    * **urls.py: 프로젝트의 URL 관리 파일**
    * wsgi.py & asgi.py: 프로젝트를 서비스하기 위한 파일
    * `__init__.py`: 해당 디렉토리가 Python Pakage의 일부임을 Python에게 알려주는 파일
  * **App 파일명**
    * **views.py: 웹 요청을 받고, 전달받은 데이터를 처리해서 가공하는 파일**
    * **models.py: Database와 관련된 다양한 역할 수행**
    * admin.py: 관리자 관련 파일
    * apps.py: Project에서 App의 존재를 알려줄 때 활용되는 파일
### Local Server에서 페이지 출력
  * 홈페이지 출력 순서
    * settings.py: Project에게 App의 존재 알리기
    * Templates: User에게 보여줄 HTML 파일 만들기
    * views.py: 요청이 들어오면 HTML 파일을 열어주는 함수 정의
    * urls.py: url 요청을 views와 연결하기