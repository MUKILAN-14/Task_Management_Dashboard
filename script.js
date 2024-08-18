function navigatetonextpage(){
    window.location.href='index2.html';
}
// function navigateTodashboard(){
//     window.location.href='index2.html';
// }
function addingtasks(){
    const cont=document.querySelector(".box")
    let newele=document.createElement("div")
    newele.innerHTML="<p>Using either of these methods will ensure that your div elements wrap correctly, preventing them from overflowing off the screen.</p>"
    cont.prepend(newele)
  }