const num=["Thala","For", "A", "Reason"];


const dum=num.reduce((acc,curr)=>{
    return acc+ " " + curr;
},0 )
console.log(dum)