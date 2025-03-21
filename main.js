
// Below code allows for better use on mobile

var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

const meowImages = [
    'Meow/07D8EF86-5D08-4887-93BB-27DADAEEDB39.jpg',
    'Meow/467D55E6-F43F-44EE-9956-849A418A38E7.jpg',
    'Meow/75444358907__C7F34B79-82D3-47FF-9717-F58B97129D25.jpeg',
    'Meow/B3E930E0-F500-41F3-9678-A6BF56C5134E.jpg',
    'Meow/IMG_0017.jpeg',
    'Meow/IMG_0780.jpeg',
    'Meow/IMG_1578.jpeg',
    'Meow/IMG_1724.jpeg',
    'Meow/IMG_2098.jpeg',
    'Meow/IMG_2141.jpeg',
    'Meow/IMG_2350.jpeg',
    'Meow/IMG_2375.jpeg',
    'Meow/IMG_2395.jpeg',
    'Meow/IMG_2417.jpeg',
    'Meow/IMG_2427.jpeg',
    'Meow/IMG_3540.jpeg',
    'Meow/IMG_3648.jpeg',
    'Meow/IMG_3714.jpeg',
    'Meow/IMG_3958.jpeg',
    'Meow/IMG_3969.JPG',
    'Meow/IMG_3985.jpeg',
    'Meow/aubinAttack.gif'
  ];

  document.getElementById('meowButton').addEventListener('click', function() {
    // Remove existing image if present
    const existingImage = document.querySelector('.meow-image');
    if (existingImage) existingImage.remove();
  
    // Create new image element
    const img = document.createElement('img');
    img.src = meowImages[Math.floor(Math.random() * meowImages.length)];
    img.className = 'meow-image';
    
    // Add slight rotation for visual interest
    img.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 10 - 5}deg)`;
    
    document.body.appendChild(img);
  });
  
  