//script source
function submit(){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/posts");
    xhr.setRequestHeader("content-type", "application/json; charset=UTF-8")
    const data = {title:'JavaScript', author: 'Lee'};
    xhr.send(JSON.stringify(data));

    xhr.onload = () => {
        if(xhr.status === 201){
            const res = JSON.parse(xhr.response);
            console.log(res);
        }else{
            console.log(xhr.status, xhr.statusText);
        }
    }
    // let myform = document.getElementById('form_analysis');
    // formData = new FormData(myform);
    // fetch('http://localhost:3000/statistics',{
    //     method:'POST',
    //     body : myform
    // });
}

// kakao Talk share function\



// 메시지 공유 함수
let shareKakao = function() {
    // 사용할 앱의 JavaScript 키 설정
    Kakao.init('d17642217d1fac078c0f1186ebf75700');

    Kakao.Share.sendCustom({
        templateId: 84556,
        /* (optional)
        templateArgs: {
          title: '카카오톡 대화 분석 서비스',
          description: '여러분들의 심심함을 달래드릴게요',
        },
        */
      });
};