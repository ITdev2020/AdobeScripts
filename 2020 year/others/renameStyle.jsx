//var myDoc = app.activeDocument;
//var pstName="Brand_001_Imprint";
//var pStyle=app.activeDocument.paragraphStyles.itemByName("pStyle1");
//myDoc.allParagraphStyles[0] = "22";
//colors.item("Red");


var allParaStyles = app.activeDocument.allParagraphStyles;
var allCharStyles = app.activeDocument.allCharacterStyles;

var after = "_004-007";

for (var i = 2; i < allParaStyles.length; i++) {
//    alert (i+" iName")
  var curStyle = allParaStyles[i];
  var curName = curStyle.name;
  if (curName.indexOf(after) == -1) {
    var newName = curName + after;
    curStyle.name = newName;
  }
}

for (var i = 1; i < allCharStyles.length; i++) {
//    alert (i+" iName")
  var curCStyle = allCharStyles[i];
  var curCName = curCStyle.name;
  if (curCName.indexOf(after) == -1) {
    var newCName = curCName + after;
    curCStyle.name = newCName;
  }
}



//app.activeDocument.allParagraphStyles[i].name = newName;