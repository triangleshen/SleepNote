// ----------簡化get元素---------- //
function $id(id){
    return document.getElementById(id);
  }  
function $name(name){
return document.getElementsByName(name);
}

// ----------載入頁首頁尾---------- //
$(document).ready(function(){
	$('header').load('menu.html');
	$('footer').load('footer.html');
});

// ----------toTop動畫---------- //
function init(){
    // window.addEventListener('scroll',function(){
    //     let goTOP = document.getElementById('toTop');
        
    //     if(document.documentElement.scrollTop >= 300){
    //         goTOP.classList.remove('hidden');
    //     }else{
    //         goTOP.classList.add('hidden');
    //     }
    // })

    AOS.init();
}

window.addEventListener("load",init,false);