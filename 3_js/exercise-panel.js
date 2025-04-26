//Only theory.html. When exercise button is clicked.
let getContainer = document.getElementById("container");
let getExerciseBtn = document.getElementsByClassName("exercise-btn");//Array of all exercise button.
let getPaper = document.getElementById("paper");
let getBottomPaper = document.getElementById("bottom-paper");

let multiPanels = false; //If the two panel are shown.
let exerciseOnly = false;//If just the exercise panel is shown.
let clickedOnExerOnly = false;//If exerciseOnly was not clicked, getPaper.style.display acts as initial, when is mobileMode it hides.
let activeBtn = new Array();//To determine what exercise button is available to clicking in it.
  for(i = 0; i < getExerciseBtn.length; i++) activeBtn[i] = true;//Initially, all exercise buttons are available for click on them.

//Setting up the container by the width of the window (mobileMode or not).
//mobileMode value comes from main.js.
//mobileMode = (getWindowWidth > 1025) ? false : true;
//multiPanels is initialize to false; exercisePanel() modify its value.
let twoPanels = (chckActive) => {
  //Check first is the button is active.
  if(activeBtn[chckActive]) {
    //Setting up the container's width value by mobileMode.
    let widthSetting = (!mobileMode) ? "1040px" : "100%";
    if(!multiPanels) getContainer.style.cssText = "width: 100%;";//Either mobileMode value; only affects Desktop because its width is set up to be 1000px.
    else getContainer.style.width = widthSetting;//Taking out the exercise panel. Depends on mobileMode: on->width: 100%, and off->width: 1000px;
  }
}

//Creating and setting up the exercise's panel.
let exercisePanel = (chptNum, exerNum, chckActive) => {
  //Check first is the button is active.
  if(activeBtn[chckActive]) {
    let newPanel = document.createElement("div"); //Exercise paper. Same as #paper.
    newPanel.setAttribute("id", "exercisePanel");

    if(!multiPanels) {
      //Adding to the exercise panel the close button.
      //Three element for the exercisePanel: close button, exercise and its menu.
      let closeExercise = document.createElement("div");//Close button.
      closeExercise.setAttribute("id", "close-btn");//Styled in style.css
      closeExercise.setAttribute("onclick", "closingExercise()");//Function that takes all the closing options from twoPanels(), exercisePanel(), and availableSpace().
      newPanel.appendChild(closeExercise);//Adding the close button.

      //Adding to the exercise panel the exercise.
      let theExercise = document.createElement("div");//Exercise container.
      let theProblem = document.createTextNode(exerciseThis[chptNum][exerNum].problem);//The problem to solve.
      let theSolution = document.createElement("ol");//The solution container. Every new line in the solution code is an <li> (this methods adds new lines).
        theSolution.setAttribute("class", "solution-code");//To style the solution code in style.css.

      theExercise.appendChild(theProblem);//Problem text.
      theSolution.innerHTML = exerciseThis[chptNum][exerNum].solution;//Grabbing solution code.
      theExercise.appendChild(theSolution);//The solution code.
      theExercise.style.cssText = "margin: 12px; color: white; font-family: consolas;"//Styling the exercise container.
      newPanel.appendChild(theExercise);//Adding the exercise container.

      //Adding to the exercise panel the menu.
      let mnExercise = document.createElement("div");//Menu at the bottom of the exercise panel.
      mnExercise.setAttribute("id", "mn-exercise");//It's used for the style.css.
      mnExercise.style.cssText = "width: 100%; max-width: 615px; height: 40px;" +
      "position: absolute; top: 91.6%; display: flex;";
      mnExercise.innerHTML = "<div id=\"btn-theory\" onclick=\"theoryVsExercise()\">Theory</div>" +
      "<div><a href=\"../4_exercise.html\">Exercises</a></div>";//Buttons of the menu.
      newPanel.appendChild(mnExercise);

      getPaper.insertAdjacentElement("afterend", newPanel);//Appended after #paper (between paper and botom-page).

      multiPanels = true;//Two panel are in front.
      clickedOnExerOnly = false;//Reset to the inital value.
      activePanel(!mobileMode);
    } else {
      activePanel(!mobileMode);
      multiPanels = false;//One panel only.
      getContainer.removeChild(document.getElementById("exercisePanel"));//Removes the exercise panel. Needs to be last because activePanel depends on this element.
    }
  }
}

//Making space for the exercise's panel. It checks is mobileMode, then ? #paper is shown : #paper is hidden. [By click]
let availableSpace = (chckActive) => {
  //Check first is the button is active.
  if(activeBtn[chckActive]) {
    //If mobileMode and multiPanels, there is no space for both panels. Exercise panel has priority, and is presented.
    //IMPORTANT: When to program comes to this function, multiPanels value has been by exercisePanel(). This is why it's tested if is true, this is not an activation function for it.
    if(mobileMode && multiPanels) getPaper.style.display = "none";
    else getPaper.style.display = "block";
  }
}

