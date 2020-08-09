## :book: Django가 관리하는 법 :book:

###  :fire: ​Bootstrap 적용

**Bootstrap이란?** Front-End 개발을 빠르고 쉽게 할 수 있는 오픈 소스 Framework

* 누구나 쉬운 사용 가능

* 반응형 CSS 제공

* 모든 최신 브라우저와 호환

* PC & 모바일 디자인 제공

  

**실습**

1. **홈페이지 SAMPLE 적용**
   1.  [Bootstrap](getbootstrap.com) 접속하기
   2. Example → Album → 오른쪽 마우스 → 페이지 소스 보기 → 복사 → Home.html에 붙여넣기
   3. Bootstrap Home → BootstrapCDN 코드 복사 → Home.html 27행에 붙여넣기 → **홈페이지 SAMPLE 적용 완료!**
2. **필요한 부분만 남기기**
   1. 120~242행 삭제하기(필요없음) → Crtl + Shift + P → Beautify file을 통해 파일 이쁘게 정렬
   2. 필요없는 내용 모두 삭제하고 넣고싶은(필요한) 문구 넣기

### :bell: URL / Template 언어 이해 & 구현

**URL 관리는 어떻게?** Django의 URL 관리는 urls.py의 urlpatterns에서 담당

* **Path의 구조**: path('URL', views 내부의 함수, name="url의 이름"),
  * **'URL'**: 페이지 주소 (ex. introduce/, new/)
  
  * **함수**: url이 불렸을 때 실행할 함수 (ex. views.home)
  
  * **name**: 해당 path를 대표하는 이름 (ex. name = "home")
  
    

**실습 - Introduce page 만들기**

1. URL 연결하기

   * urls.py 9행에 introduce url 연결

   ``````python
   path('introduce/', views.introduce, name = 'introduce');
   ``````

2. introduce page 만들기

   * page → templates → introduce.html 파일 생성 → home bootstrap 복붙하기
   * views.py에 introduce 실행 함수 입력

   ``````python
   def introduce(request):
       return render(request, 'introduce.html')
   ``````

   * introduce.html 내용 수정하기 (home.html과 구분하기 위해)





**Template 언어란?** Python 변수 & 문법을 HTML에서 쓸 수 있도록 Django에서 제공하는 언어

* **{{}}** : 템플릿 변수 (명사)
* **{%%}** : 템플릿 태그 (동사)



**실습**

1. home.html에 introduce.html 연결하기

   ``````python
   <a href="introduce.html" class="btn btn-outline-danger">삐나가 만든 드리머리 알아보기</a>
   ``````

   * 이 상태로 runserver를 하면 오류남

   ``````python
   <a href="{% url 'introduce' %}" class="btn btn-outline-danger">삐나가 만든 드리머리 알아보기</a>
   ``````

   * 이제 오류 안남!
   * 템플릿 변수는 장고에서 html과 서로 쓸 수 있도록 연동해주는 언어
     - 명사취급: 결과값을 보여주는 명사
   * 템플릿 태그는 반복문과 조건문을 html에서도 사용할 수  있게 해주는 언어
     * 동사취급: 무언가 행위를 실행하는 동사



### :star: ​Static 파일 (Image, CSS) 이해

**Static File이란?** 이미지나 CSS, JS 파일처럼 내용이 고정되어 있어, 응답을 할 때 파일 그대로를 보내주면 되는 파일

* **Static**: 웹 서비스를 위해, 개발자가 준비해두는 파일
* **Media**: 웹 서비스 이용자들이 업로드하는 파일



**Static File 처리하기**

1. **Static 폴더 생성**: App 폴더 내에 Static 폴더 만드리 & 파일 생성

2. **Settings.py(Static 설정)**

   ``````python
   STATICFILES_DIRS = [
       os.path.join(BASE_DIR, 'App 이름', 'static')
   ]#Static File들이 들어있는 경로
   
   STATIC_ROOT = os.path.join(BASE_DIR, 'static')
   #Static File을 모을 디렉토리
   ``````

3. **Static 파일 모으기**

   ``````bash
   python manage.py collectstatic
   ``````

4. **Settings.py(Media 설정)**

   ``````python
   MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
   MEDIA_URL = '/media/'
   ``````

   

5. **urls.py**

   ``````python
   from django.conf import settings
   from django.conf.urls.static import static
   
   urlpatterns = [
       …
   ] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
   ``````

   

6. **HTML에서 사용**

   ``````html
   {% load static %}
   ``````

   

   

**Static 실습**

1. **Static 설정하기**

   * Settings.py 123행에 Static 설정

   ``````python
   STATICFILES_DIRS = [
       os.path.join(BASE_DIR, 'page', 'static')
   ]
   
   STATIC_ROOT = os.path.join(BASE_DIR, 'static')
   ``````

   * page 폴더 안에 static 폴더 추가
   * static 폴더 안에 css 폴더, images 폴더 추가
   * 터미널 명령어 입력

   ``````bash
   python manage.py collectstatic
   ``````

   * Dreamary 폴더 안에 static 폴더가 생성된 걸 확인 가능
   * home.html에 static을 불러오는 템플릿 태그 삽입(introduce.html에도)

   ``````html
   {% load static %}
   ``````

   

2. **로고 변경하기**

   * 구글에 드리머리 로고 검색 후 (앞서 만든) images 폴더에 저장
     * 이름: Dreamary_Logo

   * 70행부터 쓸모없는 부분(기존 로고의 자리) 삭제
   * 로고 삽입하기

   ``````html
   <div id="navbar" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
   	<a id="logo" herf="{% url 'home' %}" class="navbar-brand align-self-center">
   		<img src="{% static 'images/Dreamary_Logo.png' %}" width="35" height="35" alt="Dreamary_Logo.png">
       	<labal class="navbar-brand align-self-center">Dreamary</labal>
   	</a>  
   </div>
   ``````

   * 일반적으로 그림을 부르면 장고가 인식하지 못함. 따라서 템플릿 언어를 사용하여 불러올 것!

3. **css를 통해 하는 법**

   * static → css 폴더 안에 'home.css', 'introduce.css' 파일 만들기
   * 필요한 css 내용 입력하기
   * home.html와 introduce.html에 css 연결하기

   ``````html
   <link rel "stylesheet" href="{% static 'css/home.CSS'%}"
   ``````

   ``````html
   <link rel "stylesheet" href="{% static 'css/introduce.CSS'%}"
   ``````

   

**Media 실습**

1. settings.py 129행에 코드 추가

   ``````python
   MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
   
   MEDIA_URL = '/media/'
   ``````

2. urls.py에 5행에 코드 추가

   ``````python
   from django.conf import settings
   from django.conf.urls.static import static
   ``````

   * 이어서 12행에 코드 추가

   ``````python
   + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
   ``````

   

