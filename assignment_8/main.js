//Asset templates
    //Dice Section
function refreshHandler(diceIndex){
    let parentEl="#dice-"+diceIndex;
    let refresh=anime({
        targets: parentEl,
        rotate: [0,-360],
        scale: 1,
        autoplay:false,
        backgroundColor: "rgb(65, 0, 0)",
        begin: function(){
            $(parentEl+" > .face").fadeOut();
            $(parentEl).show();
        },
        complete: function(){
            $(parentEl+"> #omen").fadeIn();
        }
    });
    refresh.restart;
    refresh.play();
    /*var refresh = anime.timeline({
      });
      refresh
      .add({
        targets: parentEl,
        rotate: -360,
        scale: 1,
        autoplay:false,
        backgroundColor: "rgb(65, 0, 0)",
        begin: function(){
            $(parentEl+" > .face").fadeOut();
            $(parentEl).show();
        },
        complete: function(){
            refresh.restart();
            $(parentEl+"> #omen").fadeIn();
        }
      });*/
}
function oneHandler(diceIndex){
    let parentEl="#dice-"+diceIndex;
    anime({
        targets: parentEl,
        rotate: 1080,
        delay: 1000,
        scale: 0,
        duration: 1000,
        complete: function(){
            $(parentEl).hide(500);
        }
    });
}
function rollHandler(diceIndex){
    let parentEl="#dice-"+diceIndex;
    let color=$(parentEl).css("background-color");
    //generates random number and attaches appropriate tag for later
    let roll=Math.floor((Math.random() * 6) + 1);
    tag = "#face-"+roll;
    //if dice is hidden, just skip it
    if ($(parentEl).css("display")==="none"){
        return 2;
    }
    //hides all tags and reveals img with correct tag
    var roller = anime.timeline({
        easing: 'easeOutExpo',
        duration: 500,
      });
      roller
      .add({
          //dice roll animation
        targets: parentEl,
        rotate: 720,
        borderRadius: [{value: 50},{value: 10}],
        backgroundColor: [{value: "rgb(59, 0, 0)"}, {value: color}],
        begin: function(){
            $(parentEl+" > .face").fadeOut();
        },
        complete: function(){
            roller.restart();
            $(parentEl+">"+tag).fadeIn();
            switch (roll){
                case 1:
                    anime({
                        targets: (parentEl),
                        borderRadius: 10,
                        easing: 'easeOutExpo',
                        backgroundColor: 'rgb(0,0,0)'
                    });
                    break;
                case 6:
                    anime({
                        targets: (parentEl),
                        borderRadius: 10,
                        easing: 'easeOutExpo',
                        backgroundColor: 'rgb(255,255,255)'
                    });
                    break;
                default:
                    anime({
                        targets: (parentEl),
                        borderRadius: 10,
                        easing: 'easeOutExpo',
                        backgroundColor: 'rgb(141, 0, 0)'
                    });
                    break;
            }
        }
      });
    return roll;
}
function diceTemplate(parentEl, index){
    //element generation here
    let containerEl=document.createElement("div");
    containerEl.className="dice";
    containerEl.id="dice-"+index;
    parentEl.appendChild(containerEl);
    let imgEl=document.createElement("img");
    imgEl.setAttribute("src", "assets/omen.png");
    imgEl.className="face";
    imgEl.id="omen";
    containerEl.appendChild(imgEl);
    $(imgEl).show();

    for(let i=0; i<6; i++){
        //generates dice face PNGs
        diceFace(containerEl, i+1);
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
    //Gameflow textChangers
function sceneChanger(chapter, sceneEl, resultEl, playerEl, gmEl){
    //Resets content
    anime({
        targets: resultEl,
        backgroundColor: "rgb(58, 41, 41)",
        opacity:[0,1],
        color: "#FFFFFF"
    });
    resultEl.firstElementChild.innerHTML = "Conflict Result";
    playerEl.innerHTML = "";
    gmEl.innerHTML = "";
    switch (parseInt(chapter)){
        case 1:
            sceneEl.innerHTML = "3 people are scavenging for food and supplies in the rubbled remains of a sunless Detroit. They've been starving for a while and the chilling air alongside their hunger has started to gnaw at them. Ideally, they'd find some non-perishable foods and clothing to deal with the growing cold in this abandoned department store that they're about to enter.";
            break;
        case 2:
            sceneEl.innerHTML = "The team noticed some raiders in the vicinity. In this lawless wasteland, the brutal and strong reign supreme. There are quite a few of them roaming about, so the team decided to try to sneak by without being detected.";
            break;
        case 3:
            sceneEl.innerHTML = "The team has sighted a source of clean water. It appears that there's a small creek right underneath this bridge, but it doesn't seem too easy to get down there. Luckily, the earthquakes have created a mound of broken concrete that they can scale, but it's still about 2 stories worth of loose rubble to scale. One of them volunteered to go down and refill the team's canteens and water bottles.";
            break;
        case 4:
            sceneEl.innerHTML = "The team encountered a small group of survivors. The survivors, being as desperate as they are, raised their guns and demanded that the team hand over any food or weapons that they have. The team's stubborn one, currently out of sight, intends to resist, even if it means drawing blood.";
            break;
        case 5:
            sceneEl.innerHTML = "The team followed an old man to his current shelter and was asked to wait outside until he's done cleaning up. Since the old man went in, the team has been waiting outside for almost 30 minutes. One of them called out. No response. One of them tested the door. No lock. They opened the door.";
            break;
        case 6:
            sceneEl.innerHTML = "THEY have found you. THEY, with strange tendrils piercing its skin and wrapping around its hind legs, snarled and let out a deafening, spine-chilling roar. Your team runs away from the beast that's chasing after you on all fours. It pounces towards you with monstrous strength and precision. Do something.";
            break;
        case 7:
            sceneEl.innerHTML = "A stranger pulled you and the rest of your team into a room as you were all running around the corner and signaled for you all to shut up. You hear THEM, now with more footsteps and voices, stepping about. You're not sure if they know you're here, but you pray to whatever higher power there may be that they leave you be just this once.";
            break;
        case 8:
            sceneEl.innerHTML = "Your friends managed to capitalize on the adrenaline and hotwire a car. You all scrambled into the vehicle and floored the gas pedal. You're not sure if you heard a howl or just a cacophonous chorus of screeches, but you now know that THEY hunt in packs. THEY are numerous. THEY are livid. THEY are coming for you. Your friend decides to use a firearm to fight off some of THEM that are getting dangerously close to the car.";
            break;
        case 9:
            sceneEl.innerHTML = "In a panic, you made a wrong turn and totalled the vehicle. As you struggle out of the now defunct pile of scrap metal, one of THEM managed to latch onto your friend's arm with its jaw. Your friend pulled out a bloodied hatchet and hacked away at THEIR head.";
            break;
        case 10:
            sceneEl.innerHTML = "At some point in time, you've managed to run so far that you swear you've somehow made it out of Michigan. You're the only one left. You look towards Lake Erie.";
            break;
        default:
            break;
    }
}
function winChanger(chapter, resultEl, playerEl, gmEl){
    anime({
        targets: resultEl,
        backgroundColor: "rgb(126, 65, 65)",
        opacity:[0,1],
        color: "#FFFFFF"
    });
    resultEl.firstElementChild.innerHTML = "Conflict Succeeded";
    switch (parseInt(chapter)){
        case 1:
            playerEl.innerHTML = "I searched around and noticed a pallet in the middle of the store. I flipped it over and found enough canned goods to sustain a group of three for 3 days. Must've been someone else's stash, but finders keepers I guess.";
            gmEl.innerHTML = "Wonderful! Though I'll probably make you roll to see how much of that stuff you can actually carry later.";
            break;
        case 2:
            playerEl.innerHTML = "I keep an eye out for the raiders and try to see if they're actively patrolling or not. When I do that, I noticed that there are broken bits of wall that are just tall enough for us to hide under if we crouch. We move carefully, but undetected.";
            gmEl.innerHTML = "So you do. As you crouch-walk your way against this short wall, you can hear that the raiders have found something of interest and have started to run away from your general area.";
            break;
        case 3:
            playerEl.innerHTML = "My character has actually done rock-climbing back in college. I used my expertise to mentally map a path down the rubble and carefully climb down.";
            gmEl.innerHTML = "How convenient for your backstory to directly aid you in this conflict. Nah, that's perfectly alright. You get down there like a champ.";
            break;
        case 4:
            playerEl.innerHTML = "I'm pivot about to find a good vantage point and I notice that I'm behind and above one of the survivors. I pull out my hatchet and silently signal towards my friends that I'm about to attack. I don't think they saw me, I don't care. I leap and wedge my axe into his neck.";
            gmEl.innerHTML = "Jesus Christ, I thought I was messed up. Okay, that guy's straight up dead I guess. Chill.";
            break;
        case 5:
            playerEl.innerHTML = "Um. Haha, turns out that the old man was just really tired and fell asleep. We all go inside and sit down to take a break ourselves.";
            gmEl.innerHTML = "You know what, sure, I'll allow that. A little comic relief helps before I kill you all.";
            break;
        case 6:
            playerEl.innerHTML = "I draw my gun and attempt to blast its head off. As it is pouncing towards me, it's somehow easier for me to hit it.";
            gmEl.innerHTML = "As THEY opened its jaws to attack, you notice that it strangely has no throat to speak of. You pull yourself back together and pulled the trigger. You fired multiple times into its gaping maw and THEY let out a horrific screech as THEY recoiled in pain. This will buy you enough time to escape, unless you have other plans.";
            break;
        case 7:
            playerEl.innerHTML = "I'll going to hold my breath and maybe wait until they leave.";
            gmEl.innerHTML = "You held your breath for what felt like an eternity, but eventually, they do leave.";
            break;
        case 8:
            playerEl.innerHTML = "I will protect those I care about. As if I were an action movie star, I strategically fire a bullet into every single one of THEM that gets too close.";
            gmEl.innerHTML = "And until your magazine runs dry, you do manage to ward off your pursuers. I do hope that you understand that there's way too many of THEM for THEM to stop chasing you, though.";
            break;
        case 9:
            playerEl.innerHTML = "I swung at it and got THEM off of me.";
            gmEl.innerHTML = "And you do. By some miracle, you swung at such a good angle with such force that you cleaved through its tough, alligator-like hide and cleanly cut straight into its obsidian eyes. As ichor discharged out of its wound, THEIR mouth snapped wide open, completely freeing you. It shrieked in pain and let out what almost seems to be a scream as it howled into the sky. It's time to go.";
            break;
        case 10:
            playerEl.innerHTML = "I don't want to walk anymore. I'm just going to sit here and hopefully see the sun rise.";
            gmEl.innerHTML = "A success. Well done and well deserved. As you look to the east, peering over the tranquil surface of the lake. You reminisce over what happened and hope that somehow this is all just a dream. Unfortunately, it is not. You are alone, and everyone who you cared about has perished. However, you notice a change in the color of the surface of the water. As you stand up to get a better view, disregarding any beast or monster that may have chased you before, you see from the east a glimmer of sunlight that stains the ocean with color and with hope. It's nowhere near enough light, but it does give you the idea that maybe, somewhere on this godforsaken planet, life can persevere. If you want, we can end it here, or we can have you keep going until THEY stop you for good.";
            break;
    }
}
function sortaWinChanger(chapter, resultEl, playerEl, gmEl){
    anime({
        targets: resultEl,
        backgroundColor: "rgb(255, 242, 242)",
        opacity:[0,1],
        color: "rgb(82, 0, 0)"
    });
    resultEl.firstElementChild.innerHTML = "Compromised Success";

    switch (parseInt(chapter)){
        case 1:
            playerEl.innerHTML = "I don't know how you ended up here.";
            gmEl.innerHTML = "This is not supposed to be mathematically possible.";
            break;
        case 2:
            playerEl.innerHTML = "I noticed that there are broken bits of wall that are just tall enough for us to hide under if we crouch.";
            gmEl.innerHTML = "You do move carefully and manage to cross the street without attracting any attention. BUT, your friend leaned on that wall a bit too much and pushed off a loose brick. The raiders did notice that and have begun walking towards the wall, but they don't notice you";
            break;
        case 3:
            playerEl.innerHTML = "I used my expertise to mentally map a path down the rubble climb down, carefully placing my feet on spots that I think are stable.";
            gmEl.innerHTML = "You climb down with fairly good speed. However, it's still pitch black out here and there's only so much you can see even with fully adjusted night-vision and a flashlight. Despite your meticulousness, you managed to step on a stray piece of rebar and throw the structural integrity of this mound of broken concrete out of balance. You let go and took a tumble, thankfully without injury, but your way back up to your friends has been destroyed. You'll have to find another way up and they'll have to find another way down.";
            break;
        case 4:
            playerEl.innerHTML = "I pull out my hatchet, leap down towards the men, and try to go for his neck.";
            gmEl.innerHTML = "As you go for your assault, one of the survivors does notice you and manages to alert your target. He manages to sidestep and get away with a light wound, though the survivors' group is now disorganized and distracted.";
            break;
        case 5:
            playerEl.innerHTML = "I'm going to carefully pull the door open and walk inside. I'm hoping that nothing's happened to him.";
            gmEl.innerHTML = "You're right that nothing's happened to him. You hear him crying as you walked into what seems to be his bedroom. You see him holding a framed photo in his chest, tears dousing his wrinkled hands. It seems that he has lost track of time. He notices you and angrily shouts, \"Wha! Didn't I tell you not to come in!\"";
            break;
        case 6:
            playerEl.innerHTML = "I draw my gun and try to fire all my shots into its mouth.";
            gmEl.innerHTML = "In that split second, you turned around and fired every bullet remaining in that gun of yours into the monster. Due to the circumstances, you missed all but one shot. That last bullet went straight through its upper jaw and out of its head. However, there's still a lot of momentum behind an 8ft tall monster, which basically tackles you with its sheer weight and puts you onto the ground. Though it's staggered, it's still on you, and it will, sooner or later, attack you.";
            break;
        case 7:
            playerEl.innerHTML = "I hope that they just leave. I hope that they lose interest in us and just leave.";
            gmEl.innerHTML = "Hope as you might, pray as you may, THEY just simply will not leave. However, none of THEM notice you and do not seem interested enough to look into the room that you are in. You are still stuck here in the middle of a pack of THEM, though.";
            break;
        case 8:
            playerEl.innerHTML = "I want to provide cover fire for my team and deter THEM from approaching.";
            gmEl.innerHTML = "You fire away into the pursuing pack of THEM. You were successful in keeping THEM away from your vehicle for a second before one of THEM lunged forward to where you are. It didn't hurt you, but it did rip away the rifle that you were using. What now, chief? There's still a few miles of this to go.";
            break;
        case 9:
            playerEl.innerHTML = "I hack into its... skull? to get it off me.";
            gmEl.innerHTML = "You tough out the pain in your arm and struck THEIR head with all your might. It felt the pain, but in that moment bit down even harder and essentially ripped away the flesh that is on your arm before scampering off with your axe lodged in its head. The pain is unbearable and you're losing a lot of blood, but you are, for now, left alone.";
            break;
        case 10:
            playerEl.innerHTML = "I want to see the sun rise.";
            gmEl.innerHTML = "Strangely enough, it's quiet. Much like the surface of the lake, the complete lack of anything around you calms you. As you sit by the shore and anticipated for something to come out of the horizon, you are reminded of the fact that it has been so long since the sun has last risen from its nightly slumber that you don't recall what a day is. However, in the distance, you swear you could see a string. It's thin and fragile, but it does seem to be the light of a flashlight probing about in the unforgiving darkness. Could there be hope?";
            break;
    }
}
function lossChanger(chapter, resultEl, playerEl, gmEl){
    anime({
        targets: resultEl,
        backgroundColor: "rgb(200,0,0)",
        color: "#000000",
        opacity:[0,1]
    });
    resultEl.firstElementChild.innerHTML = "Conflict Failed";
    switch (parseInt(chapter)){
        case 1:
            playerEl.innerHTML = "Oh dear. That's not good. Do I find anything?";
            gmEl.innerHTML = "You did. Not food though. As you searched about for supplies, you opened the door to a dressing room to maybe find a coat that someone may've left behind. You found a scared woman with a pistol drawn, aimed right at your forehead. A candle will now be extinguished as we move on to the next chapter.";
            break;
        case 2:
            playerEl.innerHTML = "I noticed that there are broken bits of wall that are just tall enough for us to hide under if we crouch, but I messed up my roll. What now?";
            gmEl.innerHTML = "You find that wall, alright. Your team make good progress, but you, being too alert about the raiders, didn't watch your step too well and stepped onto a shard of glass large enough to pierce your soles and wound your foot. You reflexively shouted out in pain and physically shot up above the wall, putting yourself in direct line of sight of these gunmen. Another candle goes out and a new chapter begins.";
            break;
        case 3:
            playerEl.innerHTML = "I carefully climb down.";
            gmEl.innerHTML = "And try as you might, it's still really dark. You're almost literally grasping about in the dark. What you don't notice is that you grasped onto a loose rock. As you lose balance, you panic and fall backwards. You tumble down the mound, getting yourself a couple scratches and a sprained ankle. When you recollected yourself, you noticed people. Armed. Another candle is lost and hope grows ever dimmer.";
            break;
        case 4:
            playerEl.innerHTML = "I try to leap down to attack.";
            gmEl.innerHTML = "It's a good plan on paper, but not against a bunch of impatient and vigilant gunmen. As you make your Hail Mary, a survivor notices you, raises his rifle, and plants a bullet straight into your shoulder. You fall onto the floor reeling in immense pain, but survivor you were going for struck your head with the butt of his gun and suddenly everything went dark. \"Anyone else feeling smart today?\", the man threatened as he placed the business end of his rifle atop your unconscious head. We pickin' up speed now.";
            break;
        case 5:
            playerEl.innerHTML = "I find the old man?";
            gmEl.innerHTML = "As you walk in and make a right into presumably his bedroom, you find the old man hanging from his neck in the jaws of a large snarling creature, blood dripping onto the floor. It is standing upright at about 8ft tall chewing on the old man's neck with its jagged teeth. Drenched in some tar-like substance and covered head to... claws in pulsing sinew and muscles that you cannot have possibly seen before, its mere presence frightens you. It, no..., THEY notice you. I hope you scavenged for running shoes, friends. Another light's going out.";
            break;
        case 6:
            playerEl.innerHTML = "I draw my gun and fire.";
            gmEl.innerHTML = "THEY are incredibly fast. As you thought of taking the beast on and turned back with your arm raised, you see a black blur swipe in front of you. When you tried to process why the gun isn't firing, you looked down and found your arm sputtering with blood on the floor. These things happen: You see THEM, claws still dripping with blood, about to pounce on you once more. You hear your friends scream at what just happened. You feel the pain kick in. We put out another candle.";
            break;
        case 7:
            playerEl.innerHTML = "I hope that they just leave. I hope that they lose interest in us and just leave.";
            gmEl.innerHTML = "Sometimes, luck and fate are as cruel as they come. Pray as you might, you swear you could hear the footsteps get further and further away. Suddenly, an arm bursts through the drywall behind you, punching a hole through the stranger's chest. Viscera and blood paints your face red as fear takes hold of your body. As his vitality quickly fades away, you could only stare helplessly as the stranger struggles to gasp for air. Much like this stranger's life, this candle will now be snuffed out.";
            break;
        case 8:
            playerEl.innerHTML = "I want to provide cover fire for my team.";
            gmEl.innerHTML = "I'm sorry for what I'm about to do to you. You stick your body out with your rifle in hand, firing out into the pack of THEM. Valiantly, you fought to keep THEM off of your last line of hope and your friends. However, one of THEM lunged at the side of the car that you weren't protecting and punctured a wheel. The vehicle spins out of control and throws you out of the car and off the highway. As you fall, maybe you can take solace in the fact that you fought to protect those you cherish. Before I move on to the next chapter, what are you thinking about as your vision turns black and your consciousness fades into the warm darkness that now envelops you?";
            break;
        case 9:
            playerEl.innerHTML = "I want this thing off of me.";
            gmEl.innerHTML = "You struck with all your might, but it doesn't even seem to make a dent. The beast doesn't even seem to acknowledge you as you bash into this thing's hide. Your eyes met with THEIRS, and it almost seems like THEY are telling you tacitly that it's over. With what little time you have left, you turned to your friend and let out a smile before being dragged away, never to be seen again.";
            break;
        case 10:
            playerEl.innerHTML = "I want to see the sun rise.";
            gmEl.innerHTML = "You sit by the shore completely spent and exhausted. You know that you're probably not leaving, so you stare straight into the horizon, hoping to find a light from a window, a flashlight, or maybe even the sun. As you hear the familiar snarls of THEM approach you, you continue to stare into the distance, begging for a miracle to happen. Thank you for tonight's story.";
            break;
    }
}

    //Cards
function burnHandler(cardIndex){
    let top="#top-"+cardIndex;
    let bottom="#bottom-"+cardIndex;
    $(bottom).show();
    var tl =anime.timeline({
        easing:"easeOutExpo"
    });
    tl.add({
        targets:top,
        backgroundColor: [
            {value: "#ff9900", duration: 200, delay: 500},
            {value: "#000000", duration: 200}
        ]
    })
    .add({
        targets:top,
        height: 0,
        begin: function(){
            $(top+">#topText"+cardIndex).fadeOut();
            
        },
        complete: function(){
            $(top).hide();
        }
    });
}
function fixHandler(cardIndex){
    let top="#top-"+cardIndex;
    let bottom="#bottom-"+cardIndex;
    anime({
        targets: top,
        backgroundColor: "#ffffff",
        height: 200,
        begin:function(){
            $(top).show();
            $(top+">#topText"+cardIndex).fadeIn();
        }
    });
}
function cardTemplate(parentEl, index, message, ashes){
    //A Card has 2 layers: A Top Layer and a Bottom Layer. The Bottom starts out hidden.
    //Also a Burn button and Repair button. Burn makes Top hidden and shows Bottom. Repair resets the card.
    let containerEl=document.createElement("div");
    containerEl.className="card";
    containerEl.id="card-"+index;
    parentEl.appendChild(containerEl);
    let bottomLayer=document.createElement("div");
    bottomLayer.className="bottom";
    bottomLayer.id="bottom-"+index;
    containerEl.appendChild(bottomLayer);
    let bottomText=document.createElement("p");
    bottomText.id="botText"+index;
    bottomText.innerHTML=ashes;
    bottomLayer.appendChild(bottomText);

    let topLayer=document.createElement("div");
    topLayer.className="top";
    topLayer.id="top-"+index;
    containerEl.appendChild(topLayer);
    let topText=document.createElement("p");
    topText.id="topText"+index;
    topText.innerHTML=message;
    topLayer.appendChild(topText);

    let burn=document.createElement("button");
    burn.id="burn-"+index;
    burn.innerHTML="Burn";
    containerEl.appendChild(burn);
    //temp
    burn.onclick=function(){
        burnHandler(index);
    }
    

    let repair=document.createElement("button");
    repair.id="repair-"+index;
    repair.innerHTML="Unburn";
    containerEl.appendChild(repair);
    //temp
    repair.onclick=function(){
        fixHandler(index);
    }

    return containerEl;
}

//Initializing because I hate Javascript.
window.onload=function(){
    //Ambient stuff
    anime({
        targets: '.gradient',
        opacity: [0.8, 1],
        duration: 10000,
        easing: 'easeInOutCirc',
        direction: 'alternate',
        loop: true
    });
    //Conflicts section
    for(i=0; i<10; i++){
        //Generates 10 dice
        diceTemplate(document.getElementById("conflicts"),i);
    }
    let conflictTarget=document.getElementById("conflictResult");
    document.getElementById("conflictRefresh").onclick=function(){
        //Resets dice
        for(i=0; i<10; i++){
            refreshHandler(i);
        }
        anime({
            targets: conflictTarget,
            backgroundColor: "rgb(58, 41, 41)",
            opacity:[0,1],
            color: "#FFFFFF"
        });
        $("#conflictResult>h2").html("Conflict Result");
    }
    document.getElementById("conflictButton").onclick=function(){
        //Recursive because it's currently the only way I know how to make these things take their god damn turns
        let i=0;
        
        let success=false;
        function timeout(start, finish, success) {
            if(start===finish){
                if (success){
                    $("#conflictResult>h2").html("Conflict Succeeded");
                    anime({
                        targets: conflictTarget,
                        backgroundColor: "rgb(126, 65, 65)",
                        color: "#FFFFFF"
                    });
                }
                else{
                    $("#conflictResult>h2").html("Conflict Failed");
                    anime({
                        targets: conflictTarget,
                        backgroundColor: "rgb(200,0,0)",
                        color: "#000000"
                    });
                }
                return success;
            }
            setTimeout(function () {
                switch (rollHandler(start)){
                    case 1:
                        break;
                    case 6:
                        success=true;
                        break;
                    default:
                        break;
                }
                timeout(start+1, finish, success);
            }, 700);
        }
        timeout(i,10,success);
    }

    //Gameflow section
    for(i=10; i<20; i++){
        diceTemplate(document.getElementById("flow1"),i);
    }
    var slider = document.getElementById("myRange");
    var count = document.getElementById("chaptercount");
    var candles = document.getElementById("candlecount");
    count.innerHTML = slider.value;
    slider.oninput = function() {
        dicecount=11-this.value;
        count.innerHTML = this.value;
        candles.innerHTML=dicecount;
        while($("#flow1>.dice").length!==dicecount){
            //moves Dice around
            if($("#flow1>.dice").length>dicecount){
                $("#flow2").append($("#flow1>.dice")[0]);
            }
            else{
                $("#flow1").append($("#flow2>.dice")[0]);
            }
        }
        for (i=10; i<20; i++){
            refreshHandler(i);
        }
        sceneChanger(count.innerHTML, document.getElementById("flowConsequence0"), document.getElementById("flowConsequence1"), document.getElementById("flowConsequence2"), document.getElementById("flowConsequence3"));
    }
    document.getElementById("flowButton").onclick=function(){
        //Recursive because it's currently the only way I know how to make these things take their god damn turns
        let success=false;
        function timeout(start, finish, success, player, gm) {
            if(start===finish){
                if (player===0){
                    lossChanger(count.innerHTML, document.getElementById("flowConsequence1"), document.getElementById("flowConsequence2"), document.getElementById("flowConsequence3"));
                    return success;
                }
                if (player>gm){
                    winChanger(count.innerHTML, document.getElementById("flowConsequence1"), document.getElementById("flowConsequence2"), document.getElementById("flowConsequence3"));
                }
                else{
                    sortaWinChanger(count.innerHTML, document.getElementById("flowConsequence1"), document.getElementById("flowConsequence2"), document.getElementById("flowConsequence3"));
                }
                return success;
            }
            setTimeout(function () {
                switch (rollHandler(start)){
                    case 1:
                        if(document.getElementById("dice-"+start).parentElement.id==="flow1"){
                            oneHandler(start);
                        }
                        break;
                    case 6:
                        if(document.getElementById("dice-"+start).parentElement.id==="flow1"){
                            success=true;
                            player++;
                        }
                        else{
                            gm++;
                        }
                        break;
                    default:
                        break;
                }
                timeout(start+1, finish, success, player, gm);
            }, 700);
        }
        timeout(10,20,success,0,0);
    }
    document.getElementById("flowRefresh").onclick=function(){
        for (i=10; i<20; i++){
            refreshHandler(i);
        }
        sceneChanger(count.innerHTML, document.getElementById("flowConsequence0"), document.getElementById("flowConsequence1"), document.getElementById("flowConsequence2"), document.getElementById("flowConsequence3"));
    }

    //Traits
    cardTemplate(document.getElementById("virtues"),0,"Erudite", "Nothing that John has read or learned could've prepared him for this moment. Psychology? Microbiology? The classroom is worthless in the apocalpyse. In a panic, John grabbed a knife and desperately struck back at the beast.");
    cardTemplate(document.getElementById("virtues"),1,"Patient", "Hunger. It wails for relief. For days, Laura has prioritized safety and her team above all else. However, the sensation of her stomach eating itself is unbearable. She clawed away at what remained of the gas station, without even acknowledging the bleeding from her fingers.");
    cardTemplate(document.getElementById("virtues"),2,"Devout", "Maryanne is truly puzzled. Why has her Lord bestowed upon her this suffering? What sick God could benefit from this widespread pain and agony? Does her piety even matter? She has prayed for weeks and months on end for things to get better, but now she prays to the hatchet that she'll lodge into some poor man's skull.");
    cardTemplate(document.getElementById("vices"),3,"Cowardly", "John has always been a runner. However, he couldn't stand to leave the only people who give a damn about him behind. He still ran, but this time to his friends.");
    cardTemplate(document.getElementById("vices"),4,"Derisive", "Laura's tendencies to ridicule and berate people for even the smallest of offenses typically earns her a bad reputation. However, as she cradles her dying child in the middle of the street, you can almost see the compassion in her face as she tries desperately to feed the poor bastard.");
    cardTemplate(document.getElementById("vices"),5,"Wrathful", "It's too late. Her hands are stained. No God she knows of will ever take her in. As she, savagely soaked in crimson, looked upon the other survivors, Maryanne cried for help.");
    cardTemplate(document.getElementById("moment"),6,"I will find hope...", "When I can find a quiet place to read.");
    cardTemplate(document.getElementById("moment"),7,"I will find hope...", "When I return home.");
    cardTemplate(document.getElementById("moment"),8,"I will find hope...", "When I comfort someone in a time of need.");
    cardTemplate(document.getElementById("brink"),9,"I have seen you...", "Lie. Your talent isn't actually in academia. That paper you published wasn't yours, but you fooled the people into believing that it was now, haven't you?");
    cardTemplate(document.getElementById("brink"),10,"I have seen you...", "Betray.");
    cardTemplate(document.getElementById("brink"),11,"I have seen you...", "Sacrifice. You've given up something in order to stave THEM off. What was it, Maryanne?");
    
    let animation = anime({
        targets: '#stick',
        rotate: [-90, 90],
        duration: 3000,
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
