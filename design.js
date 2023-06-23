log=()=>{
    var b=(document.getElementById("num1").value);
    var c=num1.length();
    var arr=new Array(c);
    arr=b.toCharArray();
    var b=0;
    var d=0;
    var submitButton = document.getElementById("submit");

    for(var i=0;i<c;i++)
    {
        if(parseInt(arr[i])>=65&&parseInt(arr[i])<=90)
        {
            b++;
        }
        if(((parseInt(arr[i])>=33&&(parseInt(arr[i])<=47))||(parseInt(arr[i]>=58)&&parseInt(arr[i]<=64))))
        {
            d++;
        }
   }
   if(b>0&&d>0&&c>=8)
   {
    document.getElementById("result").textContent = "click on submit button";

   }
   else if(d<0)
   {
    document.getElementById("result").textContent = "your password must contain a special character";
    
   }
   else if(b<0)
   {
    document.getElementById("result").textContent = "your password must contain a uppercase letter";
   
   }
   else if(c<8)
   {
    document.getElementById("result").textContent = "your password must contain atleast 8 characters";
 
   }
   else{
    document.getElementById("result").textContent = "your password must be atleast 8 characters";
    
   }
}