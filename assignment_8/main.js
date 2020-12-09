function rollHandler(diceIndex){
    let parentEl="#dice-"+diceIndex;
    //generates random number and attaches appropriate tag for later
    let roll=Math.floor((Math.random() * 6) + 1);
    tag = "#face-"+roll;
    //hides all tags and reveals img with correct tag
    $(parentEl+" > .face").css("display", "none");
    $(parentEl+">"+tag).show();
    
    switch (roll){
        case 1:
            anime({
                targets: (parentEl),
                borderRadius: 50,
                backgroundColor: 'rgb(0,0,0)'
            });
            break;
        case 6:
            anime({
                targets: (parentEl),
                borderRadius: 10,
                backgroundColor: 'rgb(255,255,255)'
            });
            break;
        default:
            anime({
                targets: (parentEl),
                borderRadius: 10,
                backgroundColor: 'rgb(141, 0, 0)'
            });
            break;
    }
    return roll;
}
function diceTemplate(parentEl, index){
    let containerEl=document.createElement("div");
    containerEl.className="dice";
    containerEl.id="dice-"+index;
    parentEl.appendChild(containerEl);

    for(let i=0; i<6; i++){
        //generates dice face PNGs
        diceFace(containerEl, i+1);
    }
    containerEl.onclick=function (e){
        rollHandler(index);
    }
    return containerEl;
}
function diceFace(parentEl, face){
    let imgEl=document.createElement("img");
    imgEl.setAttribute("src", "assets/"+face+".png");
    imgEl.className="face";
    imgEl.id="face-"+face;
    parentEl.appendChild(imgEl);
}
window.onload=function(){
    diceTemplate(document.getElementById("dicebox1"),"a");
    for(i=0; i<10; i++){
        diceTemplate(document.getElementById("dicebox2"),i);
    }
    document.getElementById("button").onclick=function(){
        for(i=0; i<10; i++){
            rollHandler(i);
        }
    }
    for(i=10; i<20; i++){
        diceTemplate(document.getElementById("dicebox3"),i);
    }
    count();
    document.getElementById("button2").onclick=function(){
        for(i=10; i<20; i++){
            if (rollHandler(i)===1){
                let target= ("#dice-"+i);
                anime({
                    targets: target,
                    scale: 0,
                    rotate: 720
                });
                $(target).hide(1000);
            }
        }
        console.log("done");
        count();
    }
    function count(){
        let total=10;
        for (i=10; i<20; i++){
            let target= ("#dice-"+i)
            if($(target).is(":hidden")){
                total--;
            }
        }
        console.log("number of visible dice: "+total)
        document.getElementById("math").innerHTML="Chances of getting at least one '6': "+((1-((5/6)**total))*100)+"%";
    }
    document.getElementById("button3").onclick=function(){
        while (document.getElementById("dicebox3").firstChild) {
            document.getElementById("dicebox3").removeChild(document.getElementById("dicebox3").firstChild);
        }
        for(i=10; i<20; i++){
            diceTemplate(document.getElementById("dicebox3"),i);
        }
        count();
    }
    let burn=anime.timeline({
        easing: 'easeOutExpo',
        duration: 750,
        autoplay:false
    });
    burn.add({
        targets: "div#card",
        backgroundColor: "#ff6600",
    })
    .add({
        targets: "div#card",
        backgroundColor: "#000000"
    });
    
    $("#test").hover(
        function(){
            $(this).css("background-color", "pink");
        },
        function(){
            $(this).css("background-color", "gray");
    });
    
    document.querySelector("#card").onclick=function(){
        console.log("click");
        burn.play();
    }
    
    let animation = anime({
        targets: '#stick',
        rotate: [-90, 90],
        duration: 3000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });  
    let animation2 = anime({
        targets: '#stick2',
        rotate: [0, 180], // from 60 to -60 degrees
        duration: 2500,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });
    let animation3 = anime({
        targets: '#stick3',
        rotate: [0, 180], // from 60 to -60 degrees
        duration: 2000,
        easing: 'easeInOutSine',
        direction: 'alternate',
        loop: true
    });  
    
    let eyes=document.querySelectorAll('.eyes');
    anime({
        targets: eyes,
        scaleY: 0,
        direction: 'alternate',
        duration: 500,
        loop: true
    });
}
