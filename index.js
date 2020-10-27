window.onload = () => {

    let who = ['The dog','My granma','His turtle','My bird'];
    let what = ['eat','pissed','crushed','broked'];
    let when = ['my shoes','the window','my lunch','because I ate the cake'];

const getRandomExcuse = () => `${who[Math.floor(Math.random() * who.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}`;


    document.getElementById("excuse").innerHTML = getRandomExcuse();

}
