let dataProject = [];

function addProject(event) {
    event.preventDefault();


    let title = document.getElementById("input-project-name").value;
    let startDate = document.getElementById("startdate").value;
    let endDate = document.getElementById("enddate").value;
    let description = document.getElementById("input-project-description").value;
    let image = document.getElementById("input-project-image").files;

    // untuk menghitung durasi padat project
    let start = new Date(startDate);
    let end = new Date(endDate);
    
    let timeDistance = end - start;
    
    let distanceDays = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    let distanceMonths = Math.floor(timeDistance / (1000 * 60 * 60 * 24 * 30));
    let distanceYears = Math.floor(timeDistance / (1000 * 60 * 60 * 24 * 365));
    
    let distance = "";
    
    if (distanceYears >= 1) {
        distance = distanceYears + " tahun";
    } else if (distanceMonths >= 1) {
        distance = distanceMonths + " bulan";
    } else if (distanceDays >= 1) {
        distance = distanceDays + " hari";
    } else {
        distance = "Kurang dari 1 hari";
    }
    

    // variabel untuk data iconnya
    const nodeJs =  '<i class="fa-brands fa-node-js"></i>';
    const java =   '<i class="fa-brands fa-square-js"></i>';
    const react = '<i class="fa-brands fa-react"></i>';
    const vue = '<i class="fa-brands fa-vuejs"></i>';

    // untuk dapatkan value nya
    let cbnode = document.getElementById("nodejs").checked ? nodeJs : "";
    let cbjava = document.getElementById("nextjs").checked ? java : "";
    let cbreact = document.getElementById("reactjs").checked ? react : "";
    let cbvue = document.getElementById("vuejs").checked ? vue : "";

    // untuk url dari imagenya
     image = URL.createObjectURL(image[0]);
    console.log(image);

    // variabel object untuk data project
    let objectProject = {
        title,
        distance,
        cbnode,
        cbjava,
        cbreact,
        cbvue,
        description,
        image,
        postAt: new Date(),
    }

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
                        <img style="width: 100%;object-fit: cover;" src="${dataProject[index].image}">
                    </div>
                    <div class="project-desc">
                        <a href="projectdetail.html" style="text-decoration: none;">
                            <h1>${dataProject[index].title}</h1>
                        </a>
                        
                        <h6 style="margin-top: 0%; margin-bottom: 0%;">${getFullTime(dataProject[index].postAt)}</h6>
                        <p>durasi : ${dataProject[index].distance}</p>
                        <p style="text-align: justify;">${dataProject[index].description}</p>
                    </div>
                    <div class="project-icon">
                       ${dataProject[index].cbnode}
                       ${dataProject[index].cbjava}
                       ${dataProject[index].cbreact}
                       ${dataProject[index].cbvue}
                    </div>
                    <div class="project-button">
                        <button style="flex: 50%; background-color: black; color: white;">edit</button>
                        <button style="flex: 50%; margin-left: 5px;background-color: black; color: white;">delete</button>
                    </div>
                </div>`
    }
}

function getFullTime(time) {
    let bulan = ["Jan", "Feb","March", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct", "Nov","Desc"];
    // let minggu = ["week 1", "week 2", "week 3", "week 4"];
    let tanggal = time.getDate();
    let indexBulan = time.getMonth();
    let tahun = time.getFullYear();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }

      return `${tanggal} ${bulan[indexBulan]}  ${tahun} ${hours}:${minutes} WIB`;
    //   console.log(time);
 }