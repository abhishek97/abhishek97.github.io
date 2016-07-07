window.onload = function () {
  
  /*var str = "my string";
    
  //window.alert( 5 + 5 +globalvar + 5 + 5); // left -> right
  
  let abc = "abc";   // don't fall into inner scope
  abc = "xyz";
  const xyz = "xyz";
  //xyz = "aa";  Error
  
  var my =  { name : "Abhishek" ,
              age : 18};
  my.town = "Delhi";
  var arr =  [ 'a' , 'b' , 'c' , 10];
  console.log(arr[3]);
  */
  
  //fun1();
  /*
  document.getElementById("mybutton").onclick = function (){
    window.alert( document.getElementById('op1').value );
  };
  */
  append = function (val){
    var prev = document.getElementById('valuebox').value ;
    document.getElementById('valuebox').value =   prev+ val  ;
  };
  
  document.getElementById("one").onclick = function (){
    append("1");
  }
    document.getElementById("2").onclick = function (){
    append("2");
  }
  document.getElementById("3").onclick = function (){
    append("3");
  }
   document.getElementById("4").onclick = function (){
    append("4");
  }
    document.getElementById("5").onclick = function (){
    append("5");
  } 
    document.getElementById("6").onclick = function (){
    append("6");
  } 
    document.getElementById("7").onclick = function (){
    append("7");
  } 
    document.getElementById("8").onclick = function (){
    append("8");
  }
     document.getElementById("9").onclick = function (){
    append("9");
  }
      document.getElementById("0").onclick = function (){
    append("0");
  }
    document.getElementById("*").onclick = function (){
    append("*");
  } 
    document.getElementById("/").onclick = function (){
    append("/");
  } 
    document.getElementById("+").onclick = function (){
    append("+");
  }
     document.getElementById("-").onclick = function (){
    append("-");
  }
   document.getElementById("C").onclick = function ()
   {
       document.getElementById('valuebox').value ="";
    }
   document.getElementById("=").onclick = function ()
   {
       var str = document.getElementById('valuebox').value ;
        var op ;
      var operator;
      for ( var i=0;i<str.length ; i++)
         {
           if ( str[i] == "*" || str[i] == "+" || str[i] == "-" || str[i] == "/")
           {
             op = i;
             operator = str[i];
           }
         }
      var op1 = str.slice(0,op);
      var op2 = str.slice(op+1, str.length);
      nop1 = Number(op1);
      nop2 = Number(op2);
     var answerbox = Number(document.getElementById('valuebox').value );
     switch(operator)
       {
         case "*" : { 
              answerbox = nop1 *nop2 ; 
              break;
          }
           case "+" : { 
              answerbox = nop1 +nop2 ; 
              break;
          }
            case "/" : { 
              answerbox = nop1 / nop2 ; 
              break;
          }
            case "-" : { 
              answerbox = nop1 - nop2 ; 
              break;
          }
       }
     
     answerbox = answerbox.toFixed(2);
     var ind = answerbox.indexOf('.');
     var afterdec = answerbox.slice(ind+1 , answerbox.length );
     var beforedec = answerbox.slice( 0 , ind);
     afterdec = Math.round( Number(afterdec) );
     answerbox = beforedec + '.' + afterdec;
     document.getElementById("answer").innerHTML = answerbox;
     document.getElementById("valuebox").value = answerbox;
     
     
     
     
    }
   
     
  
  }
  