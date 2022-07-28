const gallery = document.getElementById("gallery");
const sidebar = document.getElementById("sidebar");

projectList.forEach(project => {
  sidebar.innerHTML += createSidebarRowHTML(project);
});

function createProjCardDiv(project){

  const cardDiv = document.createElement("div");
  cardDiv.className = "proj-card";
  cardDiv.innerHTML = 
  `
  <div class="frame">
    <img src="../images/img_ph.png" alt="Project Screenshot">
    <h3 class="proj-title">${project.title}</h3>
    <p class="proj-desc">${project.desc}</p>
  </div>
  <div class="proj-footer">
    <span>${project.date.start} - ${project.date.end}</span>
    <div class="links-box">
      <a href="${project.links.git}"><div class="icon icon-github"></div></a>
      <a href="${project.links.web}"><div class="icon icon-website"></div></a>
    </div>
  </div>
  `;
  return cardDiv ;
}


/* 
<img src="../images/img_sample.png" alt="Project Screenshot">
  <div class="data-box">
    <h3 class="proj-title">${project.title}</h3>
    <p class="proj-desc">${project.desc}</p>
    <div class="proj-footer">
      <span>${project.date.start} - ${project.date.end}</span>
      <div class="links-box">
        <a href="${project.links.git}"><div class="icon icon-github"></div></a>
        <a href="${project.links.web}"><div class="icon icon-website"></div></a>
      </div>
    </div>
  </div>
*/




function createSidebarRowHTML(project){

  const titles = project.titles.reduce((html,title) => {
     return html + `<div>${title}</div>`;
   },"");

   return`
    <div class="icon-box">
      <div class="icon icon-${project.icon}" onclick="loadProjects('${project.group}')"></div>
      <h3 class="title">${project.group}</h3>
    </div>
   `
   
}

loadProjects("Python")

function loadProjects(projectGroup){
  gallery.innerHTML = "";
  Object.keys(projectGallery[projectGroup]).forEach(projectId =>{
    let projCardDiv = createProjCardDiv(projectGallery[projectGroup][projectId]);
    gallery.appendChild(projCardDiv);
  });
}

// loadProjects("Python");

//  return `
//   <div class="row">
//      <div class="title-box">
//        <div class="icon icon-${project.icon}"></div>
//        <h1 class="title">${project.group}</h1>
//      </div>
//      <div class="list-box">
//        ${titles}
//      </div>
//    </div>
//  `;
