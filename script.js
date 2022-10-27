
const showMore = document.querySelector(".show-more");
const descriptionDetail = document.querySelector(".description-detail");
console.log(showMore);
showMore.addEventListener('click', function() {
    descriptionDetail.classList.toggle("show")
});

//const showMore = document.querySelector(".show-more"); variable déjà déclarée au-dessus
const genesisDetail = document.querySelector(".genesis-detail");
console.log(showMore);
showMore.addEventListener('click', function() {
    genesisDetail.classList.toggle("show")
});