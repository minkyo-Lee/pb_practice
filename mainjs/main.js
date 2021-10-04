$(document).ready(function(){
    // product
    $(".gallery .product_list").after($(".gallery .product_list").clone());
    let position=0;
    let movesize=270;
    $(".gallery_btn_box>.arrow_btn").click(function(event){
        let $target = $(event.target);
        if($target.is('.lft_btn')){
            if(position==0){
                $(".gallery").css('left',-2700);
                position=-2700;
            }
            position+=movesize;
            $(".gallery").stop().animate({'left':position},'slow');
        }
        else{
            if(position==-2700){
                $(".gallery").css('left',0);
                position=0;
            }
            position-=movesize;
            $(".gallery").stop().animate({'left':position},'slow');
        }
    });
    // insta
    $(".insta_list>li>a").mouseenter(function(){
        $(this).find("figcaption").css('display','block');
        $(this).find("img").css('filter','brightness(0.3)');
    });
    $(".insta_list>li>a").mouseleave(function(){
        $(this).find("figcaption").css('display','none');
        $(this).find("img").css('filter','brightness(1)');
    });
});
