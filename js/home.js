function $(a){return document.querySelector(a)}$('nav').innerHTML=`
<a href="/">
    <img src="img/NMMT.png" alt="Logo" />
</a>
<div id="hamburger" onclick="this.classList.toggle('open');document.querySelector('nav ul').classList.toggle('open');">
    <div></div>
    <div></div>
    <div></div>
</div>
<ul>
    <li><a href="#">About us</a></li>
    <li><a href="#">Our Team</a></li>
    <li><a href="#">Sponsors</a></li>
    <li><a href="/calendar">Calendar</a></li>
    <li><a href="/handouts">Resources</a></li>
    <li><a href="https://forms.gle/efdDBimGox1kPukQ7" target="_blank" id="join">Join!</a></li>
</ul>
`;$('footer').innerHTML=`
<div>
    <div id="copyright">&copy; New Mexico Math Team</div>
    <div id="madebyme">Made by Sean Choi for NMMT</div>
</div>
<div id="footer-links">
    <b>Menu</b>
    <a href="/">Home</a>
    <a href="/">Link 1</a>
</div>
`;window.onscroll=()=>{if(window.scrollY>=10)$('nav').classList.add('collapsed-nav');else window.scrollY<=0&&$('nav').classList.remove('collapsed-nav')};function b(A,_){$(`nav ul li:nth-of-type(${A})`).addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:$(_).getBoundingClientRect().top+window.pageYOffset-60,behavior:'smooth'})})}b(1,'.cards-container');b(2,'.wave');b(3,'.sponsors');var c=new URLSearchParams(window.location.search);c.has('e')&&document.addEventListener('DOMContentLoaded',e=>window.scrollTo({top:$(`.${c.get('e')}`).getBoundingClientRect().top+window.pageYOffset-60,behavior:'smooth'}));
