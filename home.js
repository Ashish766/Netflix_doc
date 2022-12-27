function loadcoupon(){
    document.getElementsByClassName('coupon')[0].style.display = "block"
    document.getElementById('maincoupan').style.opacity = "0.2"
}


const closecoupon = () =>{
    document.getElementsByClassName('coupon')[0].style.display = "none"
    document.getElementById('maincoupan').style.opacity = "1"
}