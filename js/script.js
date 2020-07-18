// Menu
const burger = document.querySelector('.burger-open');
const menu = document.querySelector('.mobile-menu');

burger.addEventListener('click', function () {
    menu.classList.toggle('open');
});

// Tabs-1

const btns = document.querySelectorAll('.tabs__link');
const about = document.querySelector('.tabs');
const articles = document.querySelectorAll('.tabs__img-content');

about.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articles.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});

// Tabs-2

const btnsLink = document.querySelectorAll('.falcon__tabs-link');
const aboutTabs = document.querySelector('.falcon__tabs');
const articlesTab = document.querySelectorAll('.falcon__tab');

aboutTabs.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
        btnsLink.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articlesTab.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});


//Tabs-3

const btnsStar = document.querySelectorAll('.starship__link');
const aboutStar = document.querySelector('.starship-tabs');
const articlesStar = document.querySelectorAll('.starship-rocket');

aboutStar.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
        btnsStar.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });

        articlesStar.forEach(function (article) {
            article.classList.remove('active');
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});