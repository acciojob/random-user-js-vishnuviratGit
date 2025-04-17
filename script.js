//your code here
const API="https://randomuser.me/api/";
 let userInfo={};
 let ageBtn=document.getElementById("age");
 let emailBtn=document.getElementById("email");
 let phoneBtn=document.getElementById("phone");
 let getUserBtn=document.getElementById("getUser");
const fetchData= async ()=>{
      try{
          const response= await fetch(API);
         const data=await response.json();
           userInfo=data;
           displayData(data);
          console.log(data);
          
      }
      catch(error){
          console.log("error is:",error);
      }
}
fetchData();
function displayData(data){
      document.getElementById("additionalInfo").innerHTML="";
      document.getElementById("details").innerHTML=`
          <img src="${data.results[0].picture.large}"/>
          <h2>${data.results[0].name.first} ${data.results[0].name.last} </h2>
          
        `
}
ageBtn.addEventListener("click", ()=>{
      document.getElementById("additionalInfo").innerHTML=`
           <p>${userInfo.results[0].dob.age}</p>
      `
})
emailBtn.addEventListener("click", ()=>{
    document.getElementById("additionalInfo").innerHTML=`
    <p>${userInfo.results[0].email}</p>
`
})
phoneBtn.addEventListener("click", ()=>{
    document.getElementById("additionalInfo").innerHTML=`
    <p>${userInfo.results[0].phone}</p>
`
})
getUserBtn.addEventListener("click", ()=>{
     fetchData();
})
