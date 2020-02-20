function validate()
{
var x = document.getElementByName("fname").value;
var reg_name = /^[a-zA-Z]{3,30}$/;

if(x=="")
 { 
  window.alert("Field can't be blank..!");
  return false;
 }
else if(!reg_name.test(x))
 {
  window.alert("Incorrect name format...!");
  return false;
 }
}
