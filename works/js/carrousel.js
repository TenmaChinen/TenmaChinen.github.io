let currentPage = 1;
let recordsPerPage = 6;

let works;

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
    const option = -1
    works = [];
    if (option == -1) {
        workGroups.forEach(worksGroup => {
            worksGroup.worksId.forEach(workId => {
                works.push({ groupId: worksGroup.id, workId: workId });
            });
        });
    } else {
        const groupId = workGroups[option].id;
        workGroups[option].worksId.forEach(workId => {
            works.push({ groupId: groupId, workId: workId });
        });
    }

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    for (let i = (page - 1) * recordsPerPage; i < (page * recordsPerPage) && i < works.length; i++) {
        // carrousel.innerHTML += `<div>${objJson[i].adName}</div>`;
        const work = works[i];
        const workInfo = worksGroupsData[work.groupId][work.workId];
        carrousel.innerHTML += createCard(workInfo, work.groupId);
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