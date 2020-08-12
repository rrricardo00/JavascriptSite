// console.log(window.history.pushState(null, null, 'sobre.html'))

// window.addEventListener('popstate', () =>{
//     console.log('teste')
// })


const links = document.querySelectorAll('a');

links.forEach( link =>{
    link.addEventListener('click', handleClick);
});

async function fetchPage(url){
    const pageResponse = await fetch(url);
    const pagetext = await pageResponse.text();
    replaceContent(pagetext);
}

function replaceContent(newText){
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');
    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHtml.querySelector('title').innerText;
}

function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);

}
