function createCard(work) {
  const imgPath = work.img || 'works/assets/images/sample.png';
  const icons = work.groups.reduce((acc, group) => {
    return acc + `<span class="group group-${group.toLowerCase()}">${group}</span>`
  }, '');
  const links = work.links;
  const bigLink = links[work.bigLink] || "";
  const bigLinkAction = isUrl(bigLink) ? `href="${bigLink}" target="_blank"` : `onclick="showSnackbar('${bigLink}')"`;
  return `
    <div class="work-card">
      <div class="work-card-head">
        <p>${work.title}</p>
      </div>
      <a ${bigLinkAction} class="work-card-body" style="background-image:url(${imgPath})">
        <p>${work.desc}</p>
      </a>
      <div class="work-card-foot">
        <div class="group-box">${icons}</div>
        <div class="links-box">
          <a ${getLinkAction(links.web)} class="icon icon-website ${isUrl(links.web) ? '' : 'disabled'}"><span>Website</span></a>
          <a ${getLinkAction(links.git)} class="icon icon-github ${isUrl(links.git) ? '' : 'disabled'}"><span>Github</span></a>
          <a ${getLinkAction(links.doc)} class="icon icon-doc ${isUrl(links.doc) ? '' : 'disabled'}"><span>Document</span></a>
        </div>
      </div>
    </a>
  `;
}


function getLinkAction(link) {
  return isUrl(link) ? `href="${link}" target="_blank"` : `onclick="showSnackbar('${link}')"`;
}

function isUrl(link) {
  return link.startsWith("http");
}

