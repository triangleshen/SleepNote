window.addEventListener( "load" , function (){
    var screenWidth = document.body.clientWidth;
    if(screenWidth <= 768){
        $id('banPic').src= 'pic/article_banner.jpg';
    }
    if(screenWidth > 768){
        $id('banPic').src= 'pic/papper_banner.jpg';
    }

    // $('.tag_title').click(function(){
    //     $('.list_wrap').slideToggle(2000,'easeInOutBack');
    // });
    
    // ----------tags----------//
    var tags = document.getElementsByName('tags');
    var cards = document.getElementsByClassName('cards');
    tags[0].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.remove('hide');
        }
    });
    tags[1].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[0].classList.remove('hide');
        cards[2].classList.remove('hide');
    });
    tags[2].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[6].classList.remove('hide');
    });
    tags[3].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[3].classList.remove('hide');
    });
    tags[4].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[4].classList.remove('hide');
    });
    tags[5].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[7].classList.remove('hide');
    });
    tags[6].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[2].classList.remove('hide');
    });
    tags[7].addEventListener('click',function(){
        for(let i = 0; i < cards.length; i++){
            cards[i].classList.add('hide');
        }
        cards[1].classList.remove('hide');
        cards[5].classList.remove('hide');
    });

    // ----------文章時間順序----------//
    // var time = document.getElementsByName('time');
    // time[1].addEventListener('click',function(){
    //     $id('papper_row').style.flexDirection = 'row-reverse';
    //     $id('papper_row').style.flexWrap = 'wrap-reverse';
    // });
    
    // ----------書籤----------//
    var bookMark = document.getElementsByClassName('bookMark');
    for(let i = 0; i < bookMark.length; i++){
        bookMark[i].addEventListener('click',function(){
            if(bookMark[i].title == '加入書籤'){
                bookMark[i].style.filter = 'grayscale(0) brightness(1)';
                bookMark[i].title = "取消書籤";
            }else{
                bookMark[i].style.filter = 'grayscale(1) brightness(1.1)';
                bookMark[i].title = "加入書籤";
              }
        });
    };
});