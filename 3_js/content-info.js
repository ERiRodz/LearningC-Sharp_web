//This array will contains the chapters.
//Each entry will by added using an object (blueprint).
let chapterThis = new Array();

//Object's blueprint for every concept to describe.
function ChaptersInfo(chapter, chapterName) {
  this.chapter = chapter;
  this.chapterName = chapterName;
}

//Concept (entry) creation.
//The order matter here because it's used for the href link of the .chapter_name (<a>).
chapterThis[0] = new ChaptersInfo("Chapter 1", "Introduction to Programming");
chapterThis[1] = new ChaptersInfo("Chapter 2", "Primitive Types and Variables");
chapterThis[2] = new ChaptersInfo("Chapter 3", "Operators and Expressions");
chapterThis[3] = new ChaptersInfo("Chapter 4", "Console Input and Output");
chapterThis[4] = new ChaptersInfo("Chapter 5", "Conditional Statements");
chapterThis[5] = new ChaptersInfo("Chapter 6", "Loops");
chapterThis[6] = new ChaptersInfo("Chapter 7", "Arrays");
chapterThis[7] = new ChaptersInfo("Chapter 8", "Numeral Systems");
chapterThis[8] = new ChaptersInfo("Chapter 9", "Methods");
chapterThis[9] = new ChaptersInfo("Chapter 10", "Recursion");
chapterThis[10] = new ChaptersInfo("Chapter 11", "Creating and Using Objects");
chapterThis[11] = new ChaptersInfo("Chapter 12", "Exception Handling");
chapterThis[12] = new ChaptersInfo("Chapter 13", "Strings and Text Processing");
chapterThis[13] = new ChaptersInfo("Chapter 14", "Defining Classes");
chapterThis[14] = new ChaptersInfo("Chapter 15", "Text Files");
chapterThis[15] = new ChaptersInfo("Chapter 16", "Linear Data Structures");

//Sending (Appending) the chapters to the page.
let theChapters = document.getElementById("topic-content");

for(i = 0; i < chapterThis.length; i++) {
  let entry = document.createElement("li");//Creates a list elment.
  entry.setAttribute("class", "chapter");

  //Each entry format is: Chapter #: Title Name.
  //The title name is a link that carries the href of the its chapter webpage.
  entry.innerHTML =
  '<h3 class="chapter_number">' + chapterThis[i].chapter + ':&nbsp</h3>' +//&nbsp means non-breaking space
  '<a href="chapters/chp' + String(i+1) + '.html"><p id="' + chapterThis[i].chapter + '" class="chapter_name link_text">' + chapterThis[i].chapterName + '</p></a>';

  theChapters.appendChild(entry);//Sends the info to the page.
}
