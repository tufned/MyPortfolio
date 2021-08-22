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






const homePage = document.querySelector('.home')
homePage.style.height = window.innerHeight + 'px';







// language
const langButton = document.querySelector('.language-change');
const firstLang = document.querySelector('.first-language');

langButton.addEventListener('click', () => {
    if (firstLang.innerHTML === 'EN') localStorage.setItem('lang', 'ua');
    else if (firstLang.innerHTML === 'UA') localStorage.setItem('lang', 'en');
    location.reload();
});

const exactLang = localStorage.getItem('lang');
if (exactLang == 'ua') languageChange('ua');
else if (exactLang == 'en') languageChange('en');


function languageChange(language) {
    for (let key in languageArr) {
        document.querySelector(`.${key}`).innerHTML = languageArr[key][language];

        if (key == 't-i-2') {
            document.querySelector('.text-info').style.width = '100%';
            document.querySelector('.t-i-1').style.textAlign = 'center';
        }
    }
}






// cursor
const cursor = document.querySelector('.cursor');
const hoverElems = document.querySelectorAll('a');

document.addEventListener('mousemove', (e) => {
    cursor.style.opacity = '1';
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
    hoverElems.forEach(elem => {
        elem.addEventListener('mouseenter', cursorAdd);
        elem.addEventListener('mouseleave', cursorRemove);
    });
    langButton.addEventListener('mouseenter', cursorAdd);
    langButton.addEventListener('mouseleave', cursorRemove);
    
});

function cursorAdd() {
    cursor.classList.add('cursor-hover');
}
function cursorRemove() {
    cursor.classList.remove('cursor-hover');
}



document.addEventListener('touchstart', () => {cursor.style.display = 'none'});
document.addEventListener('touchmove', () => {cursor.style.display = 'none'});
document.addEventListener('touchend', () => {cursor.style.display = 'none'});








