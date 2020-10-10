//$.level = 2;

	var frDoc = activeDocument;
	var exportOptions = new ExportOptionsGIF();
	var type = ExportType.GIF;
	var docPath = activeDocument.path;
	var docPathStr = docPath.toString();
	var sloj = frDoc.activeLayer;
	var imjaSloja = sloj.name;

	vardas = docPath + "/" + imjaSloja;
	//var fileName = new File("./gif/sample.gif");
	var fileName = new File(vardas);


	exportOptions.transparency = false;
	exportOptions.verticalScale = 200;
	exportOptions.horizontalScale = 200;
	//exportOptions.typename = windows;
	//exportOptions.matte = false;

	activeDocument.exportFile( fileName, type, exportOptions );