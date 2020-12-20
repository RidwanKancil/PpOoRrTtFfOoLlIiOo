/*====================================================================================================

--------------------------Detail--------------------------

Theme Name: Kancil Project | Simple Portfolio
Author: Ridwan ( Akang Kancil )
Support: akangkancil@yahoo.com
Descriptions: Kancil Project HTML Template With Category Simple Portfolio
Version: 1.0

--------------------------Sitemap Code--------------------------

1.header
2.window scroll
3.portfolio
4.skill

====================================================================================================*/

// =====1.header area===== //

let header = document.querySelector('.header');
let menu   = document.querySelectorAll('.header nav ul li a');
let nav   = document.querySelector('.header nav');
let btnshow = document.querySelector('.header .btn-show input');
var sections = document.querySelectorAll("section");

window.addEventListener('scroll',change);
function change(){
    if(window.pageYOffset>500){
        header.style.background="#073984";
    }else{
        header.style.background="teal";
    }
    if(window.pageYOffset>700){
        header.style.background="#05285b";
    } 
}
btnshow.addEventListener('click',function(){
  nav.classList.toggle('siledx');
})
// =====end header area===== //


// =====2.window scroll area===== //

window.addEventListener('scroll',function(){
  menu.forEach(ok=>{
    let section = document.querySelector(ok.hash);
    let scrollPosition = document.documentElement.scrollTop;

    if(
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.15 &&
      scrollPosition <=
      section.offsetTop + section.offsetHeight - section.offsetHeight * 0.35
    ){
      ok.classList.add('active');
    }else{
      ok.classList.remove('active');
    }
  })
})
// =====end active navigation scroll area===== //


// =====3.portfolio area===== //
let body = document.querySelector('body');
let menuli = document.querySelectorAll('#works .container-opening nav ul li');
let menuul = document.querySelector('#works .container-opening nav ul');
let thumb = document.querySelectorAll('.container-box-port .pict');

let itemIndex=0;
const containerPort = document.querySelector('.container-box-port').children,
      item =containerPort.length,
      btnClose=document.querySelector('.container-overlay .overlay .btn-close'),
      containerOverlay=document.querySelector('.container-overlay'),
      textTitle=document.querySelector('.container-overlay .overlay .txt-title'),
      detailProject=document.querySelector('.container-overlay .overlay .box-caption .projt'),
      detailUsing=document.querySelector('.container-overlay .overlay .box-caption .usn'),
      detailClient=document.querySelector('.container-overlay .overlay .box-caption .clt'),
      detailPreview=document.querySelector('.container-overlay .overlay .box-caption .prvw'),
      detailPreviewLink=document.querySelector('.container-overlay .overlay .box-caption .prvw a'),
      overlayImg = document.querySelector('.container-overlay .thumbnail .pict-thumb');

for(let i=0;i<item;i++){
  containerPort[i].addEventListener('click',function(){
    itemIndex=i;
    containerOverlay.style.display ="block";
    containerOverlay.style.zIndex ="9999";
    header.style.display="none";
    body.style.overflow="hidden";
    body.classList.remove('y','x');
    detail();
  })
}
function next(){
  if (itemIndex == item-1 ) {
    itemIndex=0;
  }else{
    itemIndex++
  }
  detail();
}
function prev(){
  if (itemIndex == 0 ) {
    itemIndex=item-1;
  }else{
    itemIndex--;
  }
  detail();
}
function detail() {
  imgSrc=containerPort[itemIndex].querySelector('.pict .thumb').getAttribute('src');
  overlayImg.src=imgSrc;
  textTitle.innerHTML=containerPort[itemIndex].querySelector('.detail .text-title').innerHTML+" "+"Project";
  detailProject.innerHTML="Project"+" : "+containerPort[itemIndex].querySelector('.detail .project').innerHTML;
  detailUsing.innerHTML="Using"+" : "+containerPort[itemIndex].querySelector('.detail .using').innerHTML;
  detailClient.innerHTML="Client"+" : "+containerPort[itemIndex].querySelector('.detail .client').innerHTML;
  detailPreview.innerHTML="Preview"+" : "+containerPort[itemIndex].querySelector('.detail .preview').innerHTML;
  detailPreviewLink.innerHTML=containerPort[itemIndex].querySelector('.detail .preview a').innerHTML;
}

btnClose.addEventListener('click',function(){
  containerOverlay.style.display ="none";
    body.classList.add('x','y');
    header.style.display="flex";
  containerOverlay.style.zIndex ="-9999";
})
let woi =document.querySelector(".woi");
menuli.forEach(ok=>{
  ok.addEventListener('click',function(){
    menuul.querySelector('.active2').classList.remove('active2');
    ok.classList.add('active2');
    let value = ok.textContent;
    thumb.forEach(show=>{
      if (show.getAttribute('data-id')===value || value==='All') {
        show.style.display="block";
        show.style.animation="showup 0.5s ease-in-out"
        setTimeout(function(){
          show.style.animation = "";
        },500)
      }else{
        show.style.display="none";
      }
    })
  })
})
// =====end menu active portfolio area===== //


// =====4.skill area=====//
let dbtgPer = document.querySelectorAll('.skill .box-persen .persen');
dbtgPer.forEach(ok=>{
  let value = ok.getAttribute('per');
  ok.style.width=value;
})
// =====end skill area=====//

function sendEmail() {
  alert("Silahkan Hubungi, Email atau Nomorku yang tertera di Contact Us Secara Manual, Agar Lebih Aman :), Terima Kasih :) ")
}