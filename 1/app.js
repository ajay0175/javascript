let namebtn  = document.querySelector('button');
namebtn.addEventListener('click', showMsg);

function showMsg(){
    let name = prompt("Enter the name");
    namebtn.textContent = 'name is ' + name;
    alert("hello world!");
}