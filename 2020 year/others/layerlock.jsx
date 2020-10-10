var myDoc = app.activeDocument;

//~ myDoc.layers.everyItem().locked = true;
myDoc.layers.item("CMYK").locked = true;