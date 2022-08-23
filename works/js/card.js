function createCard(workInfo, groupInfo) {
  // <a class="work-card-wrapper" href=${''}# target="_blank"></a>
  const imgPath = workInfo.img || 'works/assets/images/sample.png';
  return `
    <div class="work-card" style="background-image:url(${imgPath})">
      <div class="work-card-head">
        <p>${workInfo.title}</p>
      </div>
      <a class="work-card-body">
        <p>${workInfo.desc}</p>
      </a>
      <div class="work-card-foot">
        <span class="group group-${groupInfo.id}">${groupInfo.name}</span>
        <div class="links-box">
        <a href="${workInfo.links.git}" target="_blank"><div class="icon icon-github"></div></a>
        <a href="${workInfo.links.web}" target="_blank"><div class="icon icon-website"></div></a>
        </div>
      </div>
    </a>
  `;
}