if(document.getElementById('contact')){
    document.getElementById('contact').addEventListener('click', (event)=>{
        event.target.value = '+91 ';
    });
}

if(document.getElementById('search')){
    document.getElementById('search').addEventListener('click', (event)=>{
        document.getElementById('search1').style.display = 'none';
        document.getElementById('search2').style.display = 'flex';
    });
}