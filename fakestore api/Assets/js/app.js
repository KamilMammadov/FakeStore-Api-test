let btn =document.getElementById('btn');

btn.onclick=function(){
    fetch('https://fakestoreapi.com/products')
    
    .then(resp=>resp.json())
    .then(data=>{
        let elements = '';

        data.forEach(el => {
            elements+=`
            <div class="col-lg-4">
            <div class="card" ">
                <img src=${el.image} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${el.title}</h5>
                  <p class="card-text">${el.description}</p>
                  <a href="#" class="btn btn-primary">BUY</a>
                </div>
              </div>
        </div>
            `
    
            document.getElementById('cards').innerHTML=elements;
        })
    })

   
            .catch(error=>console.log(error))


}