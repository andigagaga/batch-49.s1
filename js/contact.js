// console.log("ggwww");

function submitedData(event) {
  event.preventDefault();

  let nama = document.getElementById("input-nama").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  if (nama == "") {
    return alert("Nama Harus Di isiii");
  } else if (email == "") {
    return alert("Email Harus Di isiii");
  } else if (phone == "") {
    return alert("Phone Harus Di isiii");
  } else if (subject == "") {
    return alert("Subject Harus Di Pilih");
  } else if (message == "") {
    return alert("Message Harus Di isiii");
  }

  console.log(nama, email, phone, subject, message);

  let emailReceiver = "andigagaga1@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body= Halo, Nama Saya ${nama} ${message} Silahkan Hubungi Saya Di Nomor ${phone} TERIMA KASIH`;
  a.click();

  let objecter = {
    nama,
    email,
    phone,
    subject,
    message,
  };

  console.log(objecter);

  // Melakukan refresh halaman setelah data dikirim
  setTimeout(function () {
    location.reload();
  }, 500); // Menunggu 1/2 detik sebelum melakukan refresh
}
