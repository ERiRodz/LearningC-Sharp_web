//#plano
let getPlano = document.getElementById("plano");

//Function to modify #plano's display property.
//It's called on "onload" (html attribute) and on "resize" (event listener).
let justPlano = () => {
  //The body's width needs to taken each time the function is called (on "resize").
  getWindowWidth = document.getElementsByTagName("BODY")[0].offsetWidth;
  //Setting the #plano's display property.
  if(getWindowWidth > 1525) getPlano.style.display = "flex";
  else getPlano.style.display = "block";
}
//#plano

//This event will modify the #plano's display property based on the window width.
window.addEventListener("resize", justPlano);


//formatCode()
let formatCode = () => {
  //Since the code is written in a textarea element, it needs to be taken as the textarea value.
  let getInCode = document.getElementById("inCode").value;
  //Element that gets the final result, which is the formatted code (readyVsCode).
  let getOutCode = document.getElementById("outCode");
  //Element that will carried all the formatted code. It gets appended to getOutCode, and its childs are each line code (li elements).
  //An id is adde tho the element to make selection of its text posible for the copy button.
  let readyVsCode = document.createElement("ol");
    readyVsCode.setAttribute("id", "rdyVsCode");
  //String that holds an entire code line.
  let lineCode = "";
  //The functon a(#) determines the level of indentantion by the value of its parameter. This variable is the value of the parameter.
  let indentLvl = 0;
  //To align the zEnd of each line, to greatest indentation level needs to be caluclate.
  //Variable: grtIndentLvl will carried the greates indentation level.
  //          calcIndentLvl will hold the current indentation level, and if it's greater that grtIndentLvl, this variable value will be the new grtIndentLvl.
  //          grtIndentTkn is a boolean that will tells if the grater indentatino level was already calculated. During the first run of the for-loop getInCode.length.
  let grtIndentLvl = 0;
  let calcIndentLvl = 0;
  let grtIndentTkn = false;

  //Function that 1) inserts each code line (string lineCode) into a li element (readyVsLine), and 2) appends the line (li) to readyVsCode.
  //The chrIndex parameter is the index of the character. Used to determine the end of the line.
  let prepareLine = (line, chrIndex, long) => {
    //Creation of the line for the code.
    let readyVsLine = document.createElement("li");
      //Styling the line of code.
      //The property of letter-spacing makes equal space taking by all character; making posible align z.
      readyVsLine.style.cssText = "color: #008080; margin: 0px 15px; list-style: none; letter-spacing: 3px;"

    //Indentation Option 2 of 2: After each '}' the snippet of the code ends. The value of indentation is reduced by one unit.
    //Order matters.
    //Because of the Vs code syntax, '}while ...' could be a line. Using the index [0] assures that for any '}' or '}while...' the indentation level gets subtracted by one unit.
    if(line[0] === "}") indentLvl--;

    //The variable holds the indentations for a line based on the indentation level.
    let indentCode = "";
    //If there is a need to indent the line (indentation level is grater than 0).
    if(indentLvl !== 0) {
      //Copies the indentation level to use that value in a loop of creation indentation characters (\u00A0).
      let tagsOfIndent = indentLvl;
      //This is the loop that fills the variable with the corresponding indentation characters.
      while(tagsOfIndent > 0) {
        indentCode += "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";
        tagsOfIndent--;
      }
    }

    //To align the '+ z +' and '+ z' at the end of each line.
    //zEndAlign: Taking the difference between the longest line (long) and the line of code that is being working on.
    //           Also, the difference between the greates indentation level and the current indentation level time six (due indenCode).
    //           That difference is the number of added spaces after the end of the line and the '+ z +' and '+ z'.+
    //           Option 1: When a line of code is present.
    //           Option 2: When a line of code is absent.
    //In order for this align method to work, a monospace font needs to be used.
    let zEndAlign = (line !== "") ? (long - line.length) + ((grtIndentLvl - indentLvl) * 6) : long + (grtIndentLvl * 6);
    let zPush = "";
    //With this loop the spaces are added.
    while(zEndAlign >= 0) {
      zPush += "\u00A0";
      zEndAlign--;
    }

    //Determines the string z at the end of the line with its spaces.
    let zEnd = zPush;
      zEnd += (chrIndex === (getInCode.length - 1)) ? "+ z" : "+ z +";
    //The code line is sorrounded by the single quotes only if the line is not empty. Function a(#) and string z are added.
    //In the option line === "" five more spaces are added. These are: +, ', ', and two spaces before and after the +. These operators are absent when the line is empty.
    let lineVs = document.createTextNode((line === "") ? "a(0)\u00A0\u00A0\u00A0\u00A0\u00A0" + zEnd : "a(" + indentLvl + ") + " + indentCode + "'" + line + "'" + zEnd);

    //Appending
    readyVsLine.appendChild(lineVs);
    readyVsCode.appendChild(readyVsLine);

    //Indentation Option 1 of 2: After each '{' a new scope begins meaning that the next snippet of the code is indented. The value of indentation is raised by one unit.
    //Order matters.
    if(line === "{") indentLvl++;

    //lineCode gets reseted for the next line.
    lineCode = "";
  }

  //Variable that holds the lenght of the longest line of code.
  let longestLine = 0;
  //Boolean that tells if the length of the longest line of code is still being calculated.
  let calcMax = true;
  //Boolean that tells when to start the second run through the getInCode.lenght for-loop after the longest line of code being calculated.
  let resetIndex = false;

  //This function makes the for-loop runs twice.
  //A function that first calculates the longest line of code, and then calls prepareLine(,,).
  let maxPrepareLine = (theLine, theIndex) => {
    //Option 1: Calculate longest line of code. Enters only if calcMax is true and the line of code is longest than the previous longest lenght.
    //Option 2: Call prepareLine(,,).
    if(calcMax && (theLine.length > longestLine)) longestLine = theLine.length;
    else if (!calcMax) prepareLine(theLine, theIndex, longestLine);

    //lineCode gets reseted for the next line. Only when calcMax is true because it gets reseted in prepareLine(,,), and by the time this function is being called calcMax is false.
    if(calcMax) lineCode = "";

    //If the longest line has been calculated (first run through the hole getInCode string)
    //Order matters!
    if(theIndex === (getInCode.length - 1) && calcMax) {
      //Done with the calculation of the longest line of code.
      calcMax = false;
      //The index i in the for-loop needs to be restarted; then, and since calcMax is false, this function will call prepareLine(,,).
      resetIndex = true;
    }
  }

  //A for-loop that will iterates through the entire textarea value/characters.
  //Option 1: In the syntax of the code, after a \n the next line is indented. This provokes a whitespace at the beginning of the next line. The continue command omits it.
  //Option 2: If the character getInCode[i] is the escape character "\" or "'", then is added an extra one "\" in front of it.
  //          This makes the the code readable for js, and on the html is presented as a single "\".
  //Option 3: No end of the line and no last character; lineCode gets the character.
  //Option 4: Index is the last one; add the last character to the lineCode and calls maxPrepareLine(,). Also, resetIndex is true. This means that the longest line was calculated, and that the for-loop
  //          will runs a second time. This time, to send the lines of code to prepareLine(,,). The index i is setted to -1 because at the end of the loop it will be incremented by 1.
  //          The resetIndex is marked false to prevent a third run of the for-loop. The grtIndentTkn is true now, ending the calculation of the grtIndentLvl.
  //Option 5: Line ended and the loop has not reached the last character, setting a new line.
  for(let i = 0; i < getInCode.length; i++) {
    if(lineCode === "" && getInCode[i] === " ") continue;
    else if(getInCode[i] === "\\" || getInCode[i] === "\'") lineCode += ("\\" + getInCode[i]);
    else if((getInCode[i] !== "\n") && (i < (getInCode.length - 1))) lineCode += getInCode[i];
    else if(i === (getInCode.length - 1)) {
      maxPrepareLine(lineCode += getInCode[i], i);
      if(resetIndex) {
        i = -1;
        resetIndex = false;
        grtIndentTkn = true;
      }
    }
    else maxPrepareLine(lineCode, i);

    //Calculating the current indentation level.
    //Option 1: By the instance of '{' the current indentation level is incremented by 1.
    //Option 2: By the instance of '}' the current indentation level is subtracted by 1.
    if(!grtIndentTkn) {
      if(getInCode[i] === "{") calcIndentLvl++;
      else if(getInCode[i] === "}") calcIndentLvl--;
      //If the current indentation level is greater than the previous grtIndentLvl value, the grtIndentLvl is now the current indentation level.
      if(calcIndentLvl > grtIndentLvl) grtIndentLvl = calcIndentLvl;
    }
  }

  //Erasing all from the element that presents the formatted code.
  getOutCode.innerHTML = "";
  //Appending the fullscreen button calling fullScrnBttn() to gets its return, which is the button.
  getOutCode.appendChild(fullScrnBttn());
  //Presenting the formatted code.
  getOutCode.appendChild(readyVsCode);
  //Saving the formatted code for the full screen changes.
  holdsRdyVsCode = readyVsCode;
}
//formatCode()