let closingExercise = () => {
  //twoPanels()
  let widthSetting = (!mobileMode) ? "1040px" : "100%";
  getContainer.style.width = widthSetting;
  //exercisePanel()
  activePanel(!mobileMode);
  multiPanels = false;//One panel only.
  getContainer.removeChild(document.getElementById("exercisePanel"));
  //availableSpace()
  getPaper.style.display = "block";
  //exerActive()
  for(i = 0; i < document.getElementsByClassName("topic-btn").length; i++) {
    //Painting all exercise buttons teal and making them clickable.
    document.getElementsByClassName("topic-btn")[i].style.backgroundColor = "teal";//Color teal.
    document.getElementsByClassName("topic-btn")[i].setAttribute("onclick", "exerActive(" + i + ")");//Clickable
    getExerciseBtn[i].style.cursor = "pointer";//Clickable.
    activeBtn[i] = true;//Clickable.
  }

}

//It's call when resize. Cheks if mobileMode and multiPanels (compression) ? shows only exercie : shows both.
let justExPanel = () => {
  //What panel(s) is/are being shown.
  if(getWindowWidth < 1025 && multiPanels) getPaper.style.display = (exerciseOnly) ? "none" : (!clickedOnExerOnly) ? "none" : "block";//Hides paper. Prioritize exercise; it's shown.
  else if(!exerciseOnly) getPaper.style.display = "block";//Shows paper; windows is in Desktop.
  //The container width also needs to be modify depending on the window size.
  if(getWindowWidth < 1025 && (!multiPanels || exerciseOnly)) getContainer.style.width = "100%";
  else if(getWindowWidth >= 1025 && (!multiPanels || exerciseOnly)) getContainer.style.width = "1040px";//First condition is similar to !mobileMode.

  activePanel(getPaper.style.display === "block")//multiPanels means that exercisePanel is active.
}

//Function is used when is desire to show only the exercise, then for going back to present Theory +.
let theoryVsExercise = () => {
  if(!exerciseOnly && getPaper.style.display !== "none") getPaper.style.display = "none";//If we are turning from two-panels being shown into onlyExercise, and if theory is shown.
  else getPaper.style.display = "block";

  exerciseOnly = (getPaper.style.display === "none") ? true : false;
  activePanel(getPaper.style.display === "block")//multiPanels means that exercisePanel is active.
  getContainer.style.cssText = (getWindowWidth >= 1025 && exerciseOnly) ? "width: 1040px;" : "width: 100%;";
  clickedOnExerOnly = true;
}

//Shows what it is active (exercise, and/or theory).
let activePanel = (theoryActive) => {
  if(multiPanels) {
    //The button depends on the exercisePanel that was created; that's why multiPanels. Otherwise, these do not exist.
    document.getElementById("btn-theory").style.backgroundColor = (theoryActive) ? "orange" : "lightslategray";//Activation on/off of theory.
  }
}

//Tints the exercise button that was clicked (exercise that is shown).
//On the html doc, for the onclick event, the parameter pass in is based on the order that the elements topic-btn appear (starting with 0).
let exerActive = (topicBtnIndex) => {
  let clickedBtn = document.getElementsByClassName("topic-btn");
  clickedBtn[topicBtnIndex].style.backgroundColor = (multiPanels) ? "orange" : "teal";

  for(i = 0; i < clickedBtn.length; i++) {
    //When a button is pressed and its exercise is shown, the others buttons can't interact with.
    //So to prevent their action, onclick is removed. Added again once the exercise closed  (be careful with the parameter value).
    if(i != topicBtnIndex) {
      if(multiPanels) {
        clickedBtn[i].removeAttribute("onclick");
        getExerciseBtn[i].style.cursor = "not-allowed";
      }
      else {
        clickedBtn[i].setAttribute("onclick", "exerActive(" + i + ")");//The order is important; the index is the order that the buttons appear on the page; the parameter for the function is based on this order.
        getExerciseBtn[i].style.cursor = "pointer";
      }
      activeBtn[i] = !activeBtn[i];//Turning off/on the buttons.
    }
  }
}

for(i=0; i < getExerciseBtn.length; i++) {
  //Setting the events for all the exercise's buttons.
  let theBtn = getExerciseBtn[i];//Needs to be defined first because its attributes name and value are parameters for exercisePanel().
  let sendActive = i;//Send the position of the button (order by html doc).
  //The activation array shares the same order. The position value is used to check if a button is active or not.
  //The three functions (here) check first activation.
  theBtn.addEventListener("click", () => {twoPanels(sendActive);}, );//First because depends on multiPanels being false, and multiPanels is true after execerisePanel.
  theBtn.addEventListener("click", () => {exercisePanel(theBtn.name, theBtn.value, sendActive);}, );//This method allows to pass parameters' values in the addEventListener. Third method is propagation; default (omitted) is false.
                                                                                                    //The parameters come from the attribute's values of the element; name is the chapter number and value the exercise number.
  theBtn.addEventListener("click", () => {availableSpace(sendActive);}, );
}
window.addEventListener("resize", justExPanel);


//Second click on exercise->bye; same with theory.
