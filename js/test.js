function checkForm(){
    let result = 0;

    let read = $name('READ');
    let tv = $name('TV');
    let pub = $name('PUB');
    let car = $name('CAR');
    let rest = $name('REST');
    let talk = $name('TALK');
    let sit = $name('SIT');
    let road = $name('ROAD');

    if(read[0].checked == true){
        result += 0;
    }else if(read[1].checked == true){
        result += 1;
    }else if(read[2].checked == true){
        result += 2;
    }else if(read[3].checked == true){
        result += 3;
    }else{
        alert('第一題未完成');
        $id('Q1').scrollIntoView();
        return;
    }

    if(tv[0].checked == true){
        result += 0;
    }else if(tv[1].checked == true){
        result += 1;
    }else if(tv[2].checked == true){
        result += 2;
    }else if(tv[3].checked == true){
        result += 3;
    }else{
        alert('第二題未完成');
        $id('Q2').scrollIntoView();
        return;
    }

    if(pub[0].checked == true){
        result += 0;
    }else if(pub[1].checked == true){
        result += 1;
    }else if(pub[2].checked == true){
        result += 2;
    }else if(pub[3].checked == true){
        result += 3;
    }else{
        alert('第三題未完成');
        $id('Q3').scrollIntoView();
        return;
    }

    if(car[0].checked == true){
        result += 0;
    }else if(car[1].checked == true){
        result += 1;
    }else if(car[2].checked == true){
        result += 2;
    }else if(car[3].checked == true){
        result += 3;
    }else{
        alert('第四題未完成');
        $id('Q4').scrollIntoView();
        return;
    }

    if(rest[0].checked == true){
        result += 0;
    }else if(rest[1].checked == true){
        result += 1;
    }else if(rest[2].checked == true){
        result += 2;
    }else if(rest[3].checked == true){
        result += 3;
    }else{
        alert('第五題未完成');
        $id('Q5').scrollIntoView();
        return;
    }

    if(talk[0].checked == true){
        result += 0;
    }else if(talk[1].checked == true){
        result += 1;
    }else if(talk[2].checked == true){
        result += 2;
    }else if(talk[3].checked == true){
        result += 3;
    }else{
        alert('第六題未完成');
        $id('Q6').scrollIntoView();
        return;
    }

    if(sit[0].checked == true){
        result += 0;
    }else if(sit[1].checked == true){
        result += 1;
    }else if(sit[2].checked == true){
        result += 2;
    }else if(sit[3].checked == true){
        result += 3;
    }else{
        alert('第七題未完成');
        $id('Q7').scrollIntoView();
        return;
    }

    if(road[0].checked == true){
        result += 0;
    }else if(road[1].checked == true){
        result += 1;
    }else if(road[2].checked == true){
        result += 2;
    }else if(road[3].checked == true){
        result += 3;
    }else{
        alert('第八題未完成');
        $id('Q8').scrollIntoView();
        return;
    }

    location.href=`EP_result.html?ans=${result}`;
    // location.href='EP_result.html?ans=' + result;

}

window.addEventListener( "load" , function (){
    let ele = document.getElementById("check");
    if (ele) ele.onclick = checkForm;
  });
