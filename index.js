let headphones ;
let mobiles ;
let laptops ;


const filter =document.getElementById('filter');
const button = document.getElementById('add');
const type =document.getElementById('selectbox');
button.addEventListener('click', function(event){
    let imageurl = document.getElementById('url').value
    let typeofimg = type.value;
        if(imageurl.length == 0){
            alert('image is not there')
        }else{
            filter.innerHTML += `
                <div class="image">
                <img src="${imageurl}" alt="img">
                <button id="delete">Delete</button>
                </div>

`
    }

})

function deleteimg (e){
    let deleted = e.target;
    deleted.closest("div").remove();
};

filter.addEventListener('click', deleteimg)


let filter_item =document.querySelectorAll('.image')
console.log(filter_item)
// const all = document.getElementById('all');
// const hphones =document.getElementById('hpones');
// const lap = document.getElementById('laptop');
// const mobile =document.getElementById('mobile');
// console.log(headphones, mobiles, laptops);
// hphones.addEventListener('click', function(filt){
    
// })

