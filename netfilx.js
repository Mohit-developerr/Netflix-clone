let allq = document.querySelectorAll(".ALLfunctiom");
allq.forEach((m, index) => {
m.addEventListener("click", () => {
const nextSibling = m.nextElementSibling;
if (nextSibling) {
nextSibling.classList.toggle("scale-y-100");    
nextSibling.classList.toggle("p-[15px]");          // Toggle padding
nextSibling.classList.toggle("sm:h-[275px]");      // Toggle small screen height
nextSibling.classList.toggle("h-[300px]");  // Toggle large screen height'
m.children[0].classList.toggle("rotate-45")
console.log(m.children);
    }

    allq.forEach((e,index)=>{
      if(e !== m){
        e.nextElementSibling.classList.remove("scale-y-100");
        e.nextElementSibling.classList.remove("p-[15x]");
        e.nextElementSibling.classList.remove("sm:h-[275px]");      // Toggle small screen height
        e.nextElementSibling.classList.remove("h-[300px]");
      }
      

    })
  });
});

// let ALLf=document.querySelectorAll(".ALLfunctiom");
// ALLf.forEach((m, index) => {
//  m.addEventListener("click",()=>{
//   const next = m.nextElementSibling;
//   if (next) {
//    next.classlist.add("scale-y-100");

//    next.classlist.toggle("p-[15px]");
//    next.classlist.toggle("sm:h-[275px]");
//    next.classlist.toggle("h-[300px]");
//   }

//  });
// });

const signinButton = document.querySelector('.linkk'); // Adjust selector based on your HTML
signinButton.addEventListener('click', () => {
    window.location.href = 'sigin.html';
});
