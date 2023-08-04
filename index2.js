let button2 = document.querySelector(".button2");
let button1 = document.querySelector(".button1");
let bulb = document.querySelector(".bulb");
let section = document.getElementsByTagName("section");
let secBefore = document.querySelector(".sec_before");
let random = document.querySelector(".random");
let circle = document.querySelector(".circle");
a = 0;
console.log(a);
button1.addEventListener("click", () => {
  section[0].classList.toggle("section2");
  // random[0].style.display='block';
  if (a === 0) {
    gsap.to(button2, {
      x: 150,
      duration: 0.3,
    });

    a = 1;
    console.log(a);
  } else {
    gsap.to(button2, {
      x: 0,
      duration: 0.3,
    });
    a = 0;
    console.log(a);
  }
});

random.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 226);
  const g = Math.floor(Math.random() * 226);
  const b = Math.floor(Math.random() * 226);
  // console.log('naitik kumar')
  circle.style.boxShadow = `1px 1px 80px 30px rgba(${r}, ${g}, ${b}, 0.628)`;
  circle.style.backgroundColor=`rgba(${r}, ${g}, ${b}, 1)`
  // box-shadow: 1px 1px 40px 20px rgba(255, 0, 0, 0.628);
  // circle.style.boxShadow='1px 1px 40px 20px rgba(255, 0, 0, 0.628)'
});
