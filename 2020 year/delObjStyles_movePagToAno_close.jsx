var myDoc = app.activeDocument; 

  var objs1 = myDoc.objectStyles.length;   
    for(var n=objs1-1; n>0; n--) //j++ replaced here by j--   
    {   
      try { myDoc.objectStyles[n].remove();   
      } catch(e){}
    }

var sourcePages = app.documents[0]; 
sourcePages.pages.everyItem().duplicate(LocationOptions.AFTER, app.documents[1].pages.item(-1));

app.activeDocument.close(SaveOptions.NO);

app.activeDocument.pages.lastItem().select();
app.activeDocument.pages.lastItem().select(SelectionOptions.REMOVE_FROM);

app.layoutWindows[0].zoom(ZoomOptions.FIT_SPREAD);