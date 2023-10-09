
    const buttonPlus=Array.from(document.getElementsByClassName("btnplus"))
    const buttonMine=Array.from(document.getElementsByClassName("btnmine"))
    const buutdelete=Array.from(document.getElementsByClassName("delete"))
    const fav=Array.from(document.getElementsByClassName("fa fa-heart"))
    /*const butfav=Array.from(document.getElementsByClassName("favourBuuton"))*/
    console.log(fav,'favourite')
    console.log(buutdelete,"deleteeee")
    const pro=Array.from(document.getElementsByClassName("product"))
    console.log(pro,"pro")


    for(let i=0;i<fav.length;i++){
        fav[i].addEventListener("click",function(){
        switch (fav[i].style.color) {
          case fav[i].style.color="black":
            fav[i].style.color="green"
            
            break;
        
          default:fav[i].style.color="black"
            break;
        }
         
        
       
        

      })

    }
    const Order=document.getElementById("Confirm")
    console.log(Order,"confirm")

     
       Order.addEventListener("click",function(){
        alert("your order has been confirmed")
       })
   
    
    
  
    for(let i=0;i<buttonPlus.length;i++){
            console.log(buttonPlus[i].previousElementSibling.innerHTML)
            buttonPlus[i].addEventListener("click",function(){
            buttonPlus[i].previousElementSibling.innerHTML ++
            somme()
        })

    }
    
    for(let j=0;j<buttonMine.length;j++){
            console.log(buttonMine[j].nextElementSibling.innerHTML)
    
            buttonMine[j].addEventListener("click",function(){
                if (buttonMine[j].nextElementSibling.innerHTML>0) {
                    buttonMine[j].nextElementSibling.innerHTML --
                    
                }
                somme()
              
    })
       
}
    for(let i=0;i<buutdelete.length;i++){
        buutdelete[i].addEventListener("click",function(){
        pro[i].remove()
        somme()
      })
    }


    function somme(){
      const priceValue=Array.from(document.getElementsByClassName("price"))
      const quant=Array.from(document.getElementsByClassName("quantity"))
      const tot=document.getElementById("Total")
      console.log(tot.innerHTML,"helooo")
        sum=0;
        for (let i=0;i<priceValue.length;i++){
        sum=sum+(priceValue[i].innerHTML*quant[i].innerHTML)




    }
      return  tot.innerHTML=sum
       
    }

  
    
    


    
  
   
  