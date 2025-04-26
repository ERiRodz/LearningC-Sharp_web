//After menu-panel.
let getMenuBtn = document.getElementsByClassName("mn-btn"); //Each block in the menu.
let getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth;//Get body width; its width is sets to 100%.

let mobileMode = (getWindowWidth > 1025) ? false : true;//Initial state of mobileMode; it goes by the body width.
let menuDown = (getWindowWidth > 1025) ? true : false;//Inital state of the menu; it goes by the body width..

//The function hides/shows the menu dinamically; depends on the body width; it's call on the event onresize.
let autoMenu = () => {
  getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth;//Check body width. It does it every instance.
  //Desktop mode.
  if(getWindowWidth > 1025) {
    for(let i = 0; i < getMenuBtn.length; i++) {
      getMenuBtn[i].style.cssText = "height:60px; margin:3px 0;"//Shows the menu by setting the height of the buttons.
    }
    menuDown = true;//The menu is visible and static.
    mobileMode = false;//Desktop mode.
  } else if(getWindowWidth < 1025 && menuDown) {//When the body width shrinks and menu is visible. Hides the menu dinamically.
    for(let i = 0; i < getMenuBtn.length; i++) {
      getMenuBtn[i].style.cssText = "height:0px; margin:0;"//Hides the menu by setting the height of all its buttons to 0px.
    }
    menuDown = false;//The menu is hidden.
    mobileMode = true;//Mobile mode.
  }
}

//When mobileMode, ham-menu is shown and menu is hidden by default; click the ham-menu to make menu visible on mobileMode.
let dropMenu = () => {
  if(!menuDown) {//If menu is hidden.
    for(let i = 0; i < getMenuBtn.length; i++) {
      getMenuBtn[i].style.cssText = "height:60px; margin:3px 0;"//Shows the menu by setting the height of the buttons.
    }
    menuDown = true;//Menu is visible.
  } else {//If menu is shown.
    for(let i = 0; i < getMenuBtn.length; i++) {
      getMenuBtn[i].style.cssText = "height:0px; margin:0;"//Hides the menu by setting the height of all its buttons to 0px.
    }
    menuDown = false;//Menu is hidden.
  }
}

//Aligning the author box ny window width.
let alignAuthor = () => {
  getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth;
  //!!!!!!!!!!!Try equation!!!!!!!!!!!!!!
  if (getWindowWidth < 600) document.getElementById("author").style.marginLeft = "3%";//[Initial] It gets overwrite.
  else if (getWindowWidth >= 600 && getWindowWidth < 625) document.getElementById("author").style.marginLeft = "5%";
  else if (getWindowWidth >= 625 && getWindowWidth < 650) document.getElementById("author").style.marginLeft = "6%";
  else if (getWindowWidth >= 650 && getWindowWidth < 680) document.getElementById("author").style.marginLeft = "8%";
  else if (getWindowWidth >= 680 && getWindowWidth < 720) document.getElementById("author").style.marginLeft = "10%";
  else if (getWindowWidth >= 720 && getWindowWidth < 750) document.getElementById("author").style.marginLeft = "12%";
  else if (getWindowWidth >= 750 && getWindowWidth < 790) document.getElementById("author").style.marginLeft = "14%";
  else if (getWindowWidth >= 790 && getWindowWidth < 860) document.getElementById("author").style.marginLeft = "17%";
  else if (getWindowWidth >= 860 && getWindowWidth < 1025) document.getElementById("author").style.marginLeft = "20%";
  else if (getWindowWidth >= 1025) document.getElementById("author").style.marginLeft = "auto";//[Initial] It gets overwrite.
}

//!!!!!!!!!!Not worling.
//I need to differentiate between the paper's scrollbar and window. My idea is onmouseover the paper turn it red.
let paperScrollBar = () => {
  document.getElementById("paper").style.cssText = "scrollbar-face-color: red yellow;";
}

document.getElementById("ham-menu").onclick = dropMenu;//Clicking the ham-menu.[Only on mobileMode]
document.getElementById("paper").onmouseover = paperScrollBar;
window.addEventListener("resize", alignAuthor);
