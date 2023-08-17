console.log("andiiii");

let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerNavContainer = document.getElementById(
    "hamburger-nav-container"
  );

  if (!hamburgerIsOpen) {
    hamburgerNavContainer.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    hamburgerNavContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
}

