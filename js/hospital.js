// ----------換地區----------//
function switchAreaN(){
    $id('listN').classList.remove('hide');
    $id('hosN1').checked = true;
    $id('googleMap').src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCITtzKtxwQBWZSY5P9yYNVQycE637ga5A&q=國立臺灣大學醫學院附設醫院';
    $id('listW').classList.add('hide');
    $id('listS').classList.add('hide');
    $id('listE').classList.add('hide');
}

function switchAreaW(){
    $id('listW').classList.remove('hide');
    $id('hosW1').checked = true;
    $id('googleMap').src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCITtzKtxwQBWZSY5P9yYNVQycE637ga5A&q=彰化秀傳醫療社團法人紀念醫院';
    $id('listN').classList.add('hide');
    $id('listS').classList.add('hide');
    $id('listE').classList.add('hide');
}

function switchAreaS(){
    $id('listS').classList.remove('hide');
    $id('hosS1').checked = true;
    $id('googleMap').src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCITtzKtxwQBWZSY5P9yYNVQycE637ga5A&q=慈愛綜合醫院';
    $id('listN').classList.add('hide');
    $id('listW').classList.add('hide');
    $id('listE').classList.add('hide');
}

function switchAreaE(){
    $id('listE').classList.remove('hide');
    $id('hosE1').checked = true;
    $id('googleMap').src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCITtzKtxwQBWZSY5P9yYNVQycE637ga5A&q=羅東博愛醫院睡眠檢查中心';
    $id('listN').classList.add('hide');
    $id('listS').classList.add('hide');
    $id('listW').classList.add('hide');
}

// ----------換地圖---------- //
$(function(){
    $('.hos').click(function(){
        let getText = $(this).text();
        $('#googleMap').attr('src',`https://www.google.com/maps/embed/v1/place?key=AIzaSyCITtzKtxwQBWZSY5P9yYNVQycE637ga5A&q=q=${getText}`);
    })
});



// ----------初始化---------- //
function init(){
    $id('areaN').onclick = switchAreaN;
    $id('areaW').onclick = switchAreaW;
    $id('areaS').onclick = switchAreaS;
    $id('areaE').onclick = switchAreaE;
  }

window.addEventListener("load", init, false);