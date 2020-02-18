function start(){
  document.querySelector(".initialImage").classList.toggle("title");
  setTimeout(()=>{document.querySelector(".initialImage").classList.add("makeItSmall");},6000);
  setTimeout(()=>{document.querySelector(".initialImage").style.cssText=" margin:0; width:80px;";},6000);
  setTimeout(()=>{document.querySelector("#head").classList.add("changeHead");},6000);
  setTimeout(()=>{document.querySelector("#head").style.cssText="font-size:4rem; transform:translate(0px,-150px);";},10000);
}
