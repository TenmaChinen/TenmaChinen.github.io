
const elementId = document.currentScript.getAttribute("elementId");
element = document.getElementById(elementId);
element.innerHTML = 
`
<div style="width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center">
  <img src="../images/wip_gy.svg" width=250px alt="WIP">
  <h1 style="color:#ACACAC; margin-top:10px">Working In Progress...</h1>
</div>
`;
