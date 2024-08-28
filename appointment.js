const doctorsByDepartment = {
  cardiologie: [],
  neurologie: [],
  kine: [{name:"Dr. Bengi",value:"bengi"}],
  dermathologie: [{name:"Dr. Ika",value:"ika"}],
  dentisterie: [],
  orl:[{name:" Dr. Mbambu",value:"mbambu"}],
  ophtamologie: [ {name:"Dr. Rebecca",value:"rebecca"}],
  orthopedie: [],
  internistes: [
    { name: "Dr BIMA", value: "bima" },
    { name: "Dr Kimpiatu", value: "kimpiatu" },
    { name: "Dr MAVINGA Aldo", value: "aldo" }
  ],
  gynecologie: [
    { name: "Dr Ndandu", value: "ndandu" },
    { name: "Dr Messia", value: "messia" },
    { name: "Dr IBANDA Blanchard", value: "blanchard" },
    { name: "Dr Nlemvo", value: "nlemvo" },
    {name:" Dr. Menayame",value:"menayame"}
  ],
  pédiatrie: [
    { name: "Dr Mabiala", value: "mabiala" },
    { name: "Dr Mbaki", value: "mbaki" },
    { name: "Dr MUDINGAYI Corinne", value: "corine" },
    { name: "Dr Luzolo", value: "luzolo" },
    {name:"Dr. Banza",value:"banza"}
  ],
  echographie: [
    { name: "Dr Ntunga", value: "ntunga" },
    { name: "Dr Mukulayanga", value: "mukulayanga" },
    { name: "Dr Mundemba", value: "mundemba" },
    { name: "Dr NTUNGA Mireille", value: "mireille" },
    { name: "Dr TSHULA", value: "tshula" }
  ]
};

function updateDoctors() {
  const departmentSelect = document.getElementById("service");
  const doctorSelect = document.getElementById("doctor");
  const selectedDepartment = departmentSelect.value;

  doctorSelect.innerHTML = '<option value="">Sélectionner un docteur</option>';

  if (selectedDepartment && doctorsByDepartment[selectedDepartment]) {
    const doctors = doctorsByDepartment[selectedDepartment];
    doctors.forEach(doctor => {
      const option = document.createElement("option");
      option.value = doctor.value;
      option.textContent = doctor.name;
      doctorSelect.appendChild(option);
    });
  }
}



  



function updateDoctors() {
  const departmentSelect = document.getElementById("service");
  const doctorSelect = document.getElementById("doctor");
  const selectedDepartment = departmentSelect.value;

  // Vider la liste des docteurs
  doctorSelect.innerHTML = '<option value="">Sélectionner un docteur</option>';

  if (selectedDepartment && doctorsByDepartment[selectedDepartment]) {
    const doctors = doctorsByDepartment[selectedDepartment];
    doctors.forEach(doctor => {
      const option = document.createElement("option");
      option.value = doctor.value;
      option.textContent = doctor.name;
      doctorSelect.appendChild(option);
    });
  }
}

