// Section toggling functionality.
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

// Folder/subfolder toggling functionality
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

// Search functionality
let searchVisible = false;

function toggleSearch() {
  const searchExpandable = document.querySelector('.search-expandable');
  searchVisible = !searchVisible;
  
  if (searchVisible) {
    searchExpandable.classList.add('visible');
    document.getElementById('searchInput').focus();
  } else {
    searchExpandable.classList.remove('visible');
  }
}

function searchMods() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (!searchTerm) return;
  
  // Show all sections for searching
  document.getElementById('readymade').style.display = "block";
  document.getElementById('rawmaterial').style.display = "block";
  
  // Hide all folders and subfolders first
  document.querySelectorAll('.folder, .subfolder, .subbundle, .bundle-content').forEach(el => {
    el.style.display = 'none';
  });
  
  // Search through all mods
  let foundAny = false;
  
  Object.keys(modData).forEach(sectionId => {
    modData[sectionId].forEach(bundle => {
      bundle.subbundles.forEach(subbundle => {
        if (subbundle.name.toLowerCase().includes(searchTerm)) {
          foundAny = true;
          // Show the parent folder
          const folders = document.querySelectorAll('.folder');
          folders.forEach(folder => {
            if (folder.textContent === bundle.name) {
              folder.style.display = 'block';
              const subfolder = folder.nextElementSibling;
              if (subfolder) {
                subfolder.style.display = 'block';
                // Show the matching subbundle
                const subbundles = subfolder.querySelectorAll('.subbundle');
                subbundles.forEach(sb => {
                  if (sb.textContent.toLowerCase().includes(subbundle.name.toLowerCase())) {
                    sb.style.display = 'block';
                    sb.nextElementSibling.style.display = 'block';
                  }
                });
              }
            }
          });
        }
      });
    });
  });
  
  if (!foundAny) {
    alert('No mods found matching your search.');
    // Reset view
    document.getElementById('readymade').style.display = "none";
    document.getElementById('rawmaterial').style.display = "none";
  }
  
  // Close search after searching
  toggleSearch();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize search input event
  document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchMods();
    }
  });
});

// Close elements when clicking outside
document.addEventListener('click', function(event) {
  // Handle search box click-outside behavior
  const searchContainer = document.querySelector('.search-icon-container');
  const isClickInsideSearch = searchContainer.contains(event.target);
  
  if (!isClickInsideSearch && searchVisible) {
    toggleSearch();
  }
  
  // Handle folder/subfolder click-outside behavior
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
