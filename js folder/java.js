

$(".desc").css('display','none')
$(".search-main").css('display','none')
$(".contact-us").css('display','none')
// $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth(), },1000)
$(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
$(".nav-bar-main").css('left', -$(".nav-tab-main").outerWidth())




$(".exit").click(function(){
    if($(".nav-bar-main").css('left') == "0px" ){

        $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
        $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)

        let lister = document.querySelectorAll(".lister")

for(let i=0; i < lister.length; i++){
    setTimeout(function(){
        console.log(i)
        $(lister[i]).slideUp(200)
       
        
       

    },i*200)
}
       
        
    }else{

        $(".nav-bar-main").animate({left: "0px"},1500)
        $(".exit").html(`<i class="fa-solid fa-xmark fs-1"></i>`)
        let lister = document.querySelectorAll(".lister")

for(let i=0; i < lister.length; i++){
    setTimeout(function(){
        console.log(i)
        $(lister[i]).slideDown(500)
       
        
       

    },i*500)
}
    }
    
})

















meal()
async function meal(){

    let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')

    let finalresponse = await response.json()
    console.log(finalresponse)

   
   
    

       
        
    
    
    

    let cartona = ``
    for(let i = 0; i < finalresponse.meals.length;i++){
        cartona += ` <div  id="${finalresponse.meals[i].idMeal}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalresponse.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalresponse.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)


 let fireContainer =  document.querySelectorAll(".fire-div")
 for(let i = 0 ; i < fireContainer.length; i++){
    fireContainer[i].addEventListener('click', function(){
       var IdRes = this.getAttribute("id")
       fulldesc(IdRes)
     })
 }


 
 
}



async function fulldesc(id){

    console.log(id)

    // response = await meal()
    
    showdesc()

    let GetterDesc = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let finalGetterFull = await GetterDesc.json()
     console.log(finalGetterFull)
    if(finalGetterFull.meals[0].strTags == null){
        finalGetterFull.meals[0].strTags = ""
    }
       
    

     let cartona = ``
     cartona += ` <div class="container pt-5">

     <div class="row">
       <div class="col-5">

         <div><img class="w-100 border border-3 rounded-4 border-black" src="${finalGetterFull.meals[0].strMealThumb}" alt=""></div>
         <p class="fw-bolder h3 text-white">${finalGetterFull.meals[0].strMeal}</p>

       </div>


       <div class="col-7">
         <h3 class="text-white">Instructions</h3>
         <p class="text-white">${finalGetterFull.meals[0].strInstructions}</p>
         <h3 class="text-white">Area : <span>${finalGetterFull.meals[0].strArea}</span></h3>
         <h3 class="d-flex flex-column text-white">Recipes : <span class="mt-3"><button class="btn btn-info">${finalGetterFull.meals[0].strIngredient1}</button>  <button class="btn btn-info">${finalGetterFull.meals[0].strIngredient2}</button>  <button class="btn btn-info">${finalGetterFull.meals[0].strIngredient3}</button>   <button class="btn btn-info">${finalGetterFull.meals[0].strIngredient4}</button>  <button class="btn btn-info">${finalGetterFull.meals[0].strIngredient5}</button></span></h2>
         <h3 class="text-white mt-4 d-flex flex-column">Tags : <span class="mt-3"><button class="btn btn-info">${finalGetterFull.meals[0].strTags}</button></span></h3>  
           
         <div class="mt-5">
         <a href="${finalGetterFull.meals[0].strSource}"><button class="btn btn-success">Source</button></a>
         <a href="${finalGetterFull.meals[0].strYoutube}"><button class="btn btn-success">Youtube</button></a>
         </div>
       </div>
     </div>





   </div>`

   $(".desc").html(cartona)

}


function showdesc(){
    $(".desc").css('display','block')
    $(".main-interface").css('display','none')
    

    
}


$(".search").click(function(){
    $(".search-main").css('display','block')
    $(".main-interface2").css('display','none')
    $(".contact-us").css('display','none')
    $(".desc").css('display','none')
    $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
    $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
})

$(".search-first").keyup(function(){
   
    Search($(".search-first").val())

})

$(".search-name").keyup(function(){
   
    SearchByName($(".search-name").val())

})

async function Search(first){

    let GetterSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${first}`)
    let finalGetterSearch = await GetterSearch.json()
     console.log(finalGetterSearch)

     let cartona = ``
     for(let i = 0; i < finalGetterSearch.meals.length; i++){
        cartona += `<div  id="${finalGetterSearch.meals[i].idMeal}" class=" fire-div2 col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterSearch.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterSearch.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
     }

     $(".search-cont").html(cartona)


     let fireContainer =  document.querySelectorAll(".fire-div2")
     for(let i = 0 ; i < fireContainer.length; i++){
        fireContainer[i].addEventListener('click', function(){
           var IdRes = this.getAttribute("id")
           fulldesc(IdRes)
         })
     }

}

async function SearchByName(name){

    let GetterSearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let finalGetterSearch = await GetterSearch.json()
     console.log(finalGetterSearch)

     let cartona = ``
     for(let i = 0; i < finalGetterSearch.meals.length; i++){
        cartona += `<div  id="${finalGetterSearch.meals[i].idMeal}" class=" fire-div2 col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterSearch.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterSearch.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
     }

     $(".search-cont").html(cartona)


     let fireContainer =  document.querySelectorAll(".fire-div2")
     for(let i = 0 ; i < fireContainer.length; i++){
        fireContainer[i].addEventListener('click', function(){
           var IdRes = this.getAttribute("id")
           fulldesc(IdRes)
         })
     }

}


