documento . addEventListener ( "DOMContentLoaded" ,  e => {
    const  forma  =  documento . querySelector ( "#frmConversores" ) ;
    formar . addEventListener ( "submit" ,  event => {
        evento . preventDefault ( ) ;
  
        let  de  =  documento . querySelector ( "#CboDe" ) . valor ,
            a  =  documento . querySelector ( "#CboA" ) . valor ,
            cantidad  =  documento . querySelector ( "#txtCantidadConversor" ) . valor ,
            opcion  =  documento . getElementById ( 'cboConvertir' ) ;
  
        monedas =  {
            "dolar" : 1 ,
            "euro" : 0.93 ,
            "quetzal" : 7.63,
            "lempira" : 24.9 ,
            "cordoba" : 34.19 } ,
            longitudes  =  {
              "mm" : 1000 ,
              "cm" : 100 ,
              "mt" : 1 ,
              "km" : 0.001 ,
              "milla" : 0.000621371 } ,
              almacenamiento  =  {
                "bit" : 1 ,
                "byte" : 0.13 ,
                "kb" : 0.00122 ,
                "mb" : 0.00000119 ,
                "gb" : 0.00000000116 } ,
                peso  =  {
                  "gramo" : 1000 ,
                  "kg" : 1 ,
                  "libra" : 2.20462 ,
                  "onza" : 35.274 ,
                  "tonelada" : 0.01 } ;
  
        let  $res  =  documento . querySelector ( "#lblRespuesta" ) ;
        if ( opcion . value  ==  "moneda" ) {
          $res . innerHTML  =  `Respuesta: $ { ( monedas [ a ] / monedas [ de ] * cantidad ) . toFixed ( 2 )  } ` ;
        }  else  if ( opcion . value  ==  "longitud" ) {
          $res . innerHTML  =  `Respuesta: $ { ( longitudes [ a ] / longitudes [ de ] * cantidad ) . toFixed ( 2 )  } ` ;
        }  else  if ( opcion . value  ==  "almacenamiento" ) {
          $res . innerHTML  =  `Respuesta: $ { ( almacenamiento [ a ] / almacenamiento [ de ] * cantidad )  } ` ;
        }  else  if ( opcion . value  ==  "peso" ) {
          $res . innerHTML  =  `Respuesta: $ { ( peso [ a ] / peso [ de ] * cantidad ) . toFixed ( 2 )  } ` ;
        } ;
    } ) ;
  } ) ;
  
 
  function seleccionar_opcion ( )  {
    let  opcion  =  documento . getElementById ( 'cboConvertir' ) ,
    de1  =  documento . getElementById ( 'CboDe' ) ,
    a1  =  documento . getElementById ( 'CboA' ) ;
   
    de1 . valor = "" ;
    a1 . valor = "" ;
    de1 . innerHTML = "" ;
    a1 . innerHTML = "" ;
  
    if ( opcion . value  ==  "moneda" ) {
      var   array  =  [ "dolar! Dolar" , "euro! Euro" , "quetzal! Quetzal" , "lempira! Lempira" , "cordoba! Cordoba" ] ; 
    }  else  if ( opcion . value  ==  "longitud" ) {
      var  array  =  [ "mm! MM" , "cm! CM" , "mt! MT" , "km! KM" , "milla! Milla" ] ;
    }  else  if ( opcion . value  ==  "almacenamiento" ) {
      var  array  =  [ "bit! Bit" , "byte! Byte" , "kb! KB" , "mb! MB" , "gb! GB" ] ;
    }  else  if ( opcion . value  ==  "peso" ) {
      var  array  =  [ "gramo! Gramo" , "kg! KG" , "libra! Libra" , "onza! Onza" , "tonelada! Tonelada" ] ;
    } ;
  
    for ( var  i = 0 ; i < array . length ; i ++ ) { 
        var  reparación = matriz [ i ] . dividir ( "!" ) ;
      var  newop  =  documento . createElement ( "opción" ) ;
      newop . valor  =  reparar [ 0 ]
      newop . innerHTML  =  reparar [ 1 ] ;
      de1 . opciones . agregar ( newop ) ;
    } ;
    for ( var  i = 0 ; i < array . length ; i ++ ) { 
        var reparación =  matriz [ i ] . dividir ( "!" ) ;
      var  newop  =  documento . createElement ( "opción" ) ;
      newop . valor  =  reparar [ 0 ]
      newop . innerHTML  =  reparar [ 1 ] ;
      a1 . opciones . agregar ( newop ) ;
    } ;
   }