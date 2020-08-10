# CRUD #1 :heartpulse:

## :fire: CRUD 개념 이해

**: C**reate **R**ead **U**pdate **D**elete

​        

### CREATE

: 새로운 객체를 생성해 Date를 저장

* **객체 생성**

  ``````
  if request.method == 'POST':
  	post = Designer()
  ``````

* **입력 Data 저장**

  ``````
  post.name = request.POST['name']
  post.address = request.POST['address']…
  ``````

* **입력 Data(POST 객체) 저장**

  ``````
  post.save()
  ``````

  ​     

### UPDATE

: 정보 수정이  필요한 객체를 찾아 Data를 새롭게 저장

* **객체 탐색**

  ``````
  post=get_object_or_404(Designer, pk = designer_id)
  
  if requset.mothod == 'POST':
  ``````

* **입력 Data 저장**

  ``````
  post.name = request.POST['name']
  post.address = request.POST['address']…
  ``````

* **입력 Data(POST 객체) 저장**

  ``````
  post.save()
  ``````

  ​     

### DELETE

: 제거가 필요한 객체를 찾아 삭제

* **객체 탐색**

  ``````
  post = get_object_or_404(Designer, pk = designer_id)
  ``````

* **객체 삭제**

  ``````
  post.delete()
  ``````

* **Home으로 이동**

  ``````
  reyurn redirect('home')
  ``````

    

### :construction_worker: 실습

1. **Create**

   * news.html 생성 → template 상속 구현하기 (base.html)

   * 적절한 form 작성하기

   * urls.py에 연결

   * views.py에 연결

   * create를 urls.py, views.py에 연결(html 문서 없어도 가능)

   * **views.py에서 객체 생성하기**

     ``````python
     # 최상단에 import redirect 해주기!!!
     
     def create(request):
         if request.method == 'POST':
             post = Designer()
             
             if 'image' in request.FILES:
                 post.image = requset.FILES['image']
             post.name = requset.POST['name']
             post.address = requset.POST['address']
             post.description = requset.POST['description']
         
         	Post.save()
             
             return redirect('detail', post.id)
             # return redirect('profile/'+str(post.id))도 가능. BUT 위의 모양이 최신 표준
     ``````

     ​			

2. **DELETE**

   * detail.html → div class="btn-group"

     ``````html
     <div class="btn group">
         <a href="{% url 'delete' designer%}" class="btn btn-sm btn-outline-danger">정보 삭제</a>
     </div>
     ``````

   * urls.py

     ``````python
     path('delete/<int:designer_id>/', views.delete, name = "delete"),
     ``````

   * views.py

     ``````python
     def delete(request, designer_id):
         post get_objext_or_404(Designer, pk = designer_id)
         post.delete()
         
         # 삭제하고 돌아갈 페이지 설정 
         return redirect('home')
     ``````

     



## :fire: GET / POST 이해

: 클라이언트에서 서버로 요청을 보내는 방법

​     

### GET

* Date를 "URL"에 포함시켜 전송

* 전송하는 길이에 제약 존재

* Caching 가능
  (REST에서 데이터 조회에 활용)

* **READ에서 활용한다!**

  ​     

### POST

* Date를 "Body"에 넣어 전송 (URL에서 노출 X)
* 전송하는 길이에 제약 X
* Caching 불가능
  (REST에서 데이터 생성에 활용)
* **CREATE / UPDATE에서 활용한다!**