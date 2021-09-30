let  count = 0;
function toggleMenu(){
  // console.log("hello");
  if(count == 0){
    document.getElementsByClassName('navbar_cover')[0].style.display = "none";
    count = count + 1;
    console.log("hello" + count);
  }else {
    document.getElementsByClassName('navbar_cover')[0].style.display = "block";
    count = count - 1;
    console.log("hello" + count);
  }
}


// document.getElementsByClassName('hamburger').addEventLisrener{
//
// }
