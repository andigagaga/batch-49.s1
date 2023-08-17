console.log("andiiloooo");

class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  // METHOD ABSTRACK penampung erorr nya
  get author() {
    throw new Error("get author() erorrrrrrrrrrrrrrrrrrrrr");
  }

  // METHOD polymorphic
  get testimonialHTML() {
    return `
        <div class="testimonial">
                <img src="${this.image}" alt="testimonials.profil">
                <p class="description">${this.quote}</p>
                <p class="author">- ${this.author}</p>
            </div>`;
  }
}

class AuthorTestimonial extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

class CompanyTestimonial extends Testimonial {
  #company = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#company = author;
  }

  get author() {
    return this.#company + "company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "GUSWANDI",
  "PINJAM DULU SERATUS",
  "https://images.unsplash.com/photo-1691241147969-42b1b5a89ff3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=418&q=80"
);

const testimonial2 = new AuthorTestimonial(
  "GUSWANDI",
  "BOLEH GA SIH",
  "https://images.unsplash.com/photo-1691680262875-47f1bc0b4974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);

const testimonial3 = new AuthorTestimonial(
  "GUSWANDI",
  "NAMANYA JUGA SILATURAHIM",
  "https://images.unsplash.com/photo-1691498500437-cfce23e80306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);

const testimonial4 = new AuthorTestimonial(
  "GUSWANDI",
  "GW SUKA PARTAI GW SUKA MERAH",
  "https://images.unsplash.com/photo-1690899222146-2425202396e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
);

const testimonial5 = new AuthorTestimonial(
  "GUSWANDI",
  "APA PUN ITU TETEP SAMA AJAHH",
  "https://images.unsplash.com/photo-1691818111957-38ea433bca6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
);

let testimonialData = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