window.addEventListener('scroll', () => {
    const homePage = document.querySelector('.home').offsetHeight; 
    const halfHeight = +(homePage / 2);
    const scrollY = window.pageYOffset;
    const pageHeight = document.documentElement.scrollHeight;

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
        
        
    // cursor change
    const aboutMePageHeight = document.querySelector('.about-me-page').offsetHeight; 
    const photoBlockHeight = document.querySelector('.photo-block').offsetHeight; 
    const fourPagesHeight = homePage + aboutMePageHeight + photoBlockHeight;
    const projectsPage = document.querySelector('.projects-page'); 

    if (scrollY < halfHeight) {
        cursor.classList.remove('cursor-dark');
    } 
    else if (scrollY > halfHeight && scrollY < fourPagesHeight) {
        cursor.classList.add('cursor-dark');
    } 
    else if (scrollY > fourPagesHeight && scrollY + window.innerHeight < pageHeight / 1.2) {
        projectsPage.addEventListener('mouseenter', () => {
            cursor.classList.remove('cursor-dark');
        });
        projectsPage.addEventListener('mouseleave', () => {
            cursor.classList.add('cursor-dark');
        });
    } 
    else if (scrollY + window.innerHeight > pageHeight / 1.2 && scrollY < pageHeight - finalPage.offsetHeight) {            
        cursor.classList.add('cursor-dark');
    } 
    else if (scrollY > pageHeight - finalPage.offsetHeight) {
            cursor.classList.remove('cursor-dark');
    } 



    // first page focus change
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
            if (h1.getAttribute('data') == 'suitable') h1.style.color = '#ED4A4D';
        });
    } else {
        bg.classList.remove('white-bg');
        greetings.forEach(text => {text.classList.remove('greetings-dark')});
        homeButton.classList.remove('home-button_dark');
        allAboutMe_text.forEach(text => {
            if (text.getAttribute('data') != 'exception') text.style.color = '#b9b9b9';
        });
        h1All.forEach(h1 => {
            if (h1.getAttribute('data') == 'suitable') h1.style.color = '#b9b9b9';
        });
    }
    


    // chart
    const chart = document.querySelector('.chart');
    const chartTitle = document.querySelector('.chart-title');
    const chart_rowAll = document.querySelectorAll('.chart-row');
    const chart_pAll = document.querySelectorAll('.chart p');

    if (window.innerWidth < 1000) {
        if (scrollY > halfHeight) {
            chartToggle(chart.classList.add('chart_active'), '#DD9238', '#966326');
        } else {
            chartToggle(chart.classList.remove('chart_active'), '#b9b9b9', '#b9b9b9');
        }
    } else {
        if (scrollY > halfHeight && scrollY < window.innerHeight * 1.83) {
            chartToggle(chart.classList.add('chart_active'), '#DD9238', '#966326');
        } else {
            chartToggle(chart.classList.remove('chart_active'), '#b9b9b9', '#b9b9b9');
        }
    }

    function chartToggle(classToggle, titleAndRowColor, textColor) {
        classToggle;
        chartTitle.style.color = titleAndRowColor;
        chart_rowAll.forEach(elem => {elem.style.background = titleAndRowColor});
        chart_pAll.forEach(text => {text.style.color = textColor});
    }
        


    
    // up button
    const up = document.querySelector('.up');
    if (scrollY > halfHeight && scrollY < pageHeight - finalPage.offsetHeight) up.classList.add('up_active'); 
    else up.classList.remove('up_active');




    // scroll and header prompt
    const scroll = document.querySelector('.scroll-shell');
    const header = document.querySelector('.header');
    if (scrollY > 70) {
        scroll.classList.remove('scroll-shell_active');
        header.classList.add('header_up');
    } else {
        scroll.classList.add('scroll-shell_active');
        header.classList.remove('header_up');
    }



    // photo block movement
    if (scrollY > halfHeight && scrollY < fourPagesHeight) {
        const blockWithPhotos = document.querySelector('.photo-block-main');
        const option = scrollY / 2;
        blockWithPhotos.style.transform = `translateX(-${option}px)`;
    }




    // final page func
    const ball = document.querySelector('.ball');
    const ballText = document.querySelector('.ball-text');
    const contactPage = document.querySelector('.contact-page');
    const contactInfo = document.querySelector('.contact-info');
    const contactBorder = document.querySelector('.contact-border');
    const contactLinks = document.querySelector('.contact-links');
    const contactArrow = document.querySelector('.contact-arrow');
    const contactLines = document.querySelectorAll('.arrow-line');


    if (scrollY > pageHeight - finalPage.offsetHeight) {
        bgFinall.style.transform = 'translateY(0)';
        ballText.style.color = '#5BA2D6';
        ball.classList.add('for-ball');
        contactLinks.classList.add('for-contact-links');
        
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
                contactArrow.classList.add('for-contact-arrow');
                contactLines.forEach(line => {
                    line.classList.remove('straight-line');
                });
            }, 200);
        });
        
    } else {
        ballText.classList.remove('ball-text_active');
        ball.classList.add('ball-hover');
        ball.classList.remove('ball_active');
        contactLinks.classList.remove('for-contact-links');
        
        contactPage.classList.remove('contact-page_active');
        contactInfo.classList.remove('contact-info_active');
        contactBorder.classList.remove('contact-border_active');
        
        bgFinall.style.transform = `translateY(100%)`;
        ballText.style.color = '#E2E1DF';
        ball.classList.remove('for-ball');
        contactArrow.classList.remove('for-contact-arrow');
        contactLines.forEach(line => {
            line.classList.add('straight-line');
        });
    }            
});




// contact links
const linkedInLink = document.querySelector('.linkedin-link');
const gitLink = document.querySelector('.git-link');
const linkedInIcon = document.querySelector('.linkedin-link img');
const gitIcon = document.querySelector('.git-link img');

linkedInLink.addEventListener('mouseenter', () => {
    linkedInIcon.src = 'icons/linkedIn-white.png'
});
linkedInLink.addEventListener('mouseleave', () => {
    linkedInIcon.src = 'icons/linkedIn-black.png'
});
gitLink.addEventListener('mouseenter', () => {
    gitIcon.src = 'icons/GitHub-Mark-Light-120px-plus.png'
});
gitLink.addEventListener('mouseleave', () => {
    gitIcon.src = 'icons/GitHub-Mark-120px-plus.png'
});




// final page inputs
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