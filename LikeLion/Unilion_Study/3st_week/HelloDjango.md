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

### Local Server에서 페이지 출력