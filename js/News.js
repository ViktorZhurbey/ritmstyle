let now = ["21.05.2022", "20.05.2022", "19.05.2022", "20.05.2022", "19.05.2022", "20.05.2022"];
let title = ["news", "news 1", "news 2","news 3", "news 4", "news 1111"];
let force = ["../index.html", "../index.html", "1111", "222", "333", "444"];

let newsFeet = document.querySelector('.news-feet');

for (let i = 0; i < title.length; i++) {
    newsFeet.insertAdjacentHTML('afterbegin', newsItems(title[i], now[i], force[i]));
}

function newsItems(title ,now ,force){
    return `<div class="news-items">
                <a href = `+ force +`>
                <span >`+ now +`</span>
                <h4>`+ title +`</h4>
                </a>
            </div>`
 }