//This array will contains the concepts with its definition and/or meaning.
//Each entry will by added using an object (blueprint).
let describeThis = new Array();

//Object's blueprint for every concept to describe.
function ConceptInfo(concept, definition) {
  this.concept = concept;
  this.definition = definition;
}

//Concept (entry) creation.
describeThis[0] = new ConceptInfo("RIA", "Rich Internet applications.");
describeThis[1] = new ConceptInfo("GUI", "Window-based graphical user interface.");
describeThis[2] = new ConceptInfo("Microsft .NET Framework", "The plataform behind C#.");
describeThis[3] = new ConceptInfo("C#", "A modern programing language for development of software applications.");
describeThis[4] = new ConceptInfo("Common Language Runtime (CLR)", "CLR is the basic and Virtual Machine component of the .NET Framework. It is the run-time enviornment in the .NET Framework that runs the codes and helps in making the development process easier by providing the various services. It's a bundle of standard libraries providing basic functionality, compilers, debuggers and other development tools. Makes the code \"universal\" to the machine that is being working on (translator).");
describeThis[5] = new ConceptInfo("Integrated Development Environment (IDE)", "An integrated development environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools, and a debugger.");
describeThis[6] = new ConceptInfo("Application Programming Interface (API)", "Software intermediary that allows two applications to talk to each other");
describeThis[7] = new ConceptInfo("Language Integrated Query (LINQ)", "_______________________");
describeThis[8] = new ConceptInfo("Query", "_____________________");
describeThis[9] = new ConceptInfo("Program", "Writing sequences of instructions in oreder to organize the work of the computer to perform something.");
describeThis[10] = new ConceptInfo("Agorithm", "A sequences of steps to achieve, complete some work or obtain some results.");
describeThis[11] = new ConceptInfo("Quality Assurance Engineers (QAs)", "Person or group of persons that are in charge of the testing (trials) process during the product testing stage.");
describeThis[12] = new ConceptInfo("Solution", "A workspace (container) for all the <a class='link_text' href='5_terminology.html#Project'>projects</a>, build information, settings, and any miscellaneous file. It allows the combination of multiple <a class='link_text' href='5_terminology.html#Project'>projects</a>, and makes possible to share some code within them.");
describeThis[13] = new ConceptInfo("Project", "Groups all files designed to implement a software application or system in a logical manner. It contains all files compiled into a executable file (.exe), library, or website. Projects are created under a <a class='link_text' href='5_terminology.html#Solution'>solution</a>.");
describeThis[14] = new ConceptInfo("Class", "Code that contains properties and methods.");
describeThis[15] = new ConceptInfo("Namespace", "The instance of the code within the {}. The keyword namespace is used to name the instance.");
describeThis[16] = new ConceptInfo("Console Application", "Program that uses the console as default input and output.");
describeThis[17] = new ConceptInfo("Compiling Process", "Process that checks for syntax errors, missing libraries, and turns the .cs into a .exe.");
describeThis[18] = new ConceptInfo("Null", "_______________________________");


//Alphabetic order.
for(i = 0; i < describeThis.length-1; i++) {
  let toTest = describeThis[i].concept;//Selects a word.
  let storeT;

  for(j = i+1; j < describeThis.length; j++) {
    let challenger = describeThis[j].concept;//Selects a second word.

    if(toTest > challenger) {//The first word comes after the second one.
    storeT = describeThis[i];//Holds the first word.

    describeThis[i] = describeThis[j];//Rewrite the first word's entry with the the second entry.
    describeThis[j] = storeT;//Puts the first entry on the spot that was for the second.

    i--;//Now, it tests the reorder.
    break;//Out of the second loop to test the reorder.
    }
  }
}

//Sending (Appending) the concepts to the page.
let theConcepts = document.getElementById("topic-concept");

for(i = 0; i < describeThis.length; i++) {
  let entry = document.createElement("li");//Creates a list elment.

  entry.innerHTML =
  '<h3 id="' + describeThis[i].concept + '" class="concept">' + describeThis[i].concept + '</h3>' +
  '<p class="definition">' + describeThis[i].definition + '</p><br>';

  theConcepts.appendChild(entry);//Sends the info to the page.
}

//Creates the alphabet ribbons; each letter/symbol is an <a> that point a specific part of the terminology list.
let alphabetRibbon = document.getElementById("alphabet");//Getting the <div> to insert the ribbon.

let theRibbon = ["*", "#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
                "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]//The symbols and alphabet.

for(i = 0; i < theRibbon.length; i++) {
  let positionSymbol = document.createElement("a");//Creates one <a> per symbol/letter on theRibbon array.
  positionSymbol.setAttribute("class", "link_text");//It is a link.

  //Function the sets up the href for each symbol/letter on the ribbon.
  //I need it the scope of this loop beacuse positionSymbol variable is type let and was define in it.
  //The function needs to be defined before can be called. That's why the order below.
  let lookPostSymbol = (letter) => {
    //The variable letter is the symbol/letter of the instance i's, and it is going to be compare with the first letter of the each concept.
    //Just the first instance will mark the position, and just the first concept that begins with letter, <a>, will gets the href.
      for(j = 0; j < describeThis.length; j++) {
        //Iterates through the concepts array.
        if(letter === describeThis[j].concept[0]) {
          //letter and first letter of the concept matched.
          let thePosition = "5_terminology.html#" + describeThis[j].concept;//Creates the href's address.
          positionSymbol.setAttribute("href", thePosition);//Gives the hraf to the first concept that starts with letter.
          break;//Out, next: let symbol = document.createTextNode(theRibbon[i]);
        }
      }
  }
  lookPostSymbol(theRibbon[i]);//Invokes the function with the symbol/letter as the parameter.

  let symbol = document.createTextNode(theRibbon[i]);//Turns the theRibbon[i] into text.
  positionSymbol.appendChild(symbol);//Adds the symbol/letter as text to the created <a>.
  alphabetRibbon.appendChild(positionSymbol);//Sends the created <a> to 5_terminology.html.
}
