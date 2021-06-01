document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll
  function handleScroll(e) {
    e.preventDefault();

    // Prvent stopped "/" links
    if (!e.target.href) {
      window.location.href = "/";
      return;
    }

    // Check for new tab links and allow them through
    if (e.target.target === "_blank") {
      window.open(e.target.href, "_blank");
      return;
    }

    // Check for external links and allow them through
    const url = window.location.origin;
    const newUrl = e.target.href.split(url);

    // Allow Non-Anchor links through
    if (newUrl.length === 1 || !e.target.hash) {
      window.location.href = e.target.href;
      return;
    }

    // Grab the anchor, find it's target, scroll into view
    const targetSelector = e.target.hash.split("#")[1];
    const section = document.getElementById(targetSelector);
    section.scrollIntoView({ behavior: "smooth" });
  }

  // Grab only links so that card links work
  const links = document.querySelectorAll("a");

  // Attach smooth scroll to all links
  links.forEach((item) => item.addEventListener("click", handleScroll, false));
});
