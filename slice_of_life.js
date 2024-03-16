function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('TXT')
      .addItem('UPPERCASE', 'UPPERCASE_WORDS')    
      .addItem('lowercase', 'lowercase_WORDS')
      .addItem('Title Case', 'Title_Case_WORDS')
      .addSeparator()
      .addSubMenu(ui.createMenu('settings')
          .addItem('about', 'ABOUT')
          .addItem('updates', 'UPDATES'))
      .addToUi();
}

function UPPERCASE_WORDS(/*str*/) {
  //const words = str.split(' ');
  //for(let i=0;i<words.length;i++){
    //words[i]=words[i].charAt(0).toUpperCase()
  //}
  //return words?.join(' ');
}

function lowercase_WORDS() {
  DocumentApp.getUi() // Or DocumentApp, SlidesApp or FormApp.
     .alert('You clicked the second menu item!');
}

function Title_Case_WORDS(/*str*/) {
  //const words = str.toLowerCase().split(' ');
  //words.forEach((ele,ind) =>{
    //words[ind] = ele = ele.charAt(0).toUpperCase()+ele.slice(1);
  //})
  //return words.join(' ');

}



//sub-menu setting
function ABOUT() {
  DocumentApp.getUi() // Or DocumentApp, SlidesApp or FormApp.
     .alert('v0.01 this is only for upper lower and title case');
}
function UPDATES() {
  DocumentApp.getUi() // Or DocumentApp, SlidesApp or FormApp.
     .alert('Updates are WIP check the github when i set it up');
}
//.UPPERCASE