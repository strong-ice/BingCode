
let doc = document;

// value: 칸에 적힌 내용
// 잘못된 내용 입력 시 오류!
let func = function() {
    // 1. 정보 취합
    let userEmail = doc.getElementById('userEmail');
    let userPass = doc.getElementById('userPass');
    let userConfirm = doc.getElementById('userConfirm');


        // console.log(userEmail.value);
        // console.log(userPass.value);
        // console.log(userConfirm.value);

    // 빈 칸 없이 입력되게 만들기
        // if(!변수이름){}: 입력되지 않았을 때 실행할 행동
        // focus(): 커서가 해당 칸으로 가도록 한다. UX를 올려줌
        // return: 실행되기 전 상태로 돌아가는 것! 실행된 if문 위로 올라간다.
    if (!userEmail.value) {
        alert('이메일을 입력하세요.');
        userEmail.focus();
        return;
    }
    if (!userPass.value) {
        alert('비밀번호를 입력하세요.');
        userPass.focus();
        return;
    }
    if (!userConfirm.value) {
        alert('비밀번호 확인을 입력하세요.');
        userConfirm.focus();
        return;
    }

    // 비밀번호와 비밀번호 확인 대조
    // 비교연산자 != 사용
    if (userPass.value != userConfirm.value) {
        alert('비밀번호가 서로 다릅니다!');
        // 비밀번호&확인 칸 비워주기
        userPass.value = '';
        userConfirm.value = '';
        // 비밀번호 입력 칸에 커서가 자동 이동
        userPass.focus();
        return;
    }

    // 회원가입 성공 시 팝업창
    alert('회원가입을 축하합니다!>_<');
}

// 회원가입 변수 저장
let sign = doc.getElementById('signUp');

// 회원가입 버튼 누르면 함수 작동
sign.addEventListener('click',func);