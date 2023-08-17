let dataProject = [];

function addProject(event) {
  event.preventDefault();

  let title = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("startdate").value;
  let endDate = document.getElementById("enddate").value;
  let description = document.getElementById("input-project-description").value;
  let image = document.getElementById("input-project-image").files;

  if (
    title === "" ||
    startDate === "" ||
    endDate === "" ||
    description === "" ||
    image.length === 0
  ) {
    return alert("Harap isi semua kolom dan pilih sebuah gambar.");
    // untuk peringatan kolom harus di isi semua
  }

  // untuk menghitung durasi padat project
  let start = new Date(startDate);
  let end = new Date(endDate);

  // validasi/kondisi start dan end date
  if (end < start) {
    return alert("Start Dan End Datenya Salah Tidak Di Ketahui");
  }

  let timeDistance = end - start;

let distanceDays = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
let distanceMonths = Math.floor(distanceDays / 30); // Menghitung jumlah bulan secara kasar
let distanceYears = Math.floor(distanceMonths / 12); // Menghitung jumlah tahun secara kasar

let remainingMonths = distanceMonths % 12; // Bulan yang tersisa setelah dihitung dalam tahun
let remainingDays = distanceDays % 30; // Hari yang tersisa setelah dihitung dalam bulan

let distance = "";

if (distanceYears >= 1) {
  if (remainingMonths >= 1) {
    distance = distanceYears + " tahun " + remainingMonths + " bulan";
  } else {
    distance = distanceYears + " tahun";
  }
} else if (remainingMonths >= 1) {
  if (remainingDays >= 1) {
    distance = remainingMonths + " bulan " + remainingDays + " hari";
  } else {
    distance = remainingMonths + " bulan";
  }
} else if (remainingDays >= 1) {
  distance = remainingDays + " hari";
} else {
  distance = "Kurang dari 1 hari";
}


  //
  const nodeJs = `<i class="fa-brands fa-node-js"></i>`;
  const nextJs = `<i class="fa-brands fa-square-js"></i>`;
  const reactJs = `<i class="fa-brands fa-react"></i>`;
  const vueJs = `<i class="fa-brands fa-vuejs"></i>`;

  // untuk element html nya
  let cbNode = document.getElementById("nodejs").checked ? nodeJs : "";
  let cbNext = document.getElementById("nextjs").checked ? nextJs : "";
  let cbReact = document.getElementById("reactjs").checked ? reactJs : "";
  let cbVue = document.getElementById("vuejs").checked ? vueJs : "";

  // untuk url dari imagenya
  image = URL.createObjectURL(image[0]);
  console.log(image);

  // variabel object untuk data project
  let objectProject = {
    title,
    distance,
    description,
    cbNode,
    cbNext,
    cbReact,
    cbVue,
    image,
    postAt: new Date(),
  };

  dataProject.push(objectProject);
  console.log(objectProject);
  console.log(dataProject);

  renderProject();
}

// untuk menampilkan data kita pas nge submit
function renderProject() {
  document.getElementById("mockup").innerHTML = "";

  for (let index = 0; index < dataProject.length; index++) {
    document.getElementById("mockup").innerHTML += `
        <div class="card-project">
                    <div class="project-image">
                        <img style="width: 100%;object-fit: cover;" src="${
                          dataProject[index].image
                        }">
                    </div>
                    <div class="project-desc">
                        <a href="projectdetail.html" style="text-decoration: none;">
                            <h1>${dataProject[index].title}</h1>
                        </a>
                        
                        <h6 style="margin-top: 0%; margin-bottom: 0%;">${getFullTime(
                          dataProject[index].postAt
                        )}</h6>
                        <p>durasi : ${dataProject[index].distance}</p>
                        <p style="text-align: justify;">${
                          dataProject[index].description
                        }</p>
                    </div>
                    <div class="project-icon">
                    ${dataProject[index].cbNode}
                    ${dataProject[index].cbNext}
                    ${dataProject[index].cbReact}
                    ${dataProject[index].cbVue}
                    </div>
                    <div class="project-button">
                        <button style="flex: 50%; background-color: black; color: white;">edit</button>
                        <button style="flex: 50%; margin-left: 5px;background-color: black; color: white;">delete</button>
                    </div>
                </div>`;
  }
}

function getFullTime(time) {
  let bulan = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Desc",
  ];
  let tanggal = time.getDate();
  let indexBulan = time.getMonth();
  let tahun = time.getFullYear();
  let jam = time.getHours();
  let minutes = time.getMinutes();

  if (jam < 10) {
    jam = "0" + jam;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${tanggal} ${bulan[indexBulan]}  ${tahun} ${jam}:${minutes} WIB`;
  //   console.log(time);
}

function newFunction(parameter1, parameter2) {
  return;
}
