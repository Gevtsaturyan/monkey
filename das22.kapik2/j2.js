

document.onkeydown=function(e){
    var kapikl2=document.getElementById('kapik2').offsetLeft
    var kapikt2=document.getElementById('kapik2').offsetTop

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
        kapikt2=kapikt2-5
        document.getElementById('kapik2').style.top=kapikt2+'px'

    }
    if(e.keyCode == 40){
        kapikt2=kapikt2 +5
        document.getElementById('kapik2').style.top=kapikt2+'px'

    }
    if(e.keyCode == 37){
        kapikl2=kapikl2-5
        document.getElementById('kapik2').style.left=kapikl2+'px'


    }
    if(e.keyCode == 39){
        kapikl2=kapikl2+5
        document.getElementById('kapik2').style.left=kapikl2+'px'

    }
    
    if(kapikl2+70>banan1l && kapikl2<banan1l+70 && kapikt2 + 70>banan1t && kapikt2<banan1t+70 ){
        document.getElementById('banan1').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },1000)

        
    }

    if(kapikl2+70>banan2l && kapikl2<banan2l+70 && kapikt2 + 70>banan2t && kapikt2<banan2t+70 ){
        document.getElementById('banan2').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan3l && kapikl2<banan3l+70 && kapikt2 + 70>banan3t && kapikt2<banan3t+70 ){
        document.getElementById('banan3').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan4l && kapikl2<banan4l+70 && kapikt2 + 70>banan4t && kapikt2<banan4t+70 ){
        document.getElementById('banan4').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan5l && kapikl2<banan5l+70 && kapikt2 + 70>banan5t && kapikt2<banan5t+70 ){
        document.getElementById('banan5').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan6l && kapikl2<banan6l+70 && kapikt2 + 70>banan6t && kapikt2<banan6t+70 ){
        document.getElementById('banan6').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan7l && kapikl2<banan7l+70 && kapikt2 + 70>banan7t && kapikt2<banan7t+70 ){
        document.getElementById('banan7').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
    }

    if(kapikl2+70>banan8l && kapikl2<banan8l+70 && kapikt2 + 70>banan8t && kapikt2<banan8t+70 ){
        document.getElementById('banan8').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
        clearTimeout()
    }

    if(kapikl2+70>banan9l && kapikl2<banan9l+70 && kapikt2 + 70>banan9t && kapikt2<banan9t+70 ){
        document.getElementById('banan9').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/yem2.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl7.gif)'
        },700)
        clearTimeout()
    }
    if(kapikl2+80>leonl && kapikl2<leonl+80 && kapikt2 + 80>leont && kapikt2<leont+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik2').style.display='none'
    }

    if(kapikl2+80>ocl && kapikl2<ocl+80 && kapikt2 + 80>oct && kapikt2<oct+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik2').style.display='none'
    }

    if(kapikl2+80>orioll && kapikl2<orioll+80 && kapikt2 + 80>oriolt && kapikt2<oriolt+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik2').style.display='none'
    }


    var cl=document.getElementsByClassName('rr').length*1
    document.getElementById('bal').innerHTML=cl
    if(cl==9){
        document.getElementById('win').style.opacity=1;
        document.getElementById('kapik2').style.display='none'
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
        document.getElementById('kapik2').style.display='none'
        clearInterval(stop)
    }
},1000)