async function category(){

    let GetterCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let finalGetterCategory = await GetterCategory.json()
     console.log(finalGetterCategory)



     let cartona = ``
    for(let i = 0; i < finalGetterCategory.categories.length;i++){
        cartona += ` <div  id="${finalGetterCategory.categories[i].strCategory}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterCategory.categories[i].strCategoryThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterCategory.categories[i].strCategory}</p>
        

      </div>
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)

    let fireContainer =  document.querySelectorAll(".fire-div")
    for(let i = 0 ; i < fireContainer.length; i++){
       fireContainer[i].addEventListener('click', function(){
          var IdRes = this.getAttribute("id")
          categoryDesc(IdRes)
        })
    }

}




async function categoryDesc(id){


    let GetterCategoryDesc = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
    let finalGetterCategoryDesc = await GetterCategoryDesc.json()
     console.log(finalGetterCategoryDesc)


     let cartona = ``
    for(let i = 0; i < finalGetterCategoryDesc.meals.length;i++){
        cartona += ` <div  id="${finalGetterCategoryDesc.meals[i].idMeal}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterCategoryDesc.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterCategoryDesc.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)

    let fireContainer =  document.querySelectorAll(".fire-div")
 for(let i = 0 ; i < fireContainer.length; i++){
    fireContainer[i].addEventListener('click', function(){
       var IdRes = this.getAttribute("id")
       fulldesc(IdRes)
     })
 }

}

$(".Categories").click(function(){
    $(".search-main").css('display','none')
    $(".contact-us").css('display','none')
    $(".main-interface2").css('display','block')
    category()
    $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
    $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
})




async function Area(){
    let GetterArea = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let finalGetterArea = await GetterArea.json()
     console.log(finalGetterArea)


     let cartona = ``
    for(let i = 0; i < finalGetterArea.meals.length;i++){
        cartona += ` <div  id="${finalGetterArea.meals[i].strArea}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100 d-flex flex-column justify-content-center align-items-center pointer">
        <i class="fa-solid fa-house  text-white fs-1"></i>
      

        <p class="fw-bold p-3 fs-3 text-white">${finalGetterArea.meals[i].strArea}</p>
        

      
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)


    let fireContainer =  document.querySelectorAll(".fire-div")
    for(let i = 0 ; i < fireContainer.length; i++){
       fireContainer[i].addEventListener('click', function(){
          var IdRes = this.getAttribute("id")
          AreaDesc(IdRes)
        })
    }


}



async function AreaDesc(name){

    let GetterAreaDesc = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    let finalGetterAreaDesc = await GetterAreaDesc.json()
     console.log(finalGetterAreaDesc)


     let cartona = ``
    for(let i = 0; i < finalGetterAreaDesc.meals.length;i++){
        cartona += ` <div  id="${finalGetterAreaDesc.meals[i].idMeal}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterAreaDesc.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterAreaDesc.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)

    let fireContainer =  document.querySelectorAll(".fire-div")
 for(let i = 0 ; i < fireContainer.length; i++){
    fireContainer[i].addEventListener('click', function(){
       var IdRes = this.getAttribute("id")
       fulldesc(IdRes)
     })
 }

}


$(".Area").click(function(){
    $(".search-main").css('display','none')
    $(".main-interface2").css('display','block')
    $(".contact-us").css('display','none')
    Area()
    $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
    $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
})





async function Ingredients(){
    let GetterIngredients = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let finalGetterIngredients = await GetterIngredients.json()
     console.log(finalGetterIngredients)


     let cartona = ``
    for(let i = 0; i < finalGetterIngredients.meals.length;i++){
        cartona += ` <div  id="${finalGetterIngredients.meals[i].strIngredient}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100 d-flex flex-column justify-content-center align-items-center pointer">
        <i class="fa-solid fa-drumstick-bite text-white fs-1"></i>
      

        <p class="fw-bold p-3 fs-3 text-center text-white">${finalGetterIngredients.meals[i].strIngredient}</p>
        

      
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)


    let fireContainer =  document.querySelectorAll(".fire-div")
    for(let i = 0 ; i < fireContainer.length; i++){
       fireContainer[i].addEventListener('click', function(){
          var IdRes = this.getAttribute("id")
          IngredientsDesc(IdRes)
        })
    }


}

async function IngredientsDesc(name){

    let GetterIngredientsDesc = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    let finalGetterIngredientsDesc = await GetterIngredientsDesc.json()
     console.log(finalGetterIngredientsDesc)


     let cartona = ``
    for(let i = 0; i < finalGetterIngredientsDesc.meals.length;i++){
        cartona += ` <div  id="${finalGetterIngredientsDesc.meals[i].idMeal}" class=" fire-div col-lg-3 col-md-4 col-sm-6 h-100 ">
        <div class=" position-relative img-hover overflow-hidden h-100">
        <img class="w-100 h-100 border rounded-4 border-black " src="${finalGetterIngredientsDesc.meals[i].strMealThumb}" alt="">
      <div  class=" bg-white-trans     border rounded-4 border-black d-flex flex-column justify-content-center">

        <p class="fw-bold p-3 fs-3">${finalGetterIngredientsDesc.meals[i].strMeal}</p>

      </div>
      
      </div> </div>`
    }

    
    $(".inner").html(cartona)

    let fireContainer =  document.querySelectorAll(".fire-div")
 for(let i = 0 ; i < fireContainer.length; i++){
    fireContainer[i].addEventListener('click', function(){
       var IdRes = this.getAttribute("id")
       fulldesc(IdRes)
     })
 }

}


$(".Ingredients").click(function(){
    $(".search-main").css('display','none')
    $(".main-interface2").css('display','block')
    $(".contact-us").css('display','none')
    Ingredients()
    $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
    $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
})

$(".Contact").click(function(){
    
    contactUs()
    $(".nav-bar-main").animate({left: -$(".nav-tab-main").outerWidth()},1500)
    $(".exit").html(`<i class="fa-solid fa-bars fs-1"></i>`)
})



function contactUs(){
    $(".contact-us").css('display','block')
    $(".search-main").css('display','none')
    $(".main-interface2").css('display','none')
    $(".warning-name").css('display', 'none')
    $(".warning-emial").css('display', 'none')
    $(".warning-phone").css('display', 'none')
    $(".warning-age").css('display', 'none')
    $(".warning-pass").css('display', 'none')
    $(".warning-Rpass").css('display', 'none')
    $(".submit-btn").css('opacity', '0.6')
    $(".submit-btn").css('cursor', 'not-allowed')


    $(".Yname").keyup(function(){
        let yourName = $(".Yname").val()
        
        let regex = /^([a-zA-Z\s]+)$/
        if(regex.test(yourName)){
            $(".warning-name").css('display', 'none')
            
        }else{
            $(".warning-name").css('display', 'block')
            
        }
    })


    $(".Yemail").keyup(function(){
        let youremail = $(".Yemail").val()
        console.log(youremail)
        let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(regex.test(youremail)){
            $(".warning-emial").css('display', 'none')
            
        }else{
            $(".warning-emial").css('display', 'block')
            
        }
    })

    $(".Yphone").keyup(function(){
        let yourphone = $(".Yphone").val()
        console.log(yourphone)
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if(regex.test(yourphone)){
            $(".warning-phone").css('display', 'none')
            
        }else{
            $(".warning-phone").css('display', 'block')
            
        }
    })
    

    $(".YAge").keyup(function(){
        let yourage = $(".YAge").val()
        
        let regex = /^(1[89]|[2-9]\d)$/
        if(regex.test(yourage)){
            $(".warning-age").css('display', 'none')
            
        }else{
            $(".warning-age").css('display', 'block')
            
        }
    })


    $(".Ypass").keyup(function(){
        let yourpass = $(".Ypass").val()
        
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        if(regex.test(yourpass)){
            $(".warning-pass").css('display', 'none')
           
        }else{
            $(".warning-pass").css('display', 'block')
            
        }
    })


    $(".YRpass").keyup(function(){
        let yourRpass = $(".YRpass").val()
        
        let regex = $(".Ypass").val()
        if(regex == yourRpass){
            $(".warning-Rpass").css('display', 'none')
            done()
           
        }else{
            $(".warning-Rpass").css('display', 'block')
            
        }
    })

    
    
    function done(){

        setInterval(function(){
            if( $(".warning-Rpass").css('display') == "none" &&  $(".warning-pass").css('display')  == "none" &&  $(".warning-age").css('display')  == "none" &&  $(".warning-phone").css('display')  == "none" &&  $(".warning-emial").css('display')  == "none" &&  $(".warning-name").css('display')  == "none" ){
                
                $(".submit-btn").css('opacity', '1')
                $(".submit-btn").css('cursor', 'pointer')
            }else{
                $(".submit-btn").css('opacity', '0.6')
                $(".submit-btn").css('cursor', 'not-allowed')
            }
    
            
            
        },1000)

    }
    

    
}

// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata