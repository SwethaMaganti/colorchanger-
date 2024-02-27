function change(){
    let le ="0123456789ABCDEF"
    color="#"
    for(i=0;i<6;i++){
        let x=Math.floor(Math.random()*16)
        color+=le[x]

    }
    document.body.style.background=color
}

