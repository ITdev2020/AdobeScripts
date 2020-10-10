var sourcePages = app.documents[0]; 

sourcePages.pages.everyItem().duplicate(LocationOptions.AFTER, app.documents[1].pages.item(-1));