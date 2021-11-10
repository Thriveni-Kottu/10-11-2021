function  validateEmail() 
{
 var emailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(inputtext.value.match(emailformat))
 {
     alert("valid email address!");
     document.getElementById("emailid");
     return true;
 }
else
{
    alert("you have enteredan invalid email address!");
    document.getElementById("emailid");
    return false;
}
}
