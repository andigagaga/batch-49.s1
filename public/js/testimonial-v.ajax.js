const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open("get", "https://api.npoint.io/3cdfd7c188e19df1c183", true);

  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("loading error data");
    }
  };

  xhr.onerror = () => {
    reject("net work error");
  };

  xhr.send();
});

async function semuaTestimonial() {
  try {
    const response = await promise;
    let testimonialHTML = "";

    response.forEach(function (item) {
      testimonialHTML += ` <div class="testimonial">
      <img src="${item.image}" alt="testimonials.profil" />
      <p class="description">${item.quote}</p>
      <p class="author">- ${item.author}</p>
      <h4 class="author">${item.rating} <i class="fa-solid fa-star"></i></h4>
    </div>`;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}

semuaTestimonial();

async function filteredTestimonials(rating) {
  try {
    const response = await promise;
    let testimonialHTML = "";

    const testimoniaFiltered = response.filter(function (item) {
      return item.rating === rating;
    });

    if (testimoniaFiltered == 0) {
      testimonialHTML = `<h1>Data Not Found</h1>`;
    } else {
      testimoniaFiltered.forEach(function (item) {
        testimonialHTML += ` <div class="testimonial">
        <img src="${item.image}" alt="testimonials.profil" />
        <p class="description">${item.quote}</p>
        <p class="author">- ${item.author}</p>
        <h4 class="author">${item.rating} <i class="fa-solid fa-star"></i></h4>
        
      </div>`;
      });
    }
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
}
