var myDoc = app.activeDocument; 

  var objs1 = myDoc.objectStyles.length;   
    for(var n=objs1-1; n>0; n--) //j++ replaced here by j--   
    {   
      try { myDoc.objectStyles[n].remove();   
      } catch(e){}
    }