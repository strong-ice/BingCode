# ModelForm :scroll:

## ModelForm을 활용한 create & ModelForm 속성 제어 & 기본 레이아웃 구성

### What is ModelForm

* 모델에 대응하는 html폼을 만들어 줌
* 데이터를 생성하거나 업데이트가 간편
* 폼을 다루는 법을 배워야함





### :construction_worker: 실습 :construction_worker:

1. **index.html**

``````html
<!-- static 불러오기 -->
{% load static %}

<!-- ! + Enter을 누르면 html 폼이 자동완성된다!! -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자소설 닷컴</title>
    <!-- CSS 연결 -->
    <link rel="stylesheet" type="text/css" href="{% static 'css/index.css' %}">
</head>
<body>
    <!-- 자기소개서 작성 버튼 -->
    <div class="make_jss">
        <a href="{% url 'create' %}">
            <div class="plus_btn">
                +
            	</div>
        </a>
        <p>자기소개서 작성</p>
    </div>
    
    {% for jss in all_jss %}
    <div class="all_jss">
        <p>{{jss.title}}</p>
        <p>{{jss.content}}</p>
        <p>{{jss.updated_at|date:"Y-m-d"}}</p>
    </div>
    {% endfor %}
    
</body>
</html>
``````

2. **views.py**

   ``````python
   from django.shortscuts import render, redirect
   from .forms import JssForm
   from .models import Jasoseol
   
   
   def index(request):
       all_jss = Jasoseol.objects.all()
       return render(request, 'index.html', {'all_jss':all_jss})
   
   def create(request):
   	if request.method == "POST":
           filled_form = JssForm(request.POST)
           if filled_form.is_valid():
               filled_form.save()
               return redirect('index')
       jss_form = JssForm()
       return render(request, 'create.html', {'jss_form':jss_form})
   ``````

3. **urls.py**

   ``````python
   from main.views import index, create
   
   urlpatterns = [
       path('', index, name="index"),
       path('create/', create, name="create"),
   ]
   ``````

4. **index.css**

   `````css
   body{
       margin: 0;
       padding: 50px;
   }
   
   a{
       text-decoration: none;
   }
   
   .make_jss{
       width: 200px;
       height: 300px;
       border: 1px solid black;
       display: flex;
       flex-direction: column;
       align-items: center;
       margin-bottom: 30px;
       margin-top: 30px;
   }
   
   
   .all_jss{
       display: inline-flex;
   }
   
   .plus_btn{
       flex: 1;
       display: flex;
       align-items: center;
   	font-size: 3rem;
   }
   
   p{
       flex: 1;
       display: flex;
       align-items: center;
   }
   
   
   `````

5. **settings.py**

   ``````python
   STATIC_ROOT = os.path.join(BASE_DIR, 'static')
   ``````

6. **forms.py**

   ``````python
   from django import forms
   from .models import Jasoseol
   
   class JssForm(forms.ModelForm):
       
       class Meta:
           model = Jasoseol
           fields = ('title', 'content',)
       
       def __init__(self, *args, **kwargs):
           super().__init__(*args, **kwargs)
           self.fields['title'].label = "제목"
           self.fields['content'].label = "자기소개서 내용"
           self.fields['title'].widget.attrs.update({
               'class': 'jss_title',
               'placeholder': '제목',
           })
   ``````

7. **models.py**

   ``````python
   from django.db import models
   
   class Jasoseol(models.Model):
       title = models.CharField(max_length=50)
       content = models.TextField()
       # 날짜 자동 업데이트
       updated_at = models.DateTimeField(auto_now=True)
   
   ``````

8. **create.html**

``````html
<form method="POST" action="">
    {% csrf_token %}
    {{jss_form.as_p}}
    <input type="submit" value="확인">
</form>
``````





