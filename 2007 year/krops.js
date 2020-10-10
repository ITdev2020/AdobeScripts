//2007-12-02. For Adobe illustrator, create crops mark for print cutting

var moj = 1;
if (moj == 1)
{
var tekuscijDoc = documents[0];
var odinMM = 2.834645;var tekuscijLayer = tekuscijDoc.layers.add();
var sirinaObjekta = 94*odinMM;
var vysotaObjekta = 56*odinMM;
var kropsVert = 2;
var kropsHoriz = 2;tekuscijLayer.name = "krops";
moveMatrixVert = getTranslationMatrix(0, vysotaObjekta);
moveMatrixHoriz = getTranslationMatrix(sirinaObjekta, 0);

//novajaLinija.setEntirePath(liniiDannye);


novajaLinija = tekuscijDoc.pathItems.add();
with (novajaLinija)
{
setEntirePath(Array(Array(-4.2, 0), Array(-17, 0)));
stroked = true;
strokeWidth = 0.25;
strokeColor = activeDocument.swatches["[Registration]"].color;
filled = false;

for (index=0; index<kropsVert-1; index++)
{
theArtItem = activeDocument.pageItems[index];
theArtItem.duplicate();
theArtItem.transform(moveMatrixVert);
}
}

novajaLinija1 = tekuscijDoc.pathItems.add();
with (novajaLinija1)
{
setEntirePath(Array(Array(0, -4.2), Array(0, -17)));
stroked = true;
strokeWidth = 0.25;
strokeColor = activeDocument.swatches["[Registration]"].color;
filled = false;

for (index=0; index<kropsHoriz-1; index++)
{
theArtItem = activeDocument.pageItems[index];
theArtItem.duplicate();
theArtItem.transform(moveMatrixHoriz);
}
}


}
