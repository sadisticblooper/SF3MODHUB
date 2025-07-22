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
          name: "Kissing opponent for good luck stance for knuckles by Agent roman",
          image: "assets/kiss.webp",
          link: "https://t.me/idkjetd/23"
        },
        {
          name: "katana qigong stance by Danrath",
          image: "assets/qigong.webp",
          link: "https://t.me/idkjetd/25"
        },
        {
          name: "Helga stance for single handed Sword",
          image: "assets/HelgaOnehandsword.webp",
          link: "https://t.me/idkjetd/47"
        },
        {
          name: "Ironclad challange stance",
          image: "assets/ironclad challange.webp",
          link: "https://t.me/idkjetd/49"
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
        },
        {
          name: "Librator Purple theme mod",
          image: "assets/libratorpurple.webp",
          link: "https://t.me/idkjetd/31"
        },
        {
          name: "Biblically accurate black shadow artisan",
          image: "assets/shadow artisan.webp",
          link: "https://t.me/idkjetd/51"
        }
      ]
    }
  ],
  rawmaterial: [
    {
      name: "Weapons",
      subbundles: [
        {
          name: "Dual Swords stance",
          link: "https://t.me/idkjetd/39"
        },
        {
          name: "Composite Sword stance",
          link: "https://t.me/idkjetd/41"
          
        },
        {
          name: "Giant Sword Stance",
          link: "https://t.me/idkjetd/43"
        },
        {
          name: "Two Handed Sword Stance",
          link: "https://t.me/idkjetd/45"
        }
      ]
    },
    {
      name: "Moveset and miscellaneous",
      subbundles: [
        {
          name: "Shadow's moveset",
          link: "https://t.me/idkjetd/21"
        },
        {
          name: "Bolo stance and animation",
          link: "https://t.me/idkjetd/33"
        },
        {
          name: "Stranger animations",
          link: "https://t.me/idkjetd/35"
        }
      ]
    },
    {
      name: "Sound Assets",
      subbundles: [
        {
          name: "Block Sounds",
          link: "https://t.me/idkjetd/37"
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
              <a href="${subbundle.link}" target="_blank" class="download-text">Download </a>
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
