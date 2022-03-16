
let alph = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let key = ()=>{
    let arr = [];
    let arr2 = [];
    let ps = pass.split("");
    for(let i = 0;i < ps.length;i++){
        
    let aips = alph.indexOf(ps[i]);
        if((aips) || (aips === 0)){
       arr.push(aips);
       arr2.push(aips);
    }}
    for(let j = 2;j <10;j++){   
        for(let i = 0;i< arr2.length;i++){
            let trer = true;
            let tr = arr2[i] * j;
        for(let k = 0;k < arr.length;k++){
                if((tr === arr[k])||(tr > 58)){trer = false;}
             
            }   
            if(trer){arr.push(tr);}
    }}
    for(let j = 58;j > 2;j--){   
        for(let i = 0;i< arr2.length;i++){
            let trer = true;
            let tr = Math.floor(arr2[i] / j);
        for(let k = 0;k < arr.length;k++){
                if((tr === arr[k])||(tr > 58)){trer = false;}
             
            }   
            if(trer){arr.push(tr);}
    }}
    
    for(let j = 58;j > 2;j--){   
        for(let i = 0;i< arr2.length;i++){
            let trer = true;
            let tr = Math.ceil(arr2[i] / j);
        for(let k = 0;k < arr.length;k++){
                if((tr === arr[k])||(tr > 58)){trer = false;}
             
            }   
            if(trer){arr.push(tr);}
    }}
    const cntr = arr.length;
    for(let j = 2;j <10;j++){   
        for(let i = 0;i< cntr;i++){
            let trer = true;
            let tr = arr[i] * j;
        for(let k = 0;k < arr.length;k++){
                if((tr === arr[k])||(tr > 58)){trer = false;}
             
            }   
            if(trer){arr.push(tr);}
    }}
    
    const cntr2 = arr.length;
    for(let j = 2;j <10;j++){   
        for(let i = 0;i< cntr2;i++){
            let trer = true;
            let tr = arr[i] * j;
        for(let k = 0;k < arr.length;k++){
                if((tr === arr[k])||(tr > 58)){trer = false;}
             
            }   
            if(trer){arr.push(tr);}
    }}
    for(let i = 0;i< cntr2;i++){
        let trer = true;
        let tr = arr[i] + 1;
    for(let k = 0;k < arr.length;k++){
            if((tr === arr[k])||(tr > 58)){trer = false;}
         
        }   
        if(trer){arr.push(tr);}
}
arr = arr.splice(1,58);
 const cntr3 = arr.length;
for(let i = 0;i< cntr3;i++){
    let trer = true;
    let tr = arr[i] + 1;
for(let k = 0;k < arr.length;k++){
        if((tr === arr[k])||(tr > 58)){trer = false;}
     
    }   
    if(trer){arr.push(tr);}
}

const cntr4 = arr.length;
for(let i = 0;i< cntr4;i++){
    let trer = true;
    let tr = arr[i] + 1;
for(let k = 0;k < arr.length;k++){
        if((tr === arr[k])||(tr > 58)){trer = false;}
     
    }   
    if(trer){arr.push(tr);}
}
    localStorage.setItem("key",arr.toString())
}
    let gkey = localStorage.getItem("key");
    let get_key;
    if(gkey){
    get_key = gkey.split(",");
    for(let k = 0;k < get_key.length;k++){
        get_key[k] = parseInt(get_key[k],10);

    }  }

function sif(text){
    if(get_key){
    let arr = text.split("");
    let arr2 = [];
    for(let i = 0;i < arr.length;i++){
        if(alph.indexOf(arr[i].toLowerCase()) != -1){
        if(arr[i] === arr[i].toUpperCase()){
             arr[i] = arr[i].toLowerCase();
            arr2.push(alph[get_key[alph.indexOf(arr[i])]].toUpperCase());
        }else{
        arr2.push(alph[get_key[alph.indexOf(arr[i])]]);
    }}else{
    arr2.push(arr[i]);}}
    return arr2.join("");
}}
function desif(text){
    if(get_key){
    let arr = text.split("");
    let arr2 = [];
    for(let i = 0;i < arr.length;i++){
        if(alph.indexOf(arr[i].toLowerCase()) != -1){
        if(arr[i] === arr[i].toUpperCase()){
             arr[i] = arr[i].toLowerCase();
             arr2.push(alph[get_key.indexOf(alph.indexOf(arr[i]))].toUpperCase());
        }else{
            arr2.push(alph[get_key.indexOf(alph.indexOf(arr[i]))]);
    }}else{
        arr2.push(arr[i]);
        
    }
    
}
    return arr2.join("");}}

    gigachad = "\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠛⠛⠋⠉⠈⠉⠉⠉⠉⠛⠻⢿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿\n⣿⣿⣿⣿⡏⣀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿\n⣿⣿⣿⢏⣴⣿⣷⠀⠀⠀⠀⠀⢾⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿\n⣿⣿⣟⣾⣿⡟⠁⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⢢⠀⠀⠀⠀⠀⠀⠀⢸⣿\n⣿⣿⣿⣿⣟⠀⡴⠄⠀⠀⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⣿\n⣿⣿⣿⠟⠻⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⢴⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⣿\n⣿⣁⡀⠀⠀⢰⢠⣦⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣿⣿⣿⡄⠀⣴⣶⣿⡄⣿\n⣿⡋⠀⠀⠀⠎⢸⣿⡆⠀⠀⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⠗⢘⣿⣟⠛⠿⣼\n⣿⣿⠋⢀⡌⢰⣿⡿⢿⡀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⡇⠀⢸⣿⣿⣧⢀⣼\n⣿⣿⣷⢻⠄⠘⠛⠋⠛⠃⠀⠀⠀⠀⠀⢿⣧⠈⠉⠙⠛⠋⠀⠀⠀⣿⣿⣿⣿⣿\n⣿⣿⣧⠀⠈⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⠀⠀⠀⠀⢀⢃⠀⠀⢸⣿⣿⣿⣿\n⣿⣿⡿⠀⠴⢗⣠⣤⣴⡶⠶⠖⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡸⠀⣿⣿⣿⣿\n⣿⣿⣿⡀⢠⣾⣿⠏⠀⠠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⠉⠀⣿⣿⣿⣿\n⣿⣿⣿⣧⠈⢹⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿\n⣿⣿⣿⣿⡄⠈⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣦⣄⣀⣀⣀⣀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠙⣿⣿⡟⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠁⠀⠀⠹⣿⠃⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⢐⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⠿⠛⠉⠉⠁⠀⢻⣿⡇⠀⠀⠀⠀⠀⠀⢀⠈⣿⣿⡿⠉⠛⠛⠛⠉⠉\n⣿⡿⠋⠁⠀⠀⢀⣀⣠⡴⣸⣿⣇⡄⠀⠀⠀⠀⢀⡿⠄⠙⠛⠀⣀⣠⣤⣤⠄\n";
