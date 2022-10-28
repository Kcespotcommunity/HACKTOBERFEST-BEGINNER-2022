function myfunc(){
    var un= document.forms["myForm"]["uname"].value;
    var pw= document.forms["myForm"]["pass"].value;
    if(un=="kce"&&pw=="123"){
    window.location.replace("http://127.0.0.1:3000/index.html");
    }
    else{
      alert("invalid username or password");
    }
  }