let slide_data = [
  {
    'src':'../img/jew1.jpg',
    'title':'',
    'copy':''
  },
  {
    'src':'../img/jew2.jpg',
    'title':'',
    'copy':''
  },
  {
    'src':'../img/jew4.jpg',
    'title':'',
    'copy':''
  },
  {
    'src':'../img/jew3.jpg',
    'title':'',
    'copy':''
  },
];
let slides = [],
  captions = [];

let autoplay = setInterval(function(){
  nextSlide();
},5000000);
let container = document.getElementById('container');
let leftSlider = document.getElementById('left-col');
let down_button = document.getElementById('down_button');
let up_button = document.getElementById('up_button');
let caption = document.getElementById('slider-caption');
// let caption_heading = caption.querySelector('caption-heading');

down_button.addEventListener('click',function(e){
  e.preventDefault();
  clearInterval(autoplay);
  nextSlide();
  autoplay;
});

up_button.addEventListener('click',function(e){
  e.preventDefault();
  clearInterval(autoplay);
  nextSlide();
  autoplay;
});


for (let i = 0; i< slide_data.length; i++){
  let slide = document.createElement('div'),
      caption = document.createElement('div'),
      slide_title = document.createElement('div');

  slide.classList.add('slide');
  slide.setAttribute('style','background:url('+slide_data[i].src+')');
  caption.classList.add('caption');
  slide_title.classList.add('caption-heading');

  switch(i){
    case 0:
        slide.classList.add('current');
        caption.classList.add('current-caption');
        break;
    case 1:
        slide.classList.add('next');
        caption.classList.add('next-caption');
        break;
    case slide_data.length -1:
      slide.classList.add('previous');
      caption.classList.add('previous-caption');
      break;
    default:
       break;
  }
  caption.appendChild(slide_title);
  caption.insertAdjacentHTML('beforeend','<div class="caption-subhead"><span> </span></div>');
  slides.push(slide);
  captions.push(caption);
  leftSlider.appendChild(slide);
  container.appendChild(caption);
}
// console.log(slides);

function nextSlide(){
  // caption.classList.add('offscreen');

  slides[0].classList.remove('current');
  slides[0].classList.add('previous','change');
  slides[1].classList.remove('next');
  slides[1].classList.add('current');
  slides[2].classList.add('next');
  let last = slides.length -1;
  slides[last].classList.remove('previous');

  captions[0].classList.remove('current-caption');
  captions[0].classList.add('previous-caption','change');
  captions[1].classList.remove('next-caption');
  captions[1].classList.add('current-caption');
  captions[2].classList.add('next-caption');

  captions[last].classList.remove('previous-caption');

  let placeholder = slides.shift();
  let captions_placeholder = captions.shift();
  slides.push(placeholder);
  captions.push(captions_placeholder);
}

let heading = document.querySelector('.caption-heading');


function whichTransitionEvent(){
  let t,
      el = document.createElement("fakeelement");

  let transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

let transitionEvent = whichTransitionEvent()
caption.addEventListener(transitionEvent, customFunction);

function customFunction(event) {
  caption.removeEventListener(transitionEvent, customFunction);
}