//Fullscreen
//Saves the formatted code to put it back after a full screen change.
let holdsRdyVsCode = null;
//Fullscreen button: parameter is the element where the fullscreen button will be inserted.
let fullScrnBttn = () => {
  //Creation of the img element for the full screen action.
  //Attribute src: image path.
  //          onclick: To Call the function for full screen.
  //retrun the button as the value of the function
  let fullScrn = document.createElement("IMG");
    fullScrn.setAttribute("src", "4_img/full_screen_toggle.png");
    fullScrn.setAttribute("onclick", "fullScrnCode()");
  return fullScrn;
}

//Fullscreen action
//It tells the status of the fullscreen. Initially false (non fullscreen).
let full = false;
//Saves the input code of the textarea.
let holdsTextarea = null;
//Based on the value of full, the function toggles fullscreen: on (false) or off (true).
let fullScrnCode = () => {
  //Option 1: full is false, fullscreen gets on. Then full is true.
  //Option 2: full is true, fullscreen gets off. Then full is false.
  if(!full) {
    //Input code is saved.
    holdsTextarea = document.getElementById("inCode").value;

    getPlano.innerHTML = '' +
    '<div id="output-text" class="text smooth" style="background: green;">' +
      '<div id="outCode" class="code" style="background: rgba(40, 42, 54, 0.99);"></div>' +
    '</div>';

    full = true;

    //fullscreen #plano and #output-text style.
    //Since #plano is being resitting by the .innerHTML, all its css properties need to be added again.
    //To use as a reminder of this effect, I'll use .style.cssText instead of .style.padding (even though is just one property that is being modify).
    getPlano.style.cssText = "" +
      "padding: 0.1% 0px;" +
      "display: block;";
    //#output-text
    let getOutputText = document.getElementById("output-text");
      getOutputText.style.padding = "2px 0px";
      getOutputText.style.width = "90%";
      getOutputText.style.height = "99.2vh";
    //#outCode
    let getOutCode = document.getElementById("outCode");
      getOutCode.style.margin = "0.8vh auto";
      getOutCode.style.width = "92%";
      getOutCode.style.height = "98%";

    //Appending the fullscreen button by calling fullScrnBttn() to gets its return, which is the button.
    getOutCode.appendChild(fullScrnBttn());
      //This function determines the left property value of the full screen button base on the window's width.
      let leftPlaceFullScrn = () => {
        getOutCode.childNodes[0].style.left = (document.getElementsByTagName("BODY")[0].offsetWidth > 1110) ? "97%" : "93%";
      }
      //Styling the full screen button: pushing it down to 95% from the top. (top property)
      //                                calling the function that determines the left property value.
      //                                using resize to call leftPlaceFullScrn(), this matains the left value based on the window's width
      getOutCode.childNodes[0].style.top = "95%";
      leftPlaceFullScrn();
      window.addEventListener("resize", leftPlaceFullScrn);
    //Appending the formatted code.
    getOutCode.appendChild(holdsRdyVsCode);
  }
  else {
    getPlano.innerHTML = '' +
    '<div id="input-text" class="text smooth" style="background: blue;">' +
    '<textarea id="inCode" class="code"></textarea>' +
    '</div>' +
    '<div id="command">' +
    '<button class="bttCmmnd" type="button" onclick="formatCode()">VS Ready</button>' +
    '<button class="bttCmmnd" type="button" onclick="copyVsCode()">Copy it</button>' +
    '</div>' +
    '<div id="output-text" class="text smooth" style="background: green;">' +
    '<div id="outCode" class="code" style="background: rgba(40, 42, 54, 0.99);"></div>' +
    '</div>';

    //Saved input code is added back to the textarea.
    document.getElementById("inCode").innerHTML = holdsTextarea;

    full = false;

    //Non fullscreen #plano and #output-text style.
    //Since #plano is being resitting by the .innerHTML, all its css properties need to be added again.
    //To use as a reminder of this effect, I'll use .style.cssText instead of .style.padding (even though is just one property that is being modify).
    getPlano.style.cssText = "" +
      "padding: calc(100vh - 850px) 0px;" +
      "width: 100%;";
      justPlano();

    //Appending the fullscreen button calling fullScrnBttn() to gets its return, which is the button.
    document.getElementById("outCode").appendChild(fullScrnBttn());
    //Appending the formatted code.
    document.getElementById("outCode").appendChild(holdsRdyVsCode);
  }
}
//Fullscreen

//Copy button. **************************IN PROCESS**************************************************
//Copy the VS ready code.
let copyVsCode = () => {
  let x = document.getElementById("outCode").childNodes;
  alert(x[1].text);
}
//Copy button
