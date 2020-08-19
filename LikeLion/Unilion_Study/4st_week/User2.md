# User #2 :family:

## Login & Logout & User Template Tags

## :construction_worker: 실습 :construction_worker:

1. **index.html**

   ``````html
   <!-- 회원가입 버튼 아래 -->
   
   {% if user.is_authenticated %}
   <a href="% url 'logout' %">
   	<button>로그아웃</button>
   </a>
   
   안녕하세요! {{user}}님!
   
   {% else %}
   
   <a href="% url 'signup' %">
   	<button>로그인</button>
   </a>
   
   <a href="% url 'login' %">
   	<button>로그인</button>
   </a>
   
   {% endif %}
   ``````

2. **accounts - urls.py**

   ``````python
   from django.contrib.auth.views import LogoutView
   
   urlpatterns = [
       ...
       path('login/', MyLoginView.as_view(), name="login"),
       path('logout/', LogoutView.as_view(), name="logout"),
   ]
   ``````

3. **accounts - templates - registration - login.html**

   ``````html
   <h1>로그인 페이지!</h1>
   
   <form method="POST" action="">
       
   {% csrf_token %}
   {{form}}
   <input type="submit" value="로그인">
       
   </form>
   ``````

4. **JssProject - settings.py**

   ``````python
   LOGIN_REDIRECT_URL = "/"
   LOGOUT_REDIRECT_URL = "/"
   ``````

5. **accounts - views.py**

   ``````python
   from django.contrib.auth.views import LoginView
   
   
   class MyLoginView(LoginView):
       template_name = 'login.html'
   ``````

   







