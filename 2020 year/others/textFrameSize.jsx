var myDoc= app.activeDocument;  

var myPageItems = myDoc.allPageItems;  

var oStyle = myDoc.objectStyles.add({  

    name: "myObjectStyle",  

    enableTextFrameAutoSizingOptions: true,

    textFramePreferences: {  

      autoSizingType: AutoSizingTypeEnum.HEIGHT_AND_WIDTH_PROPORTIONALLY,
      autoSizingType: Auto

      autoSizingReferencePoint: AutoSizingReferenceEnum.LEFT_CENTER_POINT,  

    }  

  });  

for (var i =0; i<myPageItems.length; i++){  

if(myPageItems.constructor.name == "TextFrame"){  

     var myOverFlowFrame = myPageItems;  

     if(myOverFlowFrame.overflows==true){

  myPageItems.appliedObjectStyle = myDoc.objectStyles.item("myObjectStyle");   

    

}

}

}