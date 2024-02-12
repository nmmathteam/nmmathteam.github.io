function $(e){return document.querySelector(e)}const nav=`
<a href="/">
    <img src="/img/NMMT.png" alt="Logo" />
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
    <li><a href="https://forms.gle/efdDBimGox1kPukQ7" target="_blank" id="join">Join!</a></li>
</ul>
`,footer=`
<div>
    <div id="copyright">&copy; New Mexico Math Team</div>
    <div id="madebyme">Made by Sean Choi for NMMT</div>
</div>
<div id="footer-links">
    <b>Menu</b>
    <a href="/">Home</a>
    <a href="/">Link 1</a>
</div>
`;$("nav").innerHTML=nav,$("footer").innerHTML=footer,window.onscroll=()=>{window.scrollY>=10?$("nav").classList.add("collapsed-nav"):window.scrollY<=0&&$("nav").classList.remove("collapsed-nav")};function scroll(e,t){$(`nav ul li:nth-of-type(${e})`).addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:$(t).getBoundingClientRect().top+window.pageYOffset-60,behavior:"smooth"})})}scroll(1,".cards-container"),scroll(2,".wave"),scroll(3,".sponsors");const searchParams=new URLSearchParams(window.location.search);searchParams.has("e")&&document.addEventListener("DOMContentLoaded",e=>{window.scrollTo({top:$(`.${searchParams.get("e")}`).getBoundingClientRect().top+window.pageYOffset-60,behavior:"smooth"})})