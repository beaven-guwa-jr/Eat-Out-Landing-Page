window.onload = function(){

    const menu_btn = document.querySelector('.hamburger-menu');
    const mobile_nav = document.querySelector('.mobile-nav');
    const body = document.querySelector('body');
     
    menu_btn.addEventListener('click',function(){
        menu_btn.classList.toggle('is-active');
        mobile_nav.classList.toggle('is-active');

        if(menu_btn.classList.contains('is-active')){
            body.classList.add('no-scroll'); 
        }
        else{
            body.classList.remove('no-scroll');
        }
    })

    
        // -------------SECTION TRANSITIONS -----------------
        window.addEventListener('scroll', reveal);
        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            for(var i =0; i< reveals.length; i++){
                 
                var windowheight  = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint =150;
   
                if(revealtop < windowheight - revealpoint){
                    reveals[i].classList.add('active')
                }
                else{
                   reveals[i].classList.remove('active')
                }
            }
        }
       
    // ------------------------CAROUSEL-------------------
    $('.carousel').slick({
        speed: 400,
        infinite:true,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 2000,
        prevArrow:false,
        nextArrow:false,
        dots:true,
     
      });


    // -----------------------Tabs------------------
    var tabTriggerli = document.querySelectorAll('.tab-item li');
    tabTriggerli.forEach(function(tabTriggerli, index){
        tabTriggerli.addEventListener('click', function(){
            var currentTabInfo = document.querySelector('.tab-info[data-tab-content="' + this.dataset.tabTrigger + '"]');
            // remove classess
            document.querySelector('.tab-info.is-open').classList.remove('is-open');
            document.querySelector('.tab-item li.is-active').classList.remove('is-active');
            // add classes
            currentTabInfo.classList.add('is-open');
            this.classList.add('is-active');
        });
    });


    var tabTriggerBtns = document.querySelectorAll('.tabs li button');
    tabTriggerBtns.forEach(function(tabTriggerBtn, index){
        tabTriggerBtn.addEventListener('click', function(){
            var currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');
            // remove classess
            document.querySelector('.tab-content.is-open').classList.remove('is-open');
            document.querySelector('.tabs li button.is-active').classList.remove('is-active');
            // add classes
            currentTabData.classList.add('is-open');
            this.classList.add('is-active');
        });
    });
}