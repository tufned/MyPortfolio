// const name = document.querySelector('.home-title');

// function ColorChange() {
//     function Random(a, b) {
//         let number = a + Math.random() * (b + 1 - a);
//         return Math.floor(number);
//     }

//     return `rgb(${Random(0, 255)}, ${Random(0, 255)}, ${Random(0, 255)})`
// }

// name.onclick = () => {
//     name.style.color = ColorChange();
// } 



// function smoothScrollToPage() {
//     const a = document.querySelectorAll('a');
//     let a_pure = [];
//     let href_name = [];

//     for (let item of a) {
//         const href = item.getAttribute('href');
//         if (href.substring(0,1) == '#') {
//             a_pure.push(item);
//             href_name.push(href);
//         }
//     }

//     for (let item of a_pure) {
//         item.addEventListener('click', (e) => {
//             e.preventDefault();
//             for (let elem of href_name) {
//                 if (item.getAttribute('href') == elem) {
//                     document.querySelector(elem).scrollIntoView({
//                         block: "start", 
//                         behavior: "smooth"
//                     });
//                 }
//             }
//         });
//     }
// } 
// smoothScrollToPage();


function smoothScrollToPage() {
    const links = document.querySelectorAll('a[href*="#"]');

    for (let oneLink of links) {
        const link_href = oneLink.getAttribute('href');

        oneLink.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link_href).scrollIntoView({
                block: "start", 
                behavior: "smooth"
            });
        });
    }
} 
smoothScrollToPage();


