// Create toggle <input>
const toggle = document.createElement('input');
toggle.name = 'toggle';
toggle.id = 'toggle';
toggle.type = 'checkbox';

// Create label for toggle
const label = document.createElement('label');
label.htmlFor = 'toggle';

// Create material icon for label
const icon = document.createElement('span');
icon.classList.add('material-icons');
icon.textContent = 'menu';

// Add icon to label
label.appendChild(icon);


//  ELEMENTS CREATED  \\


const menu = document.getElementsByClassName('mobile-menu')[0];

// Remove no-js menu button
menu.firstElementChild?.remove();

// Add toggle to menu
menu.appendChild(toggle);

// Add label to menu
menu.appendChild(label);

// Move slide-in menu to end of child list
const slideIn = menu.firstElementChild;
slideIn.remove();
menu.appendChild(slideIn);


//  ELEMENTS ADDED & IN ORDER  \\


// Get container
const fadeOuts = Array.from(document.getElementsByClassName('fade-out-menu')).map(v => ({ elem: v, transition: v.style.transition }));

const elem = document.getElementsByClassName('container')[0];
fadeOuts.push({ elem, transition: elem.style.transition });

toggle.addEventListener('change', () => {
  if(toggle.checked) {
    for(const item of fadeOuts) {
      item.elem.style.transition = 'opacity 0.8s ease-in-out';
      item.elem.style.opacity = '0%';
    }

  }else {
    for(const item of fadeOuts) {
      item.elem.style.opacity = '100%';
      setTimeout(() => item.elem.style.transition = item.transition, 1000);
    }
  }
});