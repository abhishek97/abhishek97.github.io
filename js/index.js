
var list = [];
var not = 0;


window.onload = function ()
{
  if(localStorage.getItem("not") && localStorage.getItem("todo"))
    {
      list = JSON.parse(localStorage.getItem("todo") );
      not = localStorage.getItem("not");
    }

  rebuild();
}

  document.getElementById("add").onclick = function () {
    var newtxt = document.getElementById("newtask").value;
    document.getElementById("newtask").value = "";
    if( newtxt.length == 0 )
      return ;
    var cur = document.getElementById("todolist").innerHTML ;
    list.push({
      "text" : newtxt,
      "checked" : false
               });
    not ++;
    localStorage.setItem("todo", JSON.stringify(list) );
    localStorage.setItem("not", not);
    rebuild();
    
    
  };
  
  function checkarray(arg) {
   
    if (list[arg].checked == true)
    {
      document.getElementById("item" + arg).setAttribute("class" , "notchecked");
    }
    else
    {
      document.getElementById("item" + arg).setAttribute("class" , "checked");
    }
    
    list[arg].checked = !(list[arg].checked);
    
  };
  
  function rebuild()
  {
    
    not = localStorage.getItem("not");
    document.getElementById("todolist").innerHTML = "";
    for( var i=0;i <not ;i++)
      {
        var prev = document.getElementById("todolist").innerHTML ;
        document.getElementById("todolist").innerHTML = prev + formcontent(i);
      }
    
  }
  
  function formcontent(i)
  {
    return "<li id='item" + i + "' > <input type='checkbox'  onclick='checkarray(" + i + ")' > " + list[i].text + "  </li> ";
  }
  
  function del()
  {
    for(var i=0;i<not;i++)
      {
        if(list[i].checked)
        {
          list.splice(i,1);
          i--;
          not--;
        }
      }
    
    localStorage.setItem("not",not);
    localStorage.setItem("todo", JSON.stringify(list));
    rebuild();
  }



