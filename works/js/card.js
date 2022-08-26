function createCard(work) {
  // <a class="work-card-wrapper" href=${''}# target="_blank"></a>
  const imgPath = work.img || 'works/assets/images/sample.png';
  const icons = work.groups.reduce( (acc,group) =>{
    return acc + `<span class="group group-${group.toLowerCase()}">${group}</span>`
  },'');
  console.log(icons);
  return `
    <div class="work-card">
      <div class="work-card-head">
        <p>${work.title}</p>
      </div>
      <a class="work-card-body" style="background-image:url(${imgPath})">
        <p>${work.desc}</p>
      </a>
      <div class="work-card-foot">
        <div class="group-box">${icons}</div>
        <div class="links-box">
         <a href="${work.links.git}" target="_blank"><div class="icon icon-github"></div></a>
          <a href="${work.links.web}" target="_blank"><div class="icon icon-website"></div></a>
        </div>
      </div>
    </a>
  `;
}