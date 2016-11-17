/* 
* @Author: Marte
* @Date:   2016-09-13 11:39:55
* @Last Modified by:   Marte
* @Last Modified time: 2016-09-19 16:48:15
*/
// sidenav
// $(".side-nav>li a").click(function(){
//     var $ul = $(this).siblings('ul'); 
//     var $li = $(this).parent('li');  
//     if($li.hasClass('toggle-change')){
//         $ul.slideUp(300);
//         $li.removeClass('toggle-change');
//     }else{
//         $li.siblings('li').children('ul').slideUp(300);
//         $ul.slideDown(300);
//         $li.addClass('toggle-change').siblings('li').removeClass('toggle-change');
//     }
// })       

$(window).ready(function(){


    $(".nav>li>a").click(function(){
        console.log("!");

    })

})