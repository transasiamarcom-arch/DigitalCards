// ------------------------------
// Erba Digital Card Script
// ------------------------------

// Get employee ID from URL
const params = new URLSearchParams(window.location.search);
const employeeId = params.get("id");

// Load JSON
fetch("data/employees.json")
  .then(response => response.json())
  .then(data => {

    const employee = data.find(emp => emp.id === employeeId);

    if (!employee) {

      document.body.innerHTML = `
      <div style="text-align:center;margin-top:100px;font-family:Arial;">
          <h2>Employee Not Found</h2>
      </div>`;

      return;

    }

    // Employee Details
    document.getElementById("name").innerText = employee.name;
    document.getElementById("designation").innerText = employee.designation;
    document.getElementById("company").innerText = employee.company;

    // Employee Photo
    //if(employee.photo){
        //document.getElementById("photo").src =
        //"assets/employees/" + employee.photo;
    //}

    // Call Button
    document.getElementById("callBtn").href =
    "tel:" + employee.phone;

    // WhatsApp Button
    document.getElementById("waBtn").href =
    "https://wa.me/91" + employee.phone;

    // Email Button
    document.getElementById("emailBtn").href =
    "mailto:" + employee.email;

    // Maps
    document.getElementById("mapBtn").href =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(employee.address);

    // Save Contact
    document.getElementById("saveBtn").href =
    "vcf/" + employee.id + ".vcf";

    // QR Code
    document.getElementById("qr").src =
    "qr/" + employee.id + ".png";

  })
.catch(error => {

    console.log(error);

});
