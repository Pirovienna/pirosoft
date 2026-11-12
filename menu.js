document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.getElementById("ortak-menu");
  if (menuContainer) {
    menuContainer.innerHTML = `
      <a href="index.html">Start</a> |
      <a href="ueber-uns.html">Über uns</a> |
      <a href="kontakt.html">Kontakt</a> |
      <a href="barrierefreiheit.html">Barrierefreiheit</a> |
      <a href="impressum.html">Impressum</a> |
      <a href="datenschutz.html">Datenschutz</a> |
      <a href="lizenz.html">Lizenzbestimmungen</a> |
      <a href="quellen.html">Rechtsgrundlagen</a>
    `;
  }
});
