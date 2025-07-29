function CheckEligibility() {
 const age =
 parseInt(document.getElementById("ageInput").value);
 const result =document.getElementById("Result");
     
 if (isNaN(age)){
  result.textContent = "please enter a valid age.";
 }
 else if (age >= 18) {
 result.textContent= " Congrats!you are Eligibile to drive.";
  }
 else{
  result.textContent="Sorry,you are not eligible to drive yet.";
  }
}
     
