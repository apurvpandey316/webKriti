function start(){
  document.querySelector(".initialImage").classList.toggle("title");
  setTimeout(()=>{document.querySelector(".initialImage").classList.add("makeItSmall");},6000);
  setTimeout(()=>{document.querySelector(".initialImage").style.cssText=" margin:0; width:80px;"},6000);
}
