function smoothScrollToPage() {
    const links = document.querySelectorAll('a[href*="#"]');

    for (let oneLink of links) {
        const link_href = oneLink.getAttribute('href');
        oneLink.addEventListener('click', e => {
            e.preventDefault();
            if (link_href == '#final-page') {
                document.querySelector(link_href).scrollIntoView({
                    block: "end", 
                    behavior: "smooth"
                });
            } else {
                document.querySelector(link_href).scrollIntoView({
                    block: "start", 
                    behavior: "smooth"
                });
            }
        });
    }
} smoothScrollToPage();




const cursor = document.querySelector('.cursor');
function mouse(e) {
    const hoverElems = document.querySelectorAll('a');

    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.top = `${e.clientY}px`
        cursor.style.left = `${e.clientX}px`
        hoverElems.forEach(elem => {
            elem.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-hover');
            });
            elem.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-hover');
            });
        });
    });
} mouse();





function touchActions() {
    document.addEventListener('touchstart', () => {
        cursor.style.display = 'none';
        
    });
    if (cursor.style.display = 'none') {
        document.addEventListener('click', () => {
            cursor.style.display = 'none';
        });
    }

} touchActions();






function changeOnScroll() {
    window.addEventListener('scroll', (e) => {
        const pageHeight = document.documentElement.scrollHeight;
        const halfHeight = +(window.innerHeight / 2);
        const scrollY = window.pageYOffset;

        const finalPage = document.querySelector('.final-page');
        const bgFinall = document.querySelector('.final-bg');
        if (window.innerWidth < 1000 && window.innerWidth > 480) {
            finalPage.style.height = '140vh';
            bgFinall.style.height = '140vh';
        } else if (window.innerWidth < 480) {
            finalPage.style.height = '150vh';
            bgFinall.style.height = '150vh';
        } else { 
            finalPage.style.height = '120vh';
            bgFinall.style.height = '120vh';
        }
        
        
        function cursorChange() {
            const homePage = document.querySelector('.home').offsetHeight; 
            const aboutMePage = document.querySelector('.about-me-page').offsetHeight; 
            const photoBlock = document.querySelector('.photo-block').offsetHeight; 
            const fourPagesHeight = homePage + aboutMePage + photoBlock;
            const projectsPage = document.querySelector('.projects-page'); 

            if (scrollY < halfHeight) {
                cursor.classList.remove('cursor-dark');
            } 
            else if (scrollY > halfHeight && scrollY < fourPagesHeight) {
                cursor.classList.add('cursor-dark');
            } 
            else if (scrollY > fourPagesHeight && scrollY + scrollY + window.innerHeight < pageHeight / 1.1) {
                projectsPage.addEventListener('mouseenter', () => {
                    cursor.classList.remove('cursor-dark');
                });
                projectsPage.addEventListener('mouseleave', () => {
                    cursor.classList.add('cursor-dark');
                });
            } 
            else if (scrollY + window.innerHeight > pageHeight / 1.1 && scrollY < pageHeight - finalPage.offsetHeight) {            
                cursor.classList.add('cursor-dark');
            } 
            else if (scrollY > pageHeight - finalPage.offsetHeight) {
                    cursor.classList.remove('cursor-dark');
            } 
        } cursorChange()


        
        function firstPage_focusChange() {
            const bg = document.querySelector('.bg');
            const h1All = document.querySelectorAll('h1');
            const greetings = document.querySelectorAll('.greetings p, .greetings h1');
            const homeButton = document.querySelector('.home-button');
            const allAboutMe_text = document.querySelectorAll('.about-me-page p, .about-me-page li, .about-me-page span');
    
            if (scrollY > halfHeight) {
                bg.classList.add('white-bg');
                greetings.forEach(text => {text.classList.add('greetings-dark')});
                homeButton.classList.add('home-button_dark');
                allAboutMe_text.forEach(text => {
                    if (text.getAttribute('data') != 'exception') {
                        text.style.color = '#151514';
                        text.style.transition = 'all 0.6s ease';
                    }
                });
                h1All.forEach(h1 => {
                    if (h1.getAttribute('data') == 'suitable') {
                        h1.style.color = '#ED4A4D';
                    }
                });
            } else {
                bg.classList.remove('white-bg');
                greetings.forEach(text => {text.classList.remove('greetings-dark')});
                homeButton.classList.remove('home-button_dark');
                allAboutMe_text.forEach(text => {
                    if (text.getAttribute('data') != 'exception') {
                        text.style.color = '#b9b9b9';
                    }
                });
                h1All.forEach(h1 => {
                    if (h1.getAttribute('data') == 'suitable') {
                        h1.style.color = '#b9b9b9';
                    }
                });
            }
        } firstPage_focusChange();
        


        function chart() {
            const chart = document.querySelector('.chart');
            const chartTitle = document.querySelector('.chart-title');
            const chart_rowAll = document.querySelectorAll('.chart-row');
            const chart_pAll = document.querySelectorAll('.chart p');

            function chartToggle(classToggle, titleAndRowColor, textColor) {
                classToggle;
                chartTitle.style.color = titleAndRowColor;
                chart_rowAll.forEach(elem => {elem.style.background = titleAndRowColor});
                chart_pAll.forEach(text => {text.style.color = textColor});
            }

            if (window.innerWidth < 1000) {
                if (scrollY > halfHeight) chartToggle(chart.classList.add('chart_active'), '#DD9238', '#966326');
                else chartToggle(chart.classList.remove('chart_active'), '#b9b9b9', '#b9b9b9');
            } else {
                if (scrollY > halfHeight && scrollY < window.innerHeight * 1.83) chartToggle(chart.classList.add('chart_active'), '#DD9238', '#966326');
                else chartToggle(chart.classList.remove('chart_active'), '#b9b9b9', '#b9b9b9');
            }
        } chart();
        


        function upButton() {
            const up = document.querySelector('.up');

            if (scrollY > halfHeight && scrollY < pageHeight - finalPage.offsetHeight) {
                up.classList.add('up_active');
            } else {
                up.classList.remove('up_active');
            }
        } upButton();



        function scrollPrompt() {
            const scroll = document.querySelector('.scroll-shell');

            if (scrollY > 40) scroll.classList.remove('scroll-shell_active');
            else scroll.classList.add('scroll-shell_active');
        } scrollPrompt();



        function photoBlockMove() {
            const photoBlock = document.querySelector('.photo-block-main');
            let option = scrollY / 1.5;

            photoBlock.style.transform = `translateX(-${option}px)`;
        } photoBlockMove();



        function finalPageFunc() {
            const ball = document.querySelector('.ball');
            const ballText = document.querySelector('.ball-text');
            const contactPage = document.querySelector('.contact-page');
            const contactInfo = document.querySelector('.contact-info');
            const contactBorder = document.querySelector('.contact-border');


            if (scrollY > pageHeight - finalPage.offsetHeight) {
                bgFinall.style.transform = 'translateY(0)';
                ballText.style.color = '#5C9BC1';
                ball.classList.add('for-ball');
                
                ball.addEventListener('click', () => {
                    finalPage.scrollIntoView({
                        block: "end", 
                        behavior: "smooth"
                    });
                    setTimeout(() => {
                        ballText.classList.add('ball-text_active');
                        ball.classList.remove('ball-hover');
                        ball.classList.add('ball_active');
                        
                        contactPage.classList.add('contact-page_active');
                        contactInfo.classList.add('contact-info_active');
                        contactBorder.classList.add('contact-border_active');
                    }, 200);
                });
                
            } else {
                ballText.classList.remove('ball-text_active');
                ball.classList.add('ball-hover');
                ball.classList.remove('ball_active');
                
                contactPage.classList.remove('contact-page_active');
                contactInfo.classList.remove('contact-info_active');
                contactBorder.classList.remove('contact-border_active');
                
                bgFinall.style.transform = `translateY(100%)`;
                ballText.style.color = '#E2E1DF';
                ball.classList.remove('for-ball');
            }
            } finalPageFunc();
            
            
        });
} changeOnScroll();





function finalPageInputs() {
    const entrances = document.querySelectorAll('.entrance');
    const iUpText = document.querySelectorAll('.input-name');

    for (let i = 0; i < entrances.length; i++) {
        entrances[i].onchange = () => {
            if (entrances[i].value != '') {
                entrances[i].classList.remove('entrance_active');
                entrances[i].classList.add('entrance_active');
                iUpText[i].classList.add('input-uptext_active');
                
            } else {
                entrances[i].classList.remove('entrance_active');
                iUpText[i].classList.remove('input-uptext_active');
            }
        }
    }
} finalPageInputs();