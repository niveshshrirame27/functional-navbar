document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll('.navbar p');
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