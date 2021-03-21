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
} 
smoothScrollToPage();



function changeOnScroll() {
    const bg = document.querySelector('.bg');
    const h1All = document.querySelectorAll('h1');
    
    const greetings = document.querySelectorAll('.greetings p, .greetings h1');
    const homeButton = document.querySelector('.home-button');
    
    const allAboutMe_text = document.querySelectorAll('.about-me-page p, .about-me-page li, .about-me-page span');
    const chart = document.querySelector('.chart');
    const chartTitle = document.querySelector('.chart-title');
    const chart_rowAll = document.querySelectorAll('.chart-row');
    const chart_pAll = document.querySelectorAll('.chart p');
    
    window.addEventListener('scroll', (e) => {
        const halfHeight = +(window.innerHeight / 2);
        const scrollY = window.pageYOffset;
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
        
        if (scrollY > halfHeight && scrollY < window.innerHeight * 1.83) {
            chart.classList.add('chart_active');
            chartTitle.style.color = '#DD9238';
            chart_rowAll.forEach(elem => {elem.style.background = '#DD9238'});
            chart_pAll.forEach(text => {text.style.color = '#966326'});
        } else {
            chart.classList.remove('chart_active');
            chartTitle.style.color = '#b9b9b9';
            chart_rowAll.forEach(elem => {elem.style.background = '#b9b9b9'});
            chart_pAll.forEach(text => {text.style.color = '#b9b9b9'});
        }
    });
}
changeOnScroll();





function finalPage() {
    const ball = document.querySelector('.ball');
    const ballText = document.querySelector('.ball-text');

    const contactPage = document.querySelector('.contact-page');
    const contactInfo = document.querySelector('.contact-info');
    const contactBorder = document.querySelector('.contact-border');

    const entrances = document.querySelectorAll('.entrance');
    const iUpText = document.querySelectorAll('.input-name');

    ball.addEventListener('click', (e) => {
    //     ball.addEventListener('scroll', e => {
    //         e.preventDefault();
    //     });
        ballText.classList.add('ball-text_active');
        ball.classList.remove('ball');
        ball.classList.add('ball_active');
        
        contactPage.classList.add('contact-page_active');
        contactInfo.classList.add('contact-info_active');
        contactBorder.classList.add('contact-border_active');
    });
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
}
finalPage();