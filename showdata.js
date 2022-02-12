


async function showdata(url){
try{
    
    let res=await fetch(url)
    let data= await res.json(url)
    return data
}
catch(error){
console.log(error)
}

}
export default showdata