function search_k(elem){
    if(event.key === 'Enter') {
        search(elem.value);        
    }

}
function search_z(){
    search(document.getElementById("search").value);
}

function search(val){
    if(val !== "x"){
    
    let arr;
    let res_str = [];
    let array = fetch('./data.json').then((resp) => {return resp.json();}).then((data) => {try{
        data = JSON.parse(desif(JSON.stringify(data)));
        let x = 0;
        for(x;x < data.length;x++){
            for(let j = 0;j < data[x].tags.length;j++){
                if(val.toLowerCase().match(data[x].tags[j])){
                    res_str.push(x);
                }}}
            let url = new URL(`${location.origin}/sub_pages/search.html`);
            url.searchParams.set("s",res_str.join("-"));

            console.log(url)
            location.href = url;}catch(err){
                console.log(err)
        document.getElementById("recode").innerText = "ввести пароль ещё раз";
    }
        
        });}else{
            let url = new URL(`${location.origin}/sub_pages/search.html`);
            url.searchParams.set("s","x");
            location.href = url;
        }
    }
            
