function cursorEffect(){
    var page1Content=document.querySelector("#page1-content");
var page2=document.querySelector("Page-2");
var cursor=document.querySelector("#cursor");
page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
    x:dets.x,
    y:dets.y
})
//     cursor.style.left=dets.x+"px";
//     cursor.style.top=dets.y+"px";
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
    scale:0,
opacity: 0
})})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
scale:  1,
opacity: 1
})})
}
cursorEffect()