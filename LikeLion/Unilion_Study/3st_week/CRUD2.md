## CRUD #2 :heartpulse:

## :fire: CRUD 구현

### :construction_worker: 실습

1. **UPDATE**

   * update.html & update.css 생성

   * template 상속 구현하기 (base.html)

   * html form 작성하기

   * url.py 작성하기

   * views.py

     ``````python
     def update(request, designer_id):
         post = get_object_or_404(Designer, pk = designer_id)
         
         if 'image' in request.FILES:
                 post.image = requset.FILES['image']
             post.name = requset.POST['name']
             post.address = requset.POST['address']
             post.description = requset.POST['description']
             
             post.save()
             
             return redirect('detail', post.id)
         else:
             # post로 객체를 인식해서 반환한 다음에 그 정보를 미리 띄워주기 위해 post를 넣는다
             return render(request, 'update.html', {'designer' : post})
     ``````

   * detail.html에서 update 버튼 만들기 (정보 수정)

​       

​       

## :fire: 패키지 종속성 관리

: 내 환경에서 어떤 패키지를 어떤 버전으로 사용하고 있는지 알려주는 것

(같이 작업을 하는 사람들끼리 통일시켜야 한다)

``````bash
# 패키지 설치: 다른 사람들이 정의해놓은
pip install -r requirements.txt

# 패키지 정의: 내가 정의하는
pip freeze > requirements.txt 
``````

* 패키지 정의 시
  * venv → requirements.txt에서 수정 가능