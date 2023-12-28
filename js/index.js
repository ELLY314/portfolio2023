window.onload = function(){
    // 스크롤 내리면 header, go-top active
    let goTop = document.querySelector(".go-top");
    let header = document.querySelector(".header");
    window.addEventListener("scroll", function(){
        // 스크롤 높이값 = window.scrollY
        if(window.scrollY >= 100){
            document.querySelector(".logo").style.fontSize = "15px"
            goTop.classList.add("active")
            header.classList.add("active");
        }else{
            document.querySelector(".logo").style.fontSize = "30px"
            goTop.classList.remove("active")
            header.classList.remove("active");
        }
    })
    goTop.addEventListener("click",function(){
        window.scrollTo(0,0)
    });

    // 모바일 메뉴 버튼
    let moMenuBtn = document.querySelector(".mo-menu-btn")
    let sideMenu = document.querySelector(".side-menu")
    moMenuBtn.addEventListener("click", function(){
        sideMenu.classList.toggle("active")
        this.classList.toggle("active")
    })
    window.addEventListener("resize", function(){
        var winWidth = window.innerWidth
        if(winWidth > 768){
            sideMenu.classList.remove("active")
            moMenuBtn.classList.remove("active")
        }

    });
    // main 글자 타이핑
    let mainTyped = new Typed('.main-text', {
        strings: ['안녕하세요', '영상제작자 이수린입니다'],
        // strings: ['안녕하세요', '영상제작자 <br>이수린입니다'],
        typeSpeed: 100,
        cursorChar : ".",
        // loop : true,
        // fadeOut: true,
    });

    // portfolio slide
    let portfolioSlide = new Swiper(".sw-portfolio", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          prevEl: ".portfolio-prev",
          nextEl: ".portfolio-next",
        },
    });

    // portfolio data
    let workData = {
        item_count: 3,
        item_1:{
            videoid:"1tgDEmCkVx4", 
            tit : "TYPOGRAPHY", 
            period : "2023.11.01 ~ 2023.12.01", 
            tools : `<div class="ic-ae"></div><div class="ic-pro"></div><div class="ic-photo"></div><div class="ic-illust"></div>`
        },
        item_2:{
            videoid:"u9eehcAHhi8", 
            tit : "Motion Graphic", 
            period : "2023.11.01 ~ 2023.12.01", 
            tools : "After Effect"
        },
        item_3:{
            videoid:"Yu2uuyRJ2l4", 
            tit : "LIVE 2D", 
            period : "2023.11.01 ~ 2023.12.01", 
            tools : "After Effect, Photoshop"
        },
    }
    let pfWrap = document.querySelector(".sw-portfolio ul")
    
    let modal = document.querySelector(".modal")
    let modalCont = document.querySelector(".modal-cont")
    let pfListHtml = ``;
    // 포트폴리오 리스트 html 추가
    for(let i = 0; i < workData.item_count; i++){
        let obj = workData[`item_${i+1}`];
        let temp = `
            <li class="swiper-slide">
                <div class="portfolio-thumb">
                <img src="https://img.youtube.com/vi/${obj.videoid}/maxresdefault.jpg" alt="썸네일이미지">
                </div>
                <div class="portfolio-text">
                    <h2>${obj.tit}</h2>
                    <p>IU-LILAC TYPOGRAPHY 입니다.</p>
                    <p>작업기간 : ${obj.period}</p>
                    <div class="tools">
                        <p>사용툴 : </p>
                        ${obj.tools}
                    </div>
                    
                    <span class="view-btn">VIEW</span>
                </div>
            </li>
        `
        pfListHtml += temp

    }
    pfWrap.innerHTML = pfListHtml
    // 포트폴리오 썸네일/view 클릭시 영상팝업창
    let viewBtn = document.querySelectorAll(".view-btn")
    let pfItems = document.querySelectorAll(".sw-portfolio ul li")
    let closeBtn = document.querySelector(".close-btn")
    let body = document.querySelector("body")
    pfItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            let obj = workData[`item_${index + 1}`]; 
            modal.classList.add("active");
            modalCont.innerHTML = `<iframe src="https://www.youtube.com/embed/${obj.videoid}?autoplay=1&mute=1" allowfullscreen></iframe>`;
            body.classList.add("scrollfix")
        });
    });
    modal.addEventListener("click", function () {
        modal.classList.remove("active");
        body.classList.remove("scrollfix")
    });
    closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
        body.classList.remove("scrollfix")
    });

    // skill
    function progressBar(selector, gauge){
        var bar = new ProgressBar.Line(selector, {
            strokeWidth: 5,
            easing: 'easeInOut',
            duration: 1400,
            color: '#d85252',
            trailColor: '#eee',
            trailWidth: 3,
            step : function(state, circle){
                circle.setText(Math.round(circle.value() *100)+"%")
            }
        });
        bar.animate(gauge);
        return bar; // Return the progress bar instance
    }
    // Start the progress bars with initial values
    let proPr = progressBar(".pro_pr", 0.5);
    let proAe = progressBar(".pro_ae", 0.5);
    let proAi = progressBar(".pro_ai", 0.5);
    let proPs = progressBar(".pro_ps", 0.5);
    let proHtml = progressBar(".pro_html", 0.5);
    let proCss = progressBar(".pro_css", 0.5);
    let proJs = progressBar(".pro_js", 0.5);
    let proGit = progressBar(".pro_git", 0.5);
}