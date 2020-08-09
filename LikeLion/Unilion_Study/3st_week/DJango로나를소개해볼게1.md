## :books:Django로 나를 소개해볼게:books:

### :fire: ​Model 이해

**Model이란?** 데이터에 접속하고 관리하도록 도와주는 객체



### :bell: Model과 Database의 연동 이해 & 실습

**Model 생성 & 적용**

* **models.py**: # 모델명의 첫 글자는 무조건 대문자! (개발자들의 약속)

  * 모델은 클래스로 틀을 정해준다
  * 이름을 정해주고 그 틀을 정할 수 있다(이미지, 캐릭터, 텍스트…)

  ``````python
  class Designer(models.Model):
      image = models.ImageField(upload_to = 'images/')
      name = models.CharField(max_length = 50)
      address = models.CharField(max_length = 255)
      description = models.TextField()
  ``````

* **Terminal**

  ``````bash
  # DB가 알아듣도록 번역하기
  python manage.py makemigration (+App 이름)
  # 번역한 내용을 DB에 적용
  python manage.py migrate (+ App 이름)
  ``````



**실습**

* **시작할 때 항상 쳐야하는 명령어**

  ``````bash
  source venv/Scripts/activate
  ``````

1. **models.py에 코드 입력**

   ``````python
   class Designer(models.Model):
       image = models.ImageField(upload_to = 'images/')
       name = models.CharField(max_length = 50)
       address = models.CharField(max_length = 255)
       description = models.TextField()
   ``````

2. **Pillow 설치하기 (오류 없애기 위해)**

   ``````bash
   pip install pillow
   ``````

3. **DB가 알아들을 수 있도록 명령어 입력하기**

   * Create model Designer이라고 뜨면 성공!

   ``````bash
   python manage.py makemigrations
   ``````

4. **번역한 내용을 DB에 적용**

   ``````bash
   python manage.py migrate
   ``````



### :star: Adim 파악

**Admin 기능**: Django는 웹 서비스 관리를 위한 admin 기능 기본 제공

* **Terminal**

  ``````bash
  python manage.py createsuperuser
  ``````

**실습**

1. **Terminal에 명령어 입력**

   ``````bash
   python manage.py createsuperuser
   
   # Enter를 누르면 다음 창이 뜹니다
   사용자 이름: # 마음대로
   이메일 주소: # 생략가능
   Password: # 다시 찾을 수 없으므로 신중하게 결정(8글자 이상/특수문자 포함)
   Password (again): # 비밀번호 확인
   
   #모두 입력하면 다음 창이 뜹니다
   Bypass password validation and create user anyway? [y/N]
   # 만드려면 y를 입력
   ``````



**Admin에게 Model 알려주기**

* **admin.py**

  ``````python
  from .models import Designer
  admin.site.register(Designer)
  ``````

  * 여기서 Designer 추가 가능 (Designer 관리: /admin/page/designer)

* **models.py**

  * 이름 불러오는 방법

  ``````python
  # 들여쓰기 주의하세요
  # class Designer 안에 만들어주세요
  	def __str__(self):
          return self.name
  ``````

  