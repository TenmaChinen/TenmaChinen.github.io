function createCard(work) {
  const imgPath = work.img || 'works/assets/images/sample.png';
  const icons = work.groups.reduce((acc, group) => {
    return acc + `<span class="group group-${group.toLowerCase()}">${group}</span>`
  }, '');
  const links = work.links;

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
         <a ${links.git ? 'href=' : ''}"${links.git}" target="_blank"><div class="icon icon-github ${links.git?'':'disabled'}"></div></a>
         <a ${links.web ? 'href=' : ''}"${links.web}" target="_blank"><div class="icon icon-website ${links.web?'':'disabled'}"></div></a>
        </div>
      </div>
    </a>
  `;
}