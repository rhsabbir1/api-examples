const loadData = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data.results[0]))
}
const displayData =(data) =>{
    console.log(data)
   
    document.getElementById('name').innerHTML = data.name.title +' '+ data.name.first +' '+ data.name.last ;
    document.getElementById('gander').innerHTML = data.gender;
    const img = document.getElementById('img')
    img.innerHTML =`
      <img src="${data.picture.large}" alt="">
    `
}


loadData()