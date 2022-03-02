 
import { registerImage } from './lazy.js'

// crear imagen
const maximo= 123;
const minimo= 1;

const random= ()=> Math.floor(Math.random() * (maximo - minimo) + minimo);
const createImageNode= () => {

  const container= document.createElement('div');
  container.className='p-4';

  const imagen= document.createElement('img')
  imagen.className='mx-auto';
  imagen.width='320';
  imagen.dataset.src=`https://randomfox.ca/images/${random()}.jpg`;
  const fondo = document.createElement("div");
  fondo.className = "bg-gray-300";
  fondo.style.minHeight = "100px";
  fondo.style.display = "inline-block";
  fondo.appendChild(imagen);
  container.appendChild(fondo);
  agregadas++;
  infoq();
  return container;
}
const mountNode= document.getElementById('images')
const addButton=  document.querySelector('#add');
const clearButton=  document.querySelector('#remove');

const addImage= () => {
    const newImage= createImageNode();
    mountNode.append(newImage) ;
    registerImage   (newImage);

}
const clearImage= () => {
  
    while (mountNode.hasChildNodes()) {
        mountNode.removeChild(mountNode.firstChild);
}
agregadas=0;
cargadas=0;
}
addButton.addEventListener('click', addImage);
clearButton.addEventListener('click', clearImage);
/* const nuevaImagen= createImageNode();
 */

