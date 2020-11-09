var priceline,receipt,quantity,glazing,cart;
let localStorage=window.localStorage;
let myCart=[];

function storesomething(){
    //myCart is an array of Order objects and is saved in localStorage as "orders"
    //each Order object specifies the bun type, an amount ordered, the glazing chosen, and the total price.
    //something like {orderType: Original, orderQuantity:5, orderGlazing:None, orderPrice: 15} 
    let confirmedOrder = {orderType:type, orderQuantity:quantity, orderGlazing:glazing, orderPrice:price};
    myCart.push(confirmedOrder);
    window.localStorage.setItem("orders", JSON.stringify(myCart));
}

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

function parse(){
    /*processes live changes in the product screen*/
    quantity = parseInt(document.getElementById("quantity").value);
    glazing = document.getElementById("glazing").value;
    cart = document.getElementById("cart");
    type = document.getElementById("name").textContent;
    price=quantity*3;

    document.getElementById("quantity").oninput=function(){
        quantity = document.getElementById("quantity").value;
        price=quantity*3;
        document.getElementById("receipt").innerHTML="Your order: "+quantity+" "+type+" bun(s) with "+glazing+" glazing.";
        document.getElementById("price").innerHTML="Price: "+"$"+(quantity*3);
    }
    document.getElementById("glazing").onchange=function(){
        glazing = document.getElementById("glazing").value;
        document.getElementById("receipt").innerHTML="Your order: "+quantity+" "+type+" bun(s) with "+glazing+" glazing.";
    }
    
    /*storing orders when add to cart button is clicked. also recounts cart size*/
    cart.onclick=function(){
        storesomething();
        document.getElementById("carticon").innerHTML=cartcounter();
    }
}

window.onload=function(){
    //if storage isn't empty, get cart from localStorage and count through cart
    if (localStorage.length !== 0){
        myCart=JSON.parse(window.localStorage.getItem("orders"));
        document.getElementById("carticon").innerHTML=cartcounter();
    }
    parse();
}
