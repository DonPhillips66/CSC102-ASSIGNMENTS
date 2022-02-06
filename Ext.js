function GEEKFORGEEKS()                                   
{
    //Name On registration
    var name = document.forms["RegForm"]["Name"];              
   //Password (Area Code)
    var password = document.forms["RegForm"]["Password"]; 
    //Less than or equal to 20 characters, Alert if Not 
    if (name.value <=20)                                 
    {
        window.alert("Please enter your name. Max characters allowed = 20");
        name.focus();
        return false;
    }
   

    //Greater than or equal to 3 characters, Alert if Not 
    if (password.value <= 1)                       
    {
        window.alert("Please enter your password. Min characters allowed = 3");
        password.focus();
        return false;
    }
   //Select at least 1 course
    if (what.selectedIndex <= 1)                 
    {
        alert("Please enter your course.");
        what.focus();
        return false;
    }
   
    return true;
}