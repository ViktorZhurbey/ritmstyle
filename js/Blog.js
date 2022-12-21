let images = ["https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg", "https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg" ];
let date = ["22.05.2022", "23.05.2022"];
let nameGarden =["New format seans", "format seans" ];
let text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Eget massa vitae tempus at pretium lacus viverra. Vitae libero vivamus quis enim quam vitae dictumst nulla duis. Sed nisl nibh et morbi tristique suspendisse morbi. Consequat facilisi tortor consectetur magnis odio. Risus, aenean tortor cras consectetur lacus, ut erat ac et. Fermentum aliquam ac egestas eget risus a. Maecenas sed pellentesque bibendum vitae at praesent sed. Amet pretium arcu gravida arcu ut dui sem quis id. Tristique in leo donec proin odio eget. Neque ut in egestas lacus sit nunc, nec. Proin mattis augue sit leo sagittis nam id accumsan. Pulvinar nunc fermentum vulputate ultrices pulvinar sed ultrices quis.",];
let blogElem = document.querySelector(".blog_elem");

for(let i = 0; i<nameGarden.length; i++){
    blogElem.insertAdjacentHTML("afterend", blog(images[i], date[i], nameGarden[i], text[i]));
}

function blog (images, date, nameGarden, text) {
    return ` <div class="blog_items">
                <div class="blog_items_img">
                    <img src= `+ images +` alt="img">
                </div>
                <div class="blog_items_text">
                    <span>`+ date +`</span>
                    <h4>`+ nameGarden +`</h4>
                    <p>`+ text +`</p>
                    <input type = "button" value="Читати статю">
                </div>
            </div>    `
};