var priceline,receipt,quantity,glazing,cart,trash;
let localStorage=window.localStorage;
let myCart=[];

//parses through each "order" in the "orders" array.
function cartcounter(){
    let current=JSON.parse(localStorage.getItem("orders"));
    let total=0;
    var order;
    for (order of current){
        total+= parseInt(order.orderQuantity);
    }
    return total;
}

function scout(){
    //looks for user actions
    trash = document.getElementById("trash");
    trash.onclick=function(){
        if(localStorage.length===0){
            alert("Hey, be careful now. You could topple your cart and hurt somebody.");
        }
        else{
            alert("Clean up on Aisle 5! Great job, idiot, you toppled your cart and now the ants have your buns!");
            localStorage.removeItem("orders");
            document.getElementById("carticon").innerHTML=0;
            document.getElementById("disclaimer").innerHTML="Look at the loser with the empty cart! HAH!";
        }
    }
}
//kinda just copied TA's code, but I repurposed it to prove that I kinda know what I'm doing
//builds a new order container for every object in the localStorage array
function cartbuilder(){
    let current=JSON.parse(localStorage.getItem("orders"));
    var order;
    total=0;
    for (order of current){
        orderTemplate("parentbox",order.orderType,order.orderGlazing,order.orderQuantity,order.orderPrice,total);
        total+=1;
    }
}

function orderTemplate(parentEl,buntype, bunglaze, bunamount, bunprice,index) {
    //creates a new order container and shoves it in the parent container
    let divContainer = document.createElement("div");
    divContainer.className = "order";
    document.getElementById(parentEl).appendChild(divContainer);
    //order info
    let type = document.createElement("h1");
    type.innerHTML = buntype;
    divContainer.appendChild(type);
    let glaze = document.createElement("h2");
    glaze.innerHTML = "with "+bunglaze+" glazing";
    divContainer.appendChild(glaze);
    let amount = document.createElement("h3");
    amount.innerHTML = "x"+bunamount;
    divContainer.appendChild(amount);
    let price = document.createElement("h4");
    price.innerHTML = "$"+parseInt(bunprice).toFixed(2);
    divContainer.appendChild(price);
    //delete item functionality
    let dispose = document.createElement("h5");
    dispose.innerHTML="Return to Shelf";
    divContainer.appendChild(dispose);

    addDisposeHandler(dispose,index);

    return divContainer;
}

function addDisposeHandler(dispose, index) {
    // Step 1. Makes "dispose" element clickable
    // Step 2. Using the "clicked" class (see style.css), rewrite myCart with all items except item[index]
    // Step 3. Removes the proper element from the order container

    dispose.onclick = function(e) {
        e.preventDefault();
        if((myCart.length-1)===0){
            //kill myCart and bail from function if there's only 1 item left
            localStorage.removeItem("orders");
            myCart=[];
            document.getElementById("carticon").innerHTML=0;
            document.getElementById("disclaimer").innerHTML="Aight now, let's go back shopping!";
            document.getElementsByClassName("order")[0].remove();
            return 0;
        }
        let transferCart=[];
        for (i=0; i<myCart.length; i++){
            if (i===index){continue;}
            let confirmedOrder = myCart[i];
            transferCart.push(confirmedOrder);
        }
        myCart=transferCart;
        window.localStorage.setItem("orders", JSON.stringify(myCart));
        while(document.getElementsByClassName("order").length!==0){
            document.getElementsByClassName("order")[0].remove();
        }
        cartbuilder();
        document.getElementById("carticon").innerHTML=cartcounter();
    }
}

window.onload=function(){
    //if storage isn't empty, get cart from localStorage and count through cart
    //also, starts spawning order containers
    if (localStorage.length !== 0){
        myCart=JSON.parse(window.localStorage.getItem("orders"));
        document.getElementById("carticon").innerHTML=cartcounter();
        cartbuilder();
    }
    else{
        document.getElementById("disclaimer").innerHTML="Your cart is empty! Aren't you hungry?";
    }
    scout();
}
