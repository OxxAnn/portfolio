particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 180,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 0.8,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  
  let textOne = "Hello everyone. I would like to welcome you all to my page!";

  let i=0;
  let speed = 100;


  function type(){
    if(i < textOne.length){
        document.querySelector("#par").textContent += textOne.charAt(i);
        i++;
        setTimeout(type, speed);
    }
  }
  type();

  gsap.from(".certif", {opacity:0, duration:3, delay:3, stagger:.6})
  gsap.to(".imageTool", {rotation: 360, duration:2, delay:2, opacity:1,})


 const certifs = document.querySelectorAll('.certif-item');
 console.log(certifs);

 for (let i = 0; i < certifs.length; i++) {
  const certif = certifs[i];
  certif.addEventListener('mousemove', startRotate);
  certif.addEventListener('mouseout', stopRotate);
 }

 function startRotate(event){
  const certifItem = this.querySelector('.certif');
  const halfHeight = certifItem.offsetHeight / 2;
  const halfWidth = certifItem.offsetWidth / 2;

  certifItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)'
 }

 function stopRotate(event){
  const certifItem = this.querySelector('.certif');
  certifItem.style.transform = 'rotate(0)';
 }


