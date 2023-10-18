// Function to fetch and replace icons
function fetchDataAndReplaceIcon(key) {
    // Fetch data from the server
    fetch(`http://localhost:3002/data/${key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(`Data for ${key}:`, data.key);
  
        // Select the element with the specified 'svg' selector
        const svgElement = document.querySelector('#app-mount > div.appAsidePanelWrapper-VeklAl > div.notAppAsidePanel-1yXaPq > div.app-1BipOi > div > div.layers-OrUESM.layers-1YQhyW > div > div > nav > ul > div.scroller-3X7KbA.none-1rXy4P.scrollerBase-1Pkza4 > div.tutorialContainer-1pL9QS > div > div.listItemWrapper-3d87LP > div > svg > foreignObject > div > div > svg');
  
        if (svgElement) {
          // If an 'svg' element is found, hide it
          svgElement.style.display = 'none';
        } else {
          console.error('SVG Element not found within the specified selector.');
        }
  
        // Select the element with the specified 'img' selector
        const imgElement = document.querySelector('#app-mount > div.appAsidePanelWrapper-VeklAl > div.notAppAsidePanel-1yXaPq > div.app-1BipOi > div > div.layers-OrUESM.layers-1YQhyW > div > div > nav > ul > div.scroller-3X7KbA.none-1rXy4P.scrollerBase-1Pkza4 > div.tutorialContainer-1pL9QS > div > div.listItemWrapper-3d87LP.selected-3a1QGn > div > svg > foreignObject > div > div > img');
  
        if (imgElement) {
          // If an 'img' element is found, update its src
          imgElement.src = data.key;
        } else {
          // If no 'img' element is found, create and append one
          const img = document.createElement('img');
          img.src = data.key;
          img.width = 48;
          img.alt = 'App Icon';
          img.draggable = false;
  
          // Select the parent of the 'svg' element and append the 'img' element
          const parent = svgElement.parentElement;
          parent.appendChild(img);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  fetchDataAndReplaceIcon('Mainframe');
  