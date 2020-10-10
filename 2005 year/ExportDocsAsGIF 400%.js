//$.level = 2;

	var frDoc = activeDocument;
	var exportOptions = new ExportOptionsGIF();
	var type = ExportType.GIF;
	var docPath = activeDocument.path;
	var docPathStr = docPath.toString();
	var sloj = frDoc.activeLayer;
	var imjaSloja = sloj.name;
	var newRGBColor = new RGBColor();

	newRGBColor.red = 0;
	newRGBColor.green = 0;
	newRGBColor.blue = 0;

	vardas = docPath + "/" + imjaSloja;
	//var fileName = new File("./gif/sample.gif");
	var fileName = new File(vardas);

	exportOptions.matteColor = newRGBColor
	exportOptions.transparency = false;
	//exportOptions.matte = true;
	//matte color:{red:128, green:0, blue:60}
	exportOptions.verticalScale = 400;
	exportOptions.horizontalScale = 400;

	activeDocument.exportFile( fileName, type, exportOptions );


//var newRGBColor = new RGBColor();
//newRGBColor.red = 255;
//newRGBColor.green = 255;
//newRGBColor.blue = 0;
//app.activeDocument.defaultFillColor = newRGBColor;