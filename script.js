const images = [

"Photo/2.png",
"Photo/3.png",
"Photo/4.png",
"Photo/5.png",
"Photo/6.png",
"Photo/7.png",
"Photo/8.png",
"Photo/9.png",
"Photo/10.png",
"Photo/11.png",
"Photo/12.png",
"Photo/13.png",
"Photo/14.png",
"Photo/15.png",
"Photo/16.png",
"Photo/17.png",
"Photo/18.png",
"Photo/19.png",
"Photo/20.png",
"Photo/21.png",
"Photo/22.png",
"Photo/23.png",
"Photo/24.png",
"Photo/25.png",
"Photo/26.png",
"Photo/27.png",
"Photo/28.png",
"Photo/29.png",
"Photo/30.png",
"Photo/31.png",
"Photo/32.png",
"Photo/33.png",
"Photo/34.png",
"Photo/35.png",
"Photo/36.png",
"Photo/37.png",
"Photo/38.png",
"Photo/39.png",
"Photo/40.png",
"Photo/41.png",
"Photo/42.png",
"Photo/43.png",
"Photo/44.png"
];

let index = 0;

const slider = document.getElementById("sliderImage");
const counter = document.getElementById("counter");

setInterval(()=>{

    slider.classList.add("slide-out");

    setTimeout(()=>{

        index = (index + 1) % images.length;

        slider.src = images[index];
        counter.innerHTML = `${index+1} / ${images.length}`;

        slider.classList.remove("slide-out");
        slider.classList.add("slide-in");

        setTimeout(()=>{
            slider.classList.remove("slide-in");
        },300);

    },500);

},2000);

function openModal(img,title,location,description,fblink){

    document.getElementById("imageModal").style.display="flex";

    document.getElementById("modalImg").src=img;

    document.getElementById("modalTitle").innerHTML=title;

    document.getElementById("modalLocation").innerHTML=location;

    document.getElementById("modalDescription").innerHTML=description;

    document.getElementById("modalFblink").href=fblink;

}

function closeModal(){

    document.getElementById("imageModal").style.display="none";

}

// Click outside to close

window.onclick=function(e){

    let modal=document.getElementById("imageModal");

    if(e.target==modal){

        modal.style.display="none";

    }

}