

document.onkeydown=function(e){
    var kapikl3=document.getElementById('kapik3').offsetLeft
    var kapikt3=document.getElementById('kapik3').offsetTop

    var banan1l=document.getElementById('banan1').offsetLeft
    var banan1t=document.getElementById('banan1').offsetTop

    var banan2l=document.getElementById('banan2').offsetLeft
    var banan2t=document.getElementById('banan2').offsetTop

    var banan3l=document.getElementById('banan3').offsetLeft
    var banan3t=document.getElementById('banan3').offsetTop

    var banan4l=document.getElementById('banan4').offsetLeft
    var banan4t=document.getElementById('banan4').offsetTop

    var banan5l=document.getElementById('banan5').offsetLeft
    var banan5t=document.getElementById('banan5').offsetTop

    var banan6l=document.getElementById('banan6').offsetLeft
    var banan6t=document.getElementById('banan6').offsetTop
    
    var banan7l=document.getElementById('banan7').offsetLeft
    var banan7t=document.getElementById('banan7').offsetTop

    
    var banan8l=document.getElementById('banan8').offsetLeft
    var banan8t=document.getElementById('banan8').offsetTop

    
    var banan9l=document.getElementById('banan9').offsetLeft
    var banan9t=document.getElementById('banan9').offsetTop

    var leonl=document.getElementById('leon1').offsetLeft
    var leont=document.getElementById('leon1').offsetTop

    var orioll=document.getElementById('oriol1').offsetLeft
    var oriolt=document.getElementById('oriol1').offsetTop

    var ocl=document.getElementById('oc1').offsetLeft
    var oct=document.getElementById('oc1').offsetTop

    if(e.keyCode == 38){
        kapikt3=kapikt3-5
        document.getElementById('kapik3').style.top=kapikt3+'px'

    }
    if(e.keyCode == 40){
        kapikt3=kapikt3 +5
        document.getElementById('kapik3').style.top=kapikt3+'px'

    }
    if(e.keyCode == 37){
        kapikl3=kapikl3-5
        document.getElementById('kapik3').style.left=kapikl3+'px'


    }
    if(e.keyCode == 39){
        kapikl3=kapikl3+5
        document.getElementById('kapik3').style.left=kapikl3+'px'

    }
    
    if(kapikl3+70>banan1l && kapikl3<banan1l+70 && kapikt3 + 70>banan1t && kapikt3<banan1t+70 ){
        document.getElementById('banan1').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },1000)

        
    }

    if(kapikl3+70>banan2l && kapikl3<banan2l+70 && kapikt3 + 70>banan2t && kapikt3<banan2t+70 ){
        document.getElementById('banan2').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan3l && kapikl3<banan3l+70 && kapikt3 + 70>banan3t && kapikt3<banan3t+70 ){
        document.getElementById('banan3').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan4l && kapikl3<banan4l+70 && kapikt3 + 70>banan4t && kapikt3<banan4t+70 ){
        document.getElementById('banan4').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan5l && kapikl3<banan5l+70 && kapikt3 + 70>banan5t && kapikt3<banan5t+70 ){
        document.getElementById('banan5').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan6l && kapikl3<banan6l+70 && kapikt3 + 70>banan6t && kapikt3<banan6t+70 ){
        document.getElementById('banan6').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan7l && kapikl3<banan7l+70 && kapikt3 + 70>banan7t && kapikt3<banan7t+70 ){
        document.getElementById('banan7').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
    }

    if(kapikl3+70>banan8l && kapikl3<banan8l+70 && kapikt3 + 70>banan8t && kapikt3<banan8t+70 ){
        document.getElementById('banan8').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
        clearTimeout()
    }

    if(kapikl3+70>banan9l && kapikl3<banan9l+70 && kapikt3 + 70>banan9t && kapikt3<banan9t+70 ){
        document.getElementById('banan9').classList.add('rr')
        document.getElementById('kapik3').style.backgroundImage='url(img/vybor3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik3').style.backgroundImage='url(img/qayl3.gif)'
        },700)
        clearTimeout()
    }
    if(kapikl3+80>leonl && kapikl3<leonl+80 && kapikt3 + 80>leont && kapikt3<leont+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik3').style.display='none'
    }

    if(kapikl3+80>ocl && kapikl3<ocl+80 && kapikt3 + 80>oct && kapikt3<oct+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik3').style.display='none'
    }

    if(kapikl3+80>orioll && kapikl3<orioll+80 && kapikt3 + 80>oriolt && kapikt3<oriolt+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik3').style.display='none'
    }


    var cl=document.getElementsByClassName('rr').length*1
    document.getElementById('bal').innerHTML=cl
    if(cl==9){
        document.getElementById('win').style.opacity=1;
        document.getElementById('kapik3').style.display='none'
        clearInterval(stop)
    }

}




var u=60
var stop=setInterval(function stopF(){
    u--
    document.getElementById('time').innerHTML=u
    if(u<=5){
        document.getElementById('time').style.color='red'
    }
    if(u==0){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik3').style.display='none'
        clearInterval(stop)
    }
},1000)