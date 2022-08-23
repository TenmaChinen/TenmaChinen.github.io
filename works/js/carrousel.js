let currentPage = 1;
let recordsPerPage = 6;

let works;
let selectedGroupId = -1;
let lastSelectedElement = document.querySelector('.btn-all-groups');
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
        Object.keys(worksGroups).forEach(groupId => {
            const worksGroup = worksGroups[groupId];
            worksGroup.worksId.forEach(workId => {
                works.push({ groupId: groupId, workId: workId, groupName:worksGroup.name });
            });
        });
    } else {
        const worksGroup = worksGroups[selectedGroupId];
        worksGroup.worksId.forEach(workId => {
            works.push({ groupId: selectedGroupId, workId: workId, groupName:worksGroup.name });
        });
    }

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage) && i < works.length; i++) {
        // carrousel.innerHTML += `<div>${objJson[i].adName}</div>`;
        const work = works[i];
        const workInfo = worksGroupsData[work.groupId][work.workId];
        const groupInfo = { id : work.groupId, name : work.groupName}
        carrousel.innerHTML += createCard(workInfo, groupInfo);
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

const mqCarrouselMin900 = window.matchMedia("(min-width: 900px)");
const mqCarrousel600900 = window.matchMedia("(min-width: 600px) and (max-width: 900px)");
const mqCarrouselMax600 = window.matchMedia("(max-width: 600px)");

mqCarrouselMin900.onchange = mqCarrouselCallbackMin900;
mqCarrousel600900.onchange = mqCarrouselCallback600900;
mqCarrouselMax600.onchange = mqCarrouselCallbackMax600;

mqCarrouselCallbackMin900(mqCarrouselMin900);
mqCarrouselCallback600900(mqCarrousel600900);
mqCarrouselCallbackMax600(mqCarrouselMax600);

function mqCarrouselCallbackMin900(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 6;
    currentPage = 1
    changePage(1);
}

function mqCarrouselCallback600900(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 4;
    currentPage = 1
    changePage(1);
}

function mqCarrouselCallbackMax600(eventMQ) {
    if (eventMQ.matches) recordsPerPage = 2;
    currentPage = 1
    changePage(1);
}