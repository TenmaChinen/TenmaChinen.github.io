let currentPage = 1;
let recordsPerPage = 6;

let works;
let selectedGroupId = -1;
let lastSelectedElement = document.querySelector('.icon-all-groups');
lastSelectedElement.classList.toggle("group-selected");
// const objJson = [];

// [...Array(20).keys()].forEach(idx => {
//     objJson.push({ adName: `AdName${String(idx).padStart(2, 0)}` })
// });

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage < numPages()) {
        currentPage++;
        changePage(currentPage);
    }
}

function changePage(page) {
    const carrousel = document.getElementById("carrousel");
    const btnNext = document.getElementById("btn-next");
    const btnPrev = document.getElementById("btn-prev");
    const pageSpan = document.getElementById("page");

    carrousel.innerHTML = "";
    works = [];
    if (selectedGroupId == -1) {
        worksInfo.forEach(workInfo => {
            // TODO : Sort by dates
            works.push(workInfo);
        });
    } else {
        works = worksInfo.filter( workInfo => workInfo.groups.includes(selectedGroupId));
    }

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage) && i < works.length; i++) {
        // carrousel.innerHTML += `<div>${objJson[i].adName}</div>`;
        const work = works[i];
        carrousel.innerHTML += createCard(work);
    }
    pageSpan.innerHTML = `Page : ${page}/${numPages()}`;

    if (page == 1) {
        // btnPrev.style.visibility = "hidden";
        btnPrev.disabled = "disabled";
    } else {
        // btnPrev.style.visibility = "visible";
        btnPrev.removeAttribute("disabled");
    }
    
    if (page == numPages()) {
        btnNext.disabled = "disabled";
        // btnNext.style.visibility = "hidden";
    } else {
        btnNext.removeAttribute("disabled");
        // btnNext.style.visibility = "visible";
    }
}

function numPages() {
    return Math.ceil(works.length / recordsPerPage);
}

window.onload = function () {
    changePage(1);
};


function onClickGroup(event,groupId){
    if (event.target != lastSelectedElement){
        lastSelectedElement.classList.toggle("group-selected");
        event.target.classList.toggle("group-selected");
        lastSelectedElement = event.target;
    }
    currentPage = 1;
    selectedGroupId = groupId;
    changePage(1);
}



/* MEDIA QUERY */
const SIZE_LG = 1050;
const SIZE_MD = 700;
const SIZE_SM = 550;
const mqCarrouselMediaQueryLG = window.matchMedia(`(min-width: ${SIZE_LG}px)`);
const mqCarrouselMediaQueryMD = window.matchMedia(`(min-width: ${SIZE_MD}px) and (max-width: ${SIZE_LG}px)`);
const mqCarrouselMediaQuerySM = window.matchMedia(`(min-width: ${SIZE_SM}px) and (max-width: ${SIZE_MD}px)`);
const mqCarrouselMediaQueryBS = window.matchMedia(`(max-width: ${SIZE_SM}px)`);

mqCarrouselMediaQueryLG.onchange = mqCarrouselCallbackLG;
mqCarrouselMediaQueryMD.onchange = mqCarrouselCallbackMD;
mqCarrouselMediaQuerySM.onchange = mqCarrouselCallbackSM;
mqCarrouselMediaQueryBS.onchange = mqCarrouselCallbackBS;

mqCarrouselCallbackLG(mqCarrouselMediaQueryLG);
mqCarrouselCallbackMD(mqCarrouselMediaQueryMD);
mqCarrouselCallbackSM(mqCarrouselMediaQuerySM);
mqCarrouselCallbackBS(mqCarrouselMediaQueryBS);

function mqCarrouselCallbackLG(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 6;
    currentPage = 1
    changePage(1);
}

function mqCarrouselCallbackMD(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 4;
    currentPage = 1
    changePage(1);
}

function mqCarrouselCallbackSM(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 2;
    currentPage = 1
    changePage(1);
}

function mqCarrouselCallbackBS(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 1;
    currentPage = 1
    changePage(1);
}