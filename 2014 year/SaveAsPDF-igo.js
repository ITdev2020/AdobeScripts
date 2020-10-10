/**********************************************************
NOTICE:  Igorio Scripts
*********************************************************/

/**********************************************************
SaveAsPDF-igo.js
DESCRIPTION
saves the artboards to PDF.
 **********************************************************/

function saveFileToPDF (dest) {
	var doc = app.activeDocument;
	if ( app.documents.length > 0 ) {
		var saveName = new File ( dest );
		saveOpts = new PDFSaveOptions();
		saveOpts.compatibility = PDFCompatibility.ACROBAT5;
		saveOpts.generateThumbnails = true;
		saveOpts.preserveEditability = true;
		doc.saveAs( saveName, saveOpts );
}
}