const modData = {
  readymade: [
    {
      name: "Stance",
      subbundles: [
        {
          name: "Dote apple cutting stance",
          image: "assets/dote apple.webp",
          link: "https://t.me/idkjetd/3"
        },
        {
          name: "Glitch Markus for Giant sword",
          image: "assets/Markus giant sword.webp",
          link: "https://t.me/idkjetd/5"
        },
        {
          name: "SubBundle 3",
          image: "assets/sub3.webp",
          link: "https://example.com/mod3"
        }
      ]
    },
    {
      name: "Skin mod",
      subbundles: [
        {
          name: "Dote recolour indigo theme",
          image: "assets/dote indigo skin.webp",
          link: "https://t.me/idkjetd/11"
        },
        {
          name: "Glitch Markus",
          image: "assets/glitch markus skin.webp",
          link: "https://t.me/idkjetd/13"
        },
        { 
          name: "void warden becomes shadow mind",
          image: "assets/void×shadowmind skin.webp",
          link: "https://t.me/idkjetd/15"
        
        }
      ]
    }
  ],
  rawmaterial: [
    {
      name: "Weapons",
      subbundles: [
        {
          name: "SubMaterial 1",
          image: "assets/raw1.webp",
          link: "https://example.com/raw1"
        }
      ]
    },
    {
      name: "Moveset and miscellaneous",
      subbundles: [
        {
          name: "Shadow's moveset",
          image: "assets/raw2.webp",
          link: "https://t.me/idkjetd/21"
        }
      ]
    }
  ]
};

function generateSectionHTML(sectionId) {
  const section = modData[sectionId];
  let html = '';
  section.forEach(bundle => {
    html += `
      <div class="folder" onclick="toggleSub(this)">${bundle.name}</div>
      <div class="subfolder">
    `;

    bundle.subbundles.forEach((subbundle, index) => {
      const isRawMaterial = sectionId === 'rawmaterial';
      
      html += `
        ${index > 0 ? '<div class="separator"></div>' : ''}
        <div class="subbundle" onclick="toggleSub(this)">
          ${subbundle.name} <span class="arrow">▼</span>
        </div>
        <div class="bundle-content">
          <div class="mod-content">
            ${isRawMaterial ? '' : `
              <div class="mod-image-container">
                <img src="${subbundle.image}" alt="${subbundle.name} Preview">
              </div>
            `}
            <div class="download-container">
              <a href="${subbundle.link}" target="_blank">
                <img src="download-icon.svg" alt="Download Icon" class="download-icon">
              </a>
              <a href="${subbundle.link}" target="_blank" class="download-text">Download ${subbundle.name}</a>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
  });
  return html;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('readymade').innerHTML = generateSectionHTML('readymade');
  document.getElementById('rawmaterial').innerHTML = generateSectionHTML('rawmaterial');
});
