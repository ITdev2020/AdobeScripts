//$.level = 2;

	var frDoc = activeDocument;
	var exportOptions = new ExportOptionsGIF();
	var type = ExportType.GIF;
	var docPath = activeDocument.path;
	var docPathStr = docPath.toString();
	var sloj = frDoc.activeLayer;
	var imjaSloja = sloj.name;

	vardas = docPath + "/!!!Skaitm spaudai/" + imjaSloja;
	//var fileName = new File("./gif/sample.gif");
	var fileName = new File(vardas);


	exportOptions.transparency = false;
	exportOptions.verticalScale = 126.8;
	exportOptions.horizontalScale = 126.8;
	//exportOptions.matte = false;

	activeDocument.exportFile( fileName, type, exportOptions );