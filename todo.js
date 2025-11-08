let ul=document.getElementById("list-container");
function add()
{
    let listitem = document.createElement("li");
    let inputvalue = document.getElementById("input-content").value;
    if(inputvalue.trim()===""){
        alert("Please enter a task");
        return;
    }
    listitem.innerHTML ='<button class="check-btn" onclick="toggleStrike(event)">✅</button><span class="append-text">' +inputvalue + '</span> <button class="delete-btn" onclick="Delete(event)">Delete</button>';

    ul.append(listitem);
    document.getElementById("input-content").value = "";
}
function Delete(event)
{
    event.target.parentElement.remove();
}
function toggleStrike(event)
{
    let textSpan = event.target.nextElementSibling;
    textSpan.classList.toggle("strikethrough");
}
