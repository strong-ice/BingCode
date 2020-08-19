# User #1 :family:

## User 모델 & url 상속 & 회원가입 구현

## :construction_worker: 실습 :construction_worker:

1. **settings.py**

   ``````python
   # 33행 참조
   INSTALLED_APPS = [
       ...
       ...
       'accounts',
   ]
   ``````

2. **JssProject - urls.py**

   ``````python
   urlpatterns = [
       path('admin/', admin.site.urls),
       path('', include('main.urls')),
       path('', include('accounts.urls')),
   ]
   ``````

   

3. **main - urls.py**

   ``````python
   urlpatterns = [
       path('', index, name="index"),
       path('create/', create, name="create"),
       path('detail/<int:jss_id>', detail, name="detail"),
       path('delete/<int:jss_id>', delete, name="delete"),
       path('update/<int:jss_id>', update, name="update"),
   ]
   ``````

4. **accounts - urls.py**

   ``````python
   from django.urls import path
   from .views import signup
   
   urlpatterns = [
       path('signip/', signup, name="signup"),
   ]
   ``````

   

5. **accounts - views.py**

   ``````python
   from django.shortcuts import render, redirect
   from django.contrib.auth.forms import UserCreationForm
   
   def signup(request):
       redi_form = UserCreationForm()
       if request.method == "POST":
           filled_form = UserCreationForm(request.POST)
           if filled_form.is_valid():
               filled_form.save()
               return redurect('index')
       
       return render(request, 'signup.html', {'regi_form':regi_form})
   ``````

6. **accounts - templates - signup.html**

   ``````html
   <h1>회원가입 페이지입니다.</h1>
   
     
   <form method="POST" action="">
   {% csrf_token %}
   {{redi_form.as_p}}
   <input type="submit" value="회원가입">
   </form>
   ``````

7. **index.html**

   ``````html
   <!-- body 최상단(12행) -->
   <a href="{% url 'signup' %}">
   	<button>회원가입</button>
   </a>
   ``````

   