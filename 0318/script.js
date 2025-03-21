window.onload = function() {
    dpTime();  // 페이지 로드 시 바로 현재 시간 표시
    setInterval(dpTime, 1000);  // 1초마다 dpTime 함수 호출
};

function dpTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var ampm;

    if (hours >= 12) {
        hours -= 12;
        ampm = "오후 ";
    } else {
        ampm = "오전 ";
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("dpTime").innerHTML = ampm + hours + ":" + minutes + ":" + seconds;
}
