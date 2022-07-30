window.onscroll = function () {
    // code tạo hiệu ứng xuất hiện thanh màu đên khi scroll
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerFixed").style.transform = "translate(0,0)";
    }
    else {
        document.getElementById("headerFixed").style.transform = "translate(0,-100%)";
    }
    
    
}

// PROGRESS BAR 
window.onload = function () {
    var progressBar_80 = $('.progress-bar-80');
    var progressNumber_80 = 0;
    setInterval(function () {
        while (progressNumber_80 <= 80) {
            progressNumber_80++;
            progressBar_80.css('width', progressNumber_80 + '%');
            progressBar_80.attr('aria-valuenow', progressNumber_80);
        }
    }, 10);

    var progressBar_90 = $('.progress-bar-90');
    var progressNumber_90 = 0;
    setInterval(function () {
        while (progressNumber_90 <= 90) {
            progressNumber_90++;
            progressBar_90.css('width', progressNumber_90 + '%');
            progressBar_90.attr('aria-valuenow', progressNumber_90);
        }
    }, 10);

    var progressBar_75 = $('.progress-bar-75');
    var progressNumber_75 = 0;
    setInterval(function () {
        while (progressNumber_75 <= 75) {
            progressNumber_75++;
            progressBar_75.css('width', progressNumber_75 + '%');
            progressBar_75.attr('aria-valuenow', progressNumber_75);
        }
    }, 10);
}



