let theme = 0;


function Ali(){
    window.open("https://www.instagram.com/gasimzadeali");
}
function Gismat(){
window.open("https://www.instagram.com/gismathusein/");
}
function Oktay(){
  window.open("https://www.instagram.com/oktayafandi/");
  }
function bigImg(x) {
  x.style.height = "80px";
  x.style.width = "80px";
}

function normalImg(x) {
  x.style.height = "48px";
  x.style.width = "48px";
}
function changeClassd(){



    
  let b = [...document.getElementsByClassName("bdy")];
  let a = [...document.getElementsByClassName("nvbr")];

      b.forEach((b) => {
        b.classList.remove("bg-light");
        b.classList.add("bg-dark");
       
      })

      a.forEach((a) => {
        a.classList.remove("bg-dark");
        a.classList.add("bg-light");
      
      })

  
    
}


function changeClassl(){


  // let b = document.getElementsByClassName("bdydark").classList;
  // let a = document.getElementsByClassName("nvbrdark").classList;

    
  let c = [...document.getElementsByClassName("bdy")];
  let d = [...document.getElementsByClassName("nvbr")];

  c.forEach((c) => {
    c.classList.remove("bg-dark");
    c.classList.add("bg-light");
  })

  d.forEach((d) => {
    d.classList.remove("bg-light");
    d.classList.add("bg-dark");
  })

}

function more(){
  let q=document.getElementById("friends-list");
  let m=document.getElementById("mmore");
  console.log(q.className);
  if(q.className==="smalll"){
    q.classList.remove("smalll");
    q.classList.add("bigg");
    m.textContent="Hidden";
  }else {
    q.classList.remove("bigg");
    q.classList.add("smalll");
    m.textContent="More";
  }
}