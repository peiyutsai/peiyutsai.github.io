var priceline,receipt,quantity,glazing,cart;
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

window.onload=function(){
    //if storage isn't empty, get cart from localStorage and count through cart
    if (localStorage.length !== 0){
        myCart=JSON.parse(window.localStorage.getItem("orders"));
        document.getElementById("carticon").innerHTML=cartcounter();
    }
}
