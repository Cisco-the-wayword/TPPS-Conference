const topBar = document.querySelector('.desktop-bar');
function renderTopBar() {
  topBar.innerHTML = `<div class="tool-bar">
  <img
    class="tool-bar-item"
    src="images/social/facebook.svg"
    alt="facebook-icon"
  />
  <img
    class="tool-bar-item"
    src="images/social/twitter.svg"
    alt="twitter-icon"
  />
  <p class="tool-bar-item">English</p>
  <p class="tool-bar-item">My Page</p>
  <p class="tool-bar-item last-item">Logout</p>
</div>
<nav class="navbar">
  <div class="nav-logo">
    <a href="index.html" class="logo-link"><img src="images/download.png" alt="TTPS Conference 2022" /></a>
    <p>TPPS Conference 2022</p>
  </div>
  <ul class="nav-list">
    <li class="nav-item">
      <a href="about.html"} "> About </a>
    </li>
    <li class="nav-item">Program</li>
    <li class="nav-item">Join</li>
    <li class="nav-item">Sponsor</li>
    <li class="nav-item">News</li>
  </ul>
  <p class="cc-campaign">TPPS Conference</p>
</nav>`;
}
window.onload = renderTopBar();