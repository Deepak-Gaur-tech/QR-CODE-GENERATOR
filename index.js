

let input=document.querySelector("#type");

let btn=document.querySelector("#btn");

let img=document.querySelector("#img");



btn.addEventListener("click",function (){
    let item=input.value;
    input.value=""
    console.log(item);
    
    
    if(!item){
        alert('Please Inter a valid URL');
        
        return;
    }else{

        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item}`
        
        img.alt=`QR code for ${item}`

        
    }
    
})