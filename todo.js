let ul=document.getElementById("list-container");
function add()
{
    let listitem = document.createElement("li");
    let inputvalue = document.getElementById("input-content").value;
    if(inputvalue.trim()===""){
        alert("Please enter a task");
        return;
    }
    listitem.innerHTML ='<span class="append-text">' +inputvalue + '</span> <button class="delete-btn" onclick="Delete(event)">Delete</button>';

    ul.append(listitem);
}
function Delete(event)
{
    event.target.parentElement.remove();
}