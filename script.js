

document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.topbar p');
    let index = 0;
  
    function updateParagraph() {
      // Hide all paragraphs
      paragraphs.forEach(p => {
        p.style.opacity = '0';
      }); 
  
      // Show the current paragraph
      paragraphs[index].style.opacity = '1';
  
      index = (index + 1) % paragraphs.length; // Move to the next paragraph cyclically
    } 
      setInterval(updateParagraph, 1500);
});

  

document.addEventListener("DOMContentLoaded", function() {
    const topbar = document.getElementById("topbar");
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            topbar.style.top = `-${topbar.offsetHeight}px`;
            navbar.style.top = "0";
        } else {
            // Scrolling up
            topbar.style.top = "0";
            navbar.style.top = `${topbar.offsetHeight}px`;
        }

        lastScrollTop = scrollTop;
    });
});
