let i = 0;
let txt = 'Scroll Up and Down this page to see the parallax scrolling effect.This div is just here to enable scrolling.Tip: Try to remove the background-attachment property to remove the scrolling effect.';
document.body.onload=function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}