console.log("country.js");


const getData = () =>{
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(country => explore(country))
}

getData()

const explore = country => {
    
        const exploreContainer =  document.querySelector(".explore-Container")
        // console.log(exploreContainer)
        let get = []
            for(const countrys of country){
                get.push(countrys)
            }




            
            console.log(get[0].name.common)
            document.getElementById('search').addEventListener("click", function(){
                const searchBox = document.getElementById('searchBox')


            for(const countrys of country){   
                    if(searchBox.value=== countrys.name.common ){
                        const newDiv = document.createElement("div");
                        newDiv.innerHTML = `
                        <div class="my-2">
                        <img class="h-36 w-64 mx-auto" src="${get[0].flags.png}" alt="">
                        </div>
        
                            <h1 class="text-2xl text-center py-1"> Country Name : ${get[0].name.common}</h1>
        
                            <h3 class="font-medium">Official Name :${get[0].name.official}</h3>
                            <p>Capital : </p>
                            <p>Area :</p>
                            <p>Border With : </p>
                        `
                        exploreContainer.appendChild(newDiv)
                    }

                }   


        })

}


