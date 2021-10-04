////MOVEMENT ANIMATION//////

const card = document.querySelector(".card");
const container = document.querySelector(".container");


////// ANIMATE ITEMS //////

const title = document.querySelector(".title");
const watch = document.querySelector(".watch img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const models = document.querySelector(".models");



//// MOVING ANIMATION/////

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = "rotateY(${xAxis}deg) rotateX(${yAxis}deg)";
})


///// ANIMATION OUT ///////

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //popback
    title.style.transform = "translateZ(0px)";
    watch.style.transform = "translateZ(0) rotateZ(0)";
    description.style.transform = "translateZ(0)";
    models.style.transform = "translateZ(0)";
    purchase.style.transform = "translateZ(0)";

});


///// ANIMATION IN //////

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(150px)";
    watch.style.transform = "translateZ(250px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    models.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";

})