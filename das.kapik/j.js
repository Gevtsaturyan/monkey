document.onkeydown=function(e){
    var kapikl=document.getElementById('q6').offsetLeft
    var kapikt=document.getElementById('q6').offsetTop

    var banan1l=document.getElementById('q').offsetLeft
    var banan1t=document.getElementById('q').offsetTop

    var banan2l=document.getElementById('q1').offsetLeft
    var banan2t=document.getElementById('q1').offsetTop

    var banan3l=document.getElementById('q2').offsetLeft
    var banan3t=document.getElementById('q2').offsetTop

    var banan4l=document.getElementById('q3').offsetLeft
    var banan4t=document.getElementById('q3').offsetTop

    var banan5l=document.getElementById('q4').offsetLeft
    var banan5t=document.getElementById('q4').offsetTop

    var banan6l=document.getElementById('q5').offsetLeft
    var banan6t=document.getElementById('q5').offsetTop

    if(e.keyCode == 38){
        kapikt=kapikt-10
        document.getElementById('q6').style.top=kapikt+'px'
    }
    if(e.keyCode == 40){
        kapikt=kapikt +10
        document.getElementById('q6').style.top=kapikt+'px'
    }
    if(e.keyCode == 37){
        kapikl=kapikl-10
        document.getElementById('q6').style.left=kapikl+'px'

    }
    if(e.keyCode == 39){
        kapikl=kapikl+10
        document.getElementById('q6').style.left=kapikl+'px'
    }
    
    if(kapikl+100>banan1l && kapikl<banan1l+100 && kapikt + 100>banan1t && kapikt<banan1t+100 ){
        document.getElementById('q').classList.add('rr')
    }

    if(kapikl+100>banan2l && kapikl<banan2l+100 && kapikt + 100>banan2t && kapikt<banan2t+100 ){
        document.getElementById('q1').classList.add('rr')
    }

    if(kapikl+100>banan3l && kapikl<banan3l+100 && kapikt + 100>banan3t && kapikt<banan3t+100 ){
        document.getElementById('q2').classList.add('rr')
    }

    if(kapikl+100>banan4l && kapikl<banan4l+100 && kapikt + 100>banan4t && kapikt<banan4t+100 ){
        document.getElementById('q3').classList.add('rr')
    }

    if(kapikl+100>banan5l && kapikl<banan5l+100 && kapikt + 100>banan5t && kapikt<banan5t+100 ){
        document.getElementById('q4').classList.add('rr')
    }

    if(kapikl+100>banan6l && kapikl<banan6l+100 && kapikt + 100>banan6t && kapikt<banan6t+100 ){
        document.getElementById('q5').classList.add('rr')
    }


    var cl=document.getElementsByClassName('rr').length*5
    document.getElementById('a1').innerHTML=cl
    if(cl==30){
        document.getElementById('q8').style.opacity=1;
        clearInterval(stop)
    }

}

var u=60
var stop=setInterval(function stopF(){
    u--
    document.getElementById('a2').innerHTML=u
    if(u==0){
        document.getElementById('q7').style.opacity=1;
        clearInterval(stop)
    }
},1000)

// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// })
// console.log(4);
// console.log(5);
////////tpel zangvaci nersi zuygery bayc amen angam erb ka indexs llogy ashxati u tpi iranic araji zuygy

//stanal varjutyun zangvaci nersi zuygeri ev amenapoqr tvi gumary 

//log anel zangvaci nersi zuygeri gumari ev amenamec u amenapoqyr gumari haraberutyan arjeqy

//stanal karusel 4 nkarov

//stexcel zangvac vorum linen 10 tarber meqenaneri anun arjeq guyn unenal 2 input dasht mekum min arjeq mekum max arjeqerb klik anenq brauzeri vra tpvi ayn meqenaneri anuny guyny giny voronq gtnvum en ayd mijankyalu erb vochinch chgrvi bayc clik ani alert ani lracreq dashtery ev borderi guyny poxvi
//unenal lorem 50 logum stanal amenaerkar bary kam barery