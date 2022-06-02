var divmer=document.getElementById('divmer')
var div11=document.getElementById('div11')
var div21=document.getElementById('div21')
var div31=document.getElementById('div31')
var h31=document.getElementById('h31')
var h32=document.getElementById('h32')
var h33=document.getElementById('h33')
var nachili1=document.getElementById('nach1')
var nachili2=document.getElementById('nach2')
var nachili3=document.getElementById('nach3')
var kapik=document.getElementById('kapik')
var otm=document.getElementById('otm')
var x=0

div11.onclick=function(){
    
    h31.style.color='white'
    h31.innerHTML='ваш выбор икрок номер 1'
    h31.style.fontSize='25px'
    div21.style.display='none'
    div31.style.display='none'
    nachili1.style.display='block'
    otm.style.display='block'
    

}

div21.onclick=function(){
    
    h32.style.color='white'
    h32.innerHTML='ваш выбор икрок номер 1'
    h32.style.fontSize='25px'
    div11.style.display='none'
    div31.style.display='none'
    nachili2.style.display='block'
    otm.style.display='block'
    

}

div31.onclick=function(){
    
    h33.style.color='white'
    h33.innerHTML='ваш выбор икрок номер 1'
    h33.style.fontSize='25px'
    div21.style.display='none'
    div11.style.display='none'
    nachili3.style.display='block'
    otm.style.display='block'
    

}

otm.onclick=function(){
    div21.style.display='block'
    div11.style.display='block'
    div31.style.display='block'
    nachili1.style.display='none'
    nachili2.style.display='none'
    nachili3.style.display='none'
    h31.innerHTML='игрок 1'
    h32.innerHTML='игрок 2'
    h33.innerHTML='игрок 3'
    h32.style.color='yellow'
    h33.style.color='yellow'
    h31.style.color='yellow'
    otm.style.display='none'
}


