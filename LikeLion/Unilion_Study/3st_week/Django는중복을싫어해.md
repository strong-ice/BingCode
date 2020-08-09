# :rage:Django는 중복을 싫어해 :rage:

## :fire: URL Include 이해 & 구현

### :bell: URL Include

: App 별로 URL을 체계적으로 관리할 수 있도록 구조화 해준다

#### 코드

* **App**

  * App 폴더 내에 urls.py 생성 후,

    ```python
    from django.urls import path
    from .import views
    
    Urlpatterns = [
    	path()
        ]
    ```

* **Project/urls.py**

	``` python
	    from django.urls import path include
	
	    urlpatterns = [
	    path('url/', include('app이름.urls'))
	    ]
	```

​      

## :fire: Template 상속 구현

### :bell: 이론

* 모든 page에서 중복되는 코드를 base.html로 생성 (ex. narverbar)
* 모든 html 상단에 base.html Content 삽입!
* **Template 상속을 구현하면 유지보수하는 미래의 나에게 도움이 됩니다! ^___^** 

​    

### :construction_worker:실습

1. templates → base.html 생성

   * 변할 수 있는 코드들은 템플릿 태그 사용

   ``````html
   <!doctype html>
   <head>
   	<link href="{% blockLink %}
            <!-- 다른 page.html의 코드 -->
       {% end block %}">
   </head>
   <body>
       ~~~
       {%block content%}
       	<!-- 다른 page.html 코드-->
       {% endblock %}
       ~~~
   </body>
   ``````

     

2. stasic → page → css → base.css 생성

   >  base.html은 Project폴더, App폴더 아무데나 넣어도 상관없음!

​       

3. Home.html에 Base.html 적용

   ``````html
   <!-- base.html 상속하기(불러오기) -->
   {% extends 'base.html' %}
   
   <!-- base.html에 중복되는 부분은 모두 삭제 -->
   <!-- 중복되지 않는 부분인 home.css 불러오기 -->
   {% block link %}
   {% static 'css/home.css' %}
   {% endblock %}
   
   <!-- title의 경우 -->
   {% block title %}
   삐나의 드리머리 서비스!
   {% endblock %}
   
   <!-- body 내용의 경우 -->
   {% block content %}
   <div class="Display-4 font-bold">
       <p class="Introduce Bing">
           삐나는 천재입니다!
       </p>
   </div>
   {% endblock %}
   ``````

   