# Primary Key :key:

## Primary Key란 & Detail, Update, Delete

### Primary Key(기본키)

: 오브젝트를 식별할 수 있는 값

: 중복될 수 없는 단일 값



## :construction_worker: 실습 :construction_worker:

1. **detail.html**

   ``````html
   {{my_jss.id}}번째 글입니다.
   
   <br>
   
   제목: {{my_jss.title}}
   
   <br>
   
   내용: {{my_jss.content}}
   
   <br>
   
   생성시간:{{my_jss.updated.at|date:"Y-m-d"}}
   
   <br>
   
   <a hred="{% url 'update' my_jss.id%}"><button>수정</button></a>
   <a href="{% url 'delete' my_jss.id %}"><button>삭제</button></a>
   ``````

2. **views.py**

   ``````python
   from django.http import Http404
   
   # 21번째 줄
   def detail(request, jss_id):
       try:
           my_jss = Jasoseol.objects.get(pk=jss_id)
       except:
           raise Http404
       
       return render(request, 'detail.html', {'my_jss':my_jss})
   
   def delete(request, jss_id):
       my_jss = Jasoseol.objects.get(pk=jss_id)
       my_jss.delete
       return redirect('index')
   
   def update(request, jss_id):
       my_jss = Jasoseol.objects.get(pk=jss_id)
       jss_form = JssForm(instance=my_jss)
       if request.method == "POST":
           updeated_form = JssForm(request.POST, instance=my_jss)
           if updated_form.is_valid():
               updated_form.save()
               return redurect('index')
       
       return render(request, 'create.html', {'jss_form':jss_form})
   ``````

3. **urls.py**

   ``````python
   from main.views import index, create, detail, delete, update
   
   urlpatterns = [
       ...
       ...
       # ctrl + D를 누르면 같은 변수 명을 한 번에 수정할 수 있다.
       path('detail/<int:jss_id>', detail, name="detail")
       path('delete/<int:jss_id>', delete, name="delete")
       path('update/<int:jss_id>', update, name="update")
   ]
   ``````

   