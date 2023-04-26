let myfruitvalues=["Apple","Banana","Watermelon","Strawberry"];

let Creating=()=>
{
    let newone=document.getElementById("user")
    myfruitvalues.push(newone.value);
    alert(newone.value+" has been added in my shop")
    Instackvalue()
    // document.write(myfruitvalues)
}

const Instackvalue=()=>
{
    let hi="";

    myfruitvalues.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })

    document.getElementById('live').innerHTML="<table align='center'><thead><tr><th>My shop Fruits List</th></tr></thead><tbody>"+hi+"</tbody></table>";

}

var Updating=()=>
{
    var index=document.getElementById("user").value;
    let newvalue=prompt("please tell us update your new value "+myfruitvalues[index]);

    myfruitvalues[index]=newvalue;
    Instackvalue()
}

let OnRemoving=()=>
{
    var temp=document.getElementById("user").value;

    myfruitvalues=myfruitvalues.filter((data)=>
    {
        return data!==temp;
    })
    alert(temp+" has been deleted succesfullly done")
    Instackvalue()

}

let checking=()=>
{
    var temp=document.getElementById("user").value;

    for(index=0;index<myfruitvalues.length;index++)
    {
        if(myfruitvalues[index]===temp)
        {
            alert(temp+"has been founded your value is "+index)
            return index;
        }
    }

}