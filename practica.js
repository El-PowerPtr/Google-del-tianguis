async function robar(){
        let texto = await fetch('https://eltoque.com/');    
        let leer = await texto.text();
        let lector = new DOMParser();
        let dolares = await lector.parseFromString(leer,'text/html').querySelectorAll('.price-text ')[1];
        console.log(dolares.textContent);
        let precio_dolar = document.querySelector('#precio_dolar');
        precio_dolar.textContent = dolares.textContent;
    }
let bar = document.querySelector('#magic');
bar.addEventListener('submit', e => {
    try{          
        e.preventDefault();
        const text = document.querySelector("#searchbar").value;
        console.log(text);
        const Twitter = [new URL('https://twitter.com/search?'),'q'];
        const Google = [new URL('https://google.com/search?'),'q'];
        const Wikipedia = [new URL('https://es.wikipedia.org/w/index.php?'),'search'];
        const Pornhub = [new URL('https://es.pornhub.com/video/search?'),'search'];
        const Youtube = [new URL('https://www.youtube.com/results?'),'search_query'];

        let roulette = [Google, Google, Google,Youtube,Youtube, Wikipedia, Pornhub, Twitter, Twitter];
        let shot = Math.floor(Math.random() * 9);
        let variable = roulette[shot][0];
        variable.searchParams.set( roulette[shot][1], text);

        window.location.href = variable;
    }
    catch(a){
        console.log(a);
    }
});
let button = document.getElementById('acceder');
button.addEventListener('click',e=> {
    try{
        
        let photo = document.createElement('img');
        photo.setAttribute('src','Sin título.png');
        photo.setAttribute('id','pfp');
        console.log(photo);
        Object.assign(photo.style, {
            width: 'fit-content',
            height: '1.5em',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'inline-flex',
            
        });
        let span = document.querySelector('.other_menu');
        span.appendChild(photo);
        span.removeChild(button);    
    }
    catch(n){
        console.error(n);
    }
});
robar();
