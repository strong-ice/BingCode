## :blue_book: ​Django로 나를 소개해볼게 #2 :blue_book:

### :fire: QuerySet, Method 이해 & 구현

**QuerySer이란?** 전달받은 모델의 객체 목록

* Designer. 객체들의 모임!

* **views.py**

  * #Model의 존재 알려주기

  ``````python
  from .models import Designer
  ``````

  * #Queryset을 Templates로 보내기

  ``````python
  def home(request):
      # 모두 한 번에 반환하거나 특정 값만 뽑기 위한 Method
      designer = Designer.objects.all()
      return render(request, 'home.html', {'designers':designers})
  ``````



##### :construction_worker: 실습 :construction_worker:

1. **views.py에 코드 입력 (상단 참고)**

2. **home.html 디자인 해주기**

   * 94행 class="container" 속 디자인해주기

   ``````html
   <!-- 디자인은 자기 나름대로 해도 상관없습니다 -->
   <div class="card-columns">
       {% for designer in designers %}
         <div class="card mb-4 shadow-sm">
         	{% if designer.image %}
           <img src="{{ designer.image.url }}" class="card-img-top" alt="Designer_Image">
               {% else %}
           <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-labal="Placeholder:Thimbnail">
           <title>Bing's Dreamary</title>
           <rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Profile</text>
           </svg>
         <!-- 디자이너 이름과 지역 소개-->   
            {% endif %}
            <div class="card-body">
                <h4 class="card-title">{{ designer.name }}</h4>
                 <h6 class="text">{{ designer.address }}</h6>
                <hr>
                <p class="card-text">{{ designer.description }}</p>
               </div>
           </div>
   	</div>
   ``````

   

### :bell:PK, Path Convertor, get_object_or_404 이해

#### :page_with_curl: ​Detail Page 구현

1. **각각의 글을 어떻게 분류하지?**
   - PK (Primary Key)
2. **urls.py에서 글마다 Path를 만들어야 하는 건가?**
   - Path Conventor
3. **만약 없는 글을 불러오려고 하면 어쩌지?**
   * get_object_or_404



##### :star: PK (Primary Key)

: Model을 통해 생성된 객체들을 구분할 수 있는 "고유한" key

##### :star: Path Conventor

: 여러 객체의 URL를 "계층적으로" 다룰 수 있도록 도와주는 도구

: 주소는 '/profile/객체번호'로 구성된다

* **urls.py**

  ``````python
  path('profile/<int:designer_id>/', views.detail, name = "detail"),
  ``````

* **Template**

  ``````bash
  {% url 'detail' designer.id %}
  ``````

##### :star: get_object_or_404

: Object를 가져오려 했는데 없을 경우 나타나는 에러

* **views.py**

  ``````python
  from django.shortcuts import render, ge_object_or_404
  
  def detail(request, designer_id):
      designer = get_object_or_404(Deginer, pk = degigner_id)
      return render(request, 'detail.html', {'designer':designer})
  ``````

  > views.py의 pk 변수명과 urls.py의 변수명은 같아야 한다!



#### :construction_worker: 실습 ​- ​자세히 ​알아보기 ​p​a​g​e​ ​생성 :construction_worker:

1. **PK, Path Conventor, get_object_or_404**

   * home.html 115행('class=cardbody' 안)

   ``````html
   <div class="d-flex justify-content-between align-items-center">
       <div class="btn-group">
           <a href="{% url 'detail' designer.id %}" class="btn btn-sm btn-outline-secondary">자세히 알아보기</a>
       </div>
   </div>
   ``````

   * urls.py

   ``````python
   path('introduce/', views.introduce, name = "introduce"),
   path('profile/<int:designer_id>/', views.detail, name = "detail"),
   ``````

   * views.py

   ``````python
   # 1행에 추가할 것
   from django.shortcuts import render, get_object_or_404
   
   # def 추가할 것
   def detail(request, designer_id):
       designer = get_object_or_404(Designer, pk = designer_id)
       return render(request, 'detail.html', {'designer' : designer})
   ``````

2. **HTML 작업**

   * templates 폴더에 detail.html 파일 생성하기

   * home.html 복붙 수정해서 detail.html 구성하기

     > 중복되는 코드들은 다음 강의에서 삭제합니다!

##### :exclamation: 주의사항: urls.py의 PK 값과 views.py의 PK 값은 항상 같아야 합니다 :exclamation:



#### :page_with_curl: Detail Page 구현 정리

1. Server에게 특정 객체를 달라고 Request
2. 이에 대한 URL을 서버에게 알림 (Client가 Server에게)
3. 객체 반환 or 404 Error 호출 (Server가 Client에게)

