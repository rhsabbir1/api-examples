const lodeQute = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (quote) =>{

    const block = document.getElementById('block')
    console.log(quote)
    block.innerHTML = quote.quote;
    
}

lodeQute()