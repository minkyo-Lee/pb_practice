$(document).ready(function(){
    // 1. One-depth > li    hover 시 underline 왼쪽부터 생기는 것  -> css animation 
    //     1-1. underline 영역 수정
    //     1-2. animation 작성

    // 2. One-depth > 세번째 li    hover 시 submenu    display : none 해제   -> jquery
    //      2-1. hover 시 fadeIn
    //      2-2. 마우스 떠나면 fadeOut
    //      2-3. fadeIn/fadeOut 시간은 0.3s
    $("li.third_menu").hover(
        function(){
            $(".sub_menu_wrap").fadeIn(300);
        },
        function(){
            $(".sub_menu_wrap").fadeOut(300);
        }
    );

    // 3. search-icon  click 시 search 창 나타나기     -> jquery
    //      3-1. 아이콘 클릭시 search창 slideDown
    //      3-2. close 버튼 클릭시 slideUp

    $("span.search_btn").click(
        function(){
            $(".search_box_wrap").fadeIn(100);
            $(".search_box").slideDown(300).delay(100);
        }
    );
    $("span.close_btn").click(
        function(){
            $(".search_box_wrap").fadeOut(300);
            $(".search_box").slideUp(300);
        }
    );

    $(".family_sites>a.arrow").toggle(
        function(){
            $(".family_site_list").css({'height':'430px','transition':'height 1s'})
        },
        function(){
            $(".family_site_list").css({'height':'0px','transition':'all 1s'})
        }
    );

});