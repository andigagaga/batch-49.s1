// console.log("andiiloooo");

// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // METHOD ABSTRACK penampung erorr nya
//   get author() {
//     throw new Error("get author() erorrrrrrrrrrrrrrrrrrrrr");
//   }

//   // METHOD polymorphic
//   get testimonialHTML() {
//     return `
//         <div class="testimonial">
//                 <img src="${this.image}" alt="testimonials.profil">
//                 <p class="description">${this.quote}</p>
//                 <p class="author">- ${this.author}</p>
//             </div>`;
//   }
// }

// class AuthorTestimonial extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// class CompanyTestimonial extends Testimonial {
//   #company = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#company = author;
//   }

//   get author() {
//     return this.#company + "company";
//   }
// }

// const testimonial1 = new AuthorTestimonial(
//   "GUSWANDI",
//   "PINJAM DULU SERATUS",
//   "https://images.unsplash.com/photo-1691241147969-42b1b5a89ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=418&q=80"
// );

// const testimonial2 = new AuthorTestimonial(
//   "GUSWANDI",
//   "BOLEH GA SIH",
//   "https://images.unsplash.com/photo-1691680262875-47f1bc0b4974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );

// const testimonial3 = new AuthorTestimonial(
//   "GUSWANDI",
//   "NAMANYA JUGA SILATURAHIM",
//   "https://images.unsplash.com/photo-1691498500437-cfce23e80306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );

// const testimonial4 = new AuthorTestimonial(
//   "GUSWANDI",
//   "GW SUKA PARTAI GW SUKA MERAH",
//   "https://images.unsplash.com/photo-1690899222146-2425202396e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
// );

// const testimonial5 = new AuthorTestimonial(
//   "GUSWANDI",
//   "APA PUN ITU TETEP SAMA AJAHH",
//   "https://images.unsplash.com/photo-1691818111957-38ea433bca6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
// );

// let testimonialData = [
//   testimonial1,
//   testimonial2,
//   testimonial3,
//   testimonial4,
//   testimonial5,
// ];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

// consept hof

const testimonialData = [
  {
    author: "GUSWANDI",
    quote: "PINJAM DULU SERATUS",
    image:
      "https://images.unsplash.com/photo-1691680262875-47f1bc0b4974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 1,
  },
  {
    author: "GUSWANDI",
    quote: "BOLEH GA SIH",
    image:
      "https://images.unsplash.com/photo-1692036678660-f87cc1f2b797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    rating: 2,
  },
  {
    author: "GUSWANDI",
    quote: "NAMANYA JUGA SILATURAHIM",
    image:
      "https://images.unsplash.com/photo-1691498500437-cfce23e80306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 3,
  },
  {
    author: "GUSWANDI",
    quote: "GW SUKA PARTAI GW SUKA MERAH",
    image:
      "https://images.unsplash.com/photo-1689196663218-07e27addf897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=821&q=80",
    rating: 4,
  },
  {
    author: "GUSWANDI",
    quote: "YAUDAHH BOWLEHHH",
    image:
      "https://images.unsplash.com/photo-1690899222146-2425202396e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
  },
];

function semuaTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += ` <div class="testimonial">
    <img src="${item.image}" alt="testimonials.profil" />
    <p class="description">${item.quote}</p>
    <p class="author">- ${item.author}</p>
    <h4 class="author">${item.rating} <i class="fa-solid fa-star"></i></h4>
  </div>`;
  });


  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

semuaTestimonial();


function filteredTestimonials(rating) {
  let testimonialHTML = "";

  const testimoniaFiltered = testimonialData.filter(function(item) {
    return item.rating === rating;
  })

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
}



// https://api.npoint.io/3cdfd7c188e19df1c183