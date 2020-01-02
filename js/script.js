function gnb(){
            document.querySelector(".black").style.height="310px";
            document.querySelector(".gnb").style.height="180px";
        }

        function gnbout(){
            document.querySelector(".black").style.height="157px";
            document.querySelector(".gnb").style.height="50px";
        }

        function tab(){
            document.querySelector(".thumbnail-list>ul").style.marginLeft="-1200px";
            document.querySelector(".tab>ul>li:nth-child(1)>a").classList.add("on");
            document.querySelector(".tab>ul>li:nth-child(2)>a").classList.remove("on");

        }

        function tab2(){
            document.querySelector(".thumbnail-list ul").style.marginLeft="0px";
            document.querySelector(".tab>ul>li:nth-child(2)>a").classList.add("on");
            document.querySelector(".tab>ul>li:nth-child(1)>a").classList.remove("on");
        }

        $(function(){
            $(".thumbnail>ul>li").hover(
                function(){
                    $(this).find(".info").css("display","none");
                    $(this).find(".hidden_info").css("display","block");
                    $(this).find("img.hidden").css("display","block");
                },
                function(){
                    $(this).find(".info").css("display","block");
                    $(this).find(".hidden_info").css("display","none");
                    $(this).find("img.hidden").css("display","none");
                });
        });

        $(function(){
            $(".thumbnail-list>ul>li").hover(
                function(){
                    $(this).find(".mdinfo").css("display","none");
                    $(this).find(".hidden_mdinfo").css("display","block");
                    $(this).find("img.hidden").css("display","block");

                },
                function(){
                    $(this).find(".mdinfo").css("display","block");
                    $(this).find(".hidden_mdinfo").css("display","none");
                    $(this).find("img.hidden").css("display","none");
                });
        });

        $(function(){
            $(".video>a").click(
                function(){
                    $(this).css("display","none");
            });
        });

        $(function(){
            $(".quick>button").click(function(){
                $("html, body").animate({
                  scrollTop:0  
                },400);
                return false;
            });
        });