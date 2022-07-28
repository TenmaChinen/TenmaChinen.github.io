const navOptionsPop = document.getElementById("nav-options-pop");

navOptionsPop.style.setProperty("visibility","hidden");

function toggleOptions(){
  const state = navOptionsPop.style.getPropertyValue("visibility");
  setOptionsVisibility(state=="hidden");
  navOptionsPop.focus();
}

function closeOptions(){
  // setOptionsVisibility(false);
}

function setOptionsVisibility(state){
  navOptionsPop.style.setProperty("visibility", state ? "visible" : "hidden" );
}


// $("#sidebar").hover(
//   function mouseEnter(){
//     $(".title").show("slide");
//   },
//   function mouseLeave(){
//     $(".list-box").slideUp("slow");
//     $(".title").hide("slide");
//   }
//   );
  
//   $(".row").hover(
//     function mouseEnter(){
//       $(this).find(".list-box").slideDown("fast");
//     },
//     function mouseLeave(){
//       $(this).find(".list-box").slideUp("fast");
//     }  
//   );

