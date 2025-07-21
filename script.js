function toggleSection(id) {
  document.getElementById("readymade").style.display = "none";
  document.getElementById("rawmaterial").style.display = "none";
  document.getElementById(id).style.display = "block";
  
  // Reset all active states when switching sections
  document.querySelectorAll('.subbundle.active').forEach(item => {
    item.classList.remove('active');
    const arrow = item.querySelector('.arrow');
    if (arrow) arrow.textContent = '▼';
  });
  
  // Close all open bundles when switching sections
  document.querySelectorAll('.subfolder, .bundle-content').forEach(item => {
    item.style.display = 'none';
  });
}

function toggleSub(el) {
  const next = el.nextElementSibling;
  if (!next) return;
  
  const isVisible = next.style.display === "block";
  next.style.display = isVisible ? "none" : "block";
  
  if (el.classList.contains("subbundle")) {
    const arrow = el.querySelector(".arrow");
    if (arrow) arrow.textContent = isVisible ? "▼" : "▲";
    
    const parentSection = el.closest('.folder-section');
    if (parentSection) {
      parentSection.querySelectorAll('.subbundle.active').forEach(item => {
        if (item !== el) {
          item.classList.remove('active');
          const otherArrow = item.querySelector('.arrow');
          if (otherArrow) otherArrow.textContent = '▼';
        }
      });
      
      if (!isVisible) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    }
  }
}

// Close bundles when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.folder, .subbundle, .bundle-content')) {
    document.querySelectorAll('.subfolder, .bundle-content').forEach(item => {
      item.style.display = 'none';
    });
    document.querySelectorAll('.subbundle').forEach(item => {
      item.classList.remove('active');
      const arrow = item.querySelector('.arrow');
      if (arrow) arrow.textContent = '▼';
    });
  }
});