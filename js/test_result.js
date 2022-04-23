window.addEventListener( "load" , function (){
  var ans = window.location.search.split('=')[1];
  $id('grade').innerText = ans;
  let range = document.getElementsByClassName('range');

  if(ans<=5){
    $id('diagram').src = "pic/ep_0.jpg";
    $id('result').innerHTML = '嗜睡情況正常偏少';
    $id('advice').innerHTML = '目前的嗜睡情況很正常，<br>繼續保持下去！';
    range[0].style.backgroundColor = "#DAE8FF";
  }else if(ans<=10){
    $id('diagram').src = "pic/ep_1.jpg";
    $id('result').innerHTML = '睡情況正常偏多';
    $id('advice').innerHTML = '目前的嗜睡情況還算很正常，<br>稍微留意一下生活作息即可。';
    range[1].style.backgroundColor = "#DAE8FF";
  }else if(ans<=12){
    $id('diagram').src = "pic/ep_2.jpg";
    $id('result').innerHTML = '嗜睡情況明顯';
    $id('advice').innerHTML = '目前的嗜睡情況可能會影響日常生活，<br>請多留意自己的生活作息。';
    range[2].style.backgroundColor = "#DAE8FF";
  }else if(ans<=15){
    $id('diagram').src = "pic/ep_3.jpg";
    $id('result').innerHTML = '嗜睡情況稍多';
    $id('advice').innerHTML = '目前的嗜睡情況可能會影響日常生活，<br>有需要的話請到診所進行評估。';
    range[3].style.backgroundColor = "#DAE8FF";
  }else if(ans<=24){
    $id('diagram').src = "pic/ep_4.jpg";
    $id('result').innerHTML = '<span>嗜睡情況嚴重</span>';
    $id('advice').innerHTML = '目前的嗜睡情況已經嚴重到會影響日常生活，<br>請盡速到診所進行評估。';
    range[4].style.backgroundColor = "#DAE8FF";
  }
});