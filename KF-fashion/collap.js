    $(document).ready(function(){
        $("#gnb .menu a.dp1").click(function(){
            $(this).next(".sub").toggleClass("on");
            $(this).addClass("on");
        });
       
    });    