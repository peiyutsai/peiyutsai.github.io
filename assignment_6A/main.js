var priceline,receipt,quantity,glazing,cart,myCart;
var myCart=[];
let localStorage=window.localStorage;
function onLoad(){
    const myOrder = localStorage.getItem("order");
    if (myOrder===null){
        return;
    }
    else{
        const retrievedOrder=JSON.parse(myOrder);
        
    }
    document.getElementById("carticon").innerHTML=myOrder.orderQuantity;
}
window.onload=function(){
    /*processes live changes in the product screen*/
    quantity = parseInt(document.getElementById("quantity").value);
    glazing = document.getElementById("glazing").value;
    cart = document.getElementById("cart");
    price=quantity*3;
    cartsize = parseInt(document.getElementById("carticon").textContent);

    document.getElementById("quantity").oninput=function(){
        quantity = document.getElementById("quantity").value;
        document.getElementById("receipt").innerHTML="Your order: "+quantity+" "+document.getElementById("name").textContent+" buns with "+glazing+" glazing.";
        document.getElementById("price").innerHTML="Price: "+"$"+(quantity*3);
    }
    document.getElementById("glazing").onchange=function(){
        glazing = document.getElementById("glazing").value;
        document.getElementById("receipt").innerHTML="You ordered "+quantity+" "+document.getElementById("name").textContent+" buns with "+glazing+" glazing.";
    }
    /*storing orders*/
    cart.onclick=function(quantity,glazing,price){
        cartsize=parseInt(cartsize)+parseInt(quantity);
        document.getElementById("carticon").innerHTML=cartsize;
        const confirmedOrder = {orderQuantity:quantity, orderGlazing:glazing, orderPrice:price};
        localStorage.setItem('order',JSON.stringify(confirmedOrder));
    }
}
