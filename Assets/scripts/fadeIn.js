//scrolljs
function isInViewport(el) {
const rect = el.getBoundingClientRect();
return (
    rect.top >=0 && (rect.bottom <= window.innerHeight && rect.bottom >= 0)
    //rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //rect.right <= (window.innerWidth || document.documentElement.clientWidth)

);
}

var options = document.getElementsByClassName('fadeInID');
document.addEventListener('scroll', function() {
  for (let i = 0; i < options.length; i++) {
    var el = options[i];
    var isIn = isInViewport(el);
    const rect = el.getBoundingClientRect();
    if(el.classList.contains("fadeInClass")  &&  (rect.bottom >= window.innerHeight || rect.top <= 0)){
      el.classList.remove("fadeInClass");
    }
    else if (!(el.classList.contains("fadeInClass"))){
      el.classList.add("fadeInClass");
    }
  }
});
