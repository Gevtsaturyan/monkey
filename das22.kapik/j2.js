

document.onkeydown=function(e){
    var kapikl1=document.getElementById('kapik2').offsetLeft
    var kapikt1=document.getElementById('kapik2').offsetTop

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

    if(e.keyCode == 38){
        kapikt1=kapikt1-5
        document.getElementById('kapik2').style.top=kapikt1+'px'

    }
    if(e.keyCode == 40){
        kapikt1=kapikt1 +5
        document.getElementById('kapik2').style.top=kapikt1+'px'

    }
    if(e.keyCode == 37){
        kapikl1=kapikl1-5
        document.getElementById('kapik2').style.left=kapikl1+'px'


    }
    if(e.keyCode == 39){
        kapikl1=kapikl1+5
        document.getElementById('kapik2').style.left=kapikl1+'px'

    }
    
    if(kapikl1+70>banan1l && kapikl1<banan1l+70 && kapikt1 + 70>banan1t && kapikt1<banan1t+70 ){
        document.getElementById('banan1').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)

        
    }

    if(kapikl1+70>banan2l && kapikl1<banan2l+70 && kapikt1 + 70>banan2t && kapikt1<banan2t+70 ){
        document.getElementById('banan2').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan3l && kapikl1<banan3l+70 && kapikt1 + 70>banan3t && kapikt1<banan3t+70 ){
        document.getElementById('banan3').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan4l && kapikl1<banan4l+70 && kapikt1 + 70>banan4t && kapikt1<banan4t+70 ){
        document.getElementById('banan4').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan5l && kapikl1<banan5l+70 && kapikt1 + 70>banan5t && kapikt1<banan5t+70 ){
        document.getElementById('banan5').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan6l && kapikl1<banan6l+70 && kapikt1 + 70>banan6t && kapikt1<banan6t+70 ){
        document.getElementById('banan6').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan7l && kapikl1<banan7l+70 && kapikt1 + 70>banan7t && kapikt1<banan7t+70 ){
        document.getElementById('banan7').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
    }

    if(kapikl1+70>banan8l && kapikl1<banan8l+70 && kapikt1 + 70>banan8t && kapikt1<banan8t+70 ){
        document.getElementById('banan8').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
        clearTimeout()
    }

    if(kapikl1+70>banan9l && kapikl1<banan9l+70 && kapikt1 + 70>banan9t && kapikt1<banan9t+70 ){
        document.getElementById('banan9').classList.add('rr')
        document.getElementById('kapik2').style.backgroundImage='url(img/pobeda3.gif)'
        setTimeout(()=>{
            document.getElementById('kapik2').style.backgroundImage='url(img/qayl2.gif)'
        },700)
        clearTimeout()
    }
    if(kapikl1+80>leonl && kapikl1<leonl+80 && kapikt1 + 80>leont && kapikt1<leont+80 ){
        document.getElementById('over').style.opacity=1;
        document.getElementById('kapik2').style.display='none'
        clearInterval(stop)
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
},700)