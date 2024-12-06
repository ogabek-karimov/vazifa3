
let user = prompt("Nechta qo'y sanamoqchisiz? (Son kiriting):");
if(user === null ){
    alert("amal bajarilmadi") ;
    
}
    if ( user === "" || isNaN(user)) {
        alert("Siz matn kiritdingiz, iltimos son kiriting!!!");
    } else {
        number = user; 
        let total = ""; 
    
        for (let i = 1; i <= number; i++) {
            if (i === 1) {
               total += `${i} qo'y...`;
            } else {
               total += `${i} qo'ylar...`; 
            }
        }
    
        alert(total); 
    }


    

