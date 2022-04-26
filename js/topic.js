window.addEventListener( "load" , function (){
    var screenWidth = document.body.clientWidth;
    if(screenWidth <= 992){
        $id('EPpic').src= 'pic/topic2_sm.jpg';
        $id('SBpic').src= 'pic/topic3_sm.jpg';
        $id('OTHERpic').src= 'pic/topic4_sm.jpg';
        $id('Qpic').src= 'pic/topic_q_sm.jpg';
    }

    if(screenWidth > 992){
        $id('EPpic').src= 'pic/topic2.jpg';
        $id('SBpic').src= 'pic/topic3.jpg';
        $id('OTHERpic').src= 'pic/topic4.jpg';
        $id('Qpic').src= 'pic/topic_q.jpg';
    }
});