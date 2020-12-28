console.log('daniel')
const but1 = document.querySelector(".but1")
console.log(but1);
// but1.addEventListener("click", myFunction() );
function myFunction() {
    // document.getElementById("ans1").style.display = "none";
    if ( document.getElementById("ans1").style.display == "none") {
        document.getElementById("ans1").style.display = "initial"
    } else{
        document.getElementById("ans1").style.display = "none"
    }
    
  }
function myFnc(){
      if (document.getElementById("ans2").style.display == "initial"){
        document.getElementById("ans2").style.display = "none"
    } else{
        document.getElementById("ans2").style.display = "initial"
    }
      }
function myFunc(){
    if (document.getElementById("ans3").style.display == "none"){
        document.getElementById("ans3").style.display = "initial"
    } else{
        document.getElementById("ans3").style.display = "none"
    }
      }
function myFtn(){
    if (document.getElementById("ans4").style.display == "none"){
        document.getElementById("ans4").style.display = "initial"
    } else{
        document.getElementById("ans4").style.display = "none"
    }
      }
function myFnt(){
    if (document.getElementById("ans5").style.display == "none"){
        document.getElementById("ans5").style.display = "initial"

    } else{
        document.getElementById("ans5").style.display = "none"
    }
      
}