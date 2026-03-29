const form = document.getElementById("donorForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let donor = {
name: document.getElementById("name").value,
blood: document.getElementById("blood").value,
organ: document.getElementById("organ").value,
city: document.getElementById("city").value,
phone: document.getElementById("phone").value
};

let donors = JSON.parse(localStorage.getItem("donors")) || [];

donors.push(donor);

localStorage.setItem("donors", JSON.stringify(donors));

alert("Donor Registered Successfully");

form.reset();

});
}

const donorTable = document.getElementById("donorTable");

if(donorTable){

let donors = JSON.parse(localStorage.getItem("donors")) || [];

donors.forEach(d => {

let row = `<tr>
<td>${d.name}</td>
<td>${d.blood}</td>
<td>${d.organ}</td>
<td>${d.city}</td>
<td>${d.phone}</td>
</tr>`;

donorTable.innerHTML += row;

});

}