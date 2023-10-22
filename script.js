'use strict';
import { buscar } from "./fetch.js";

async function searchFood(food){
    return await buscar(food.toLowerCase());
}

const comida = await searchFood(``);
//console.log(comida);

const contenedor = document.querySelector('.main_recetas')
const buscador = document.querySelector('.buscador');//? "." Selecciona class
const btnBuscar = document.querySelector('#btnBuscar');//? "#" selecciona id
const btnLimpiar = document.querySelector('#btnLimpiar')

async function getFood(){
  const bC = await searchFood(buscador.value)
  console.log(bC);
  while(contenedor.firstChild){
    contenedor.removeChild(contenedor.firstChild)
  }
    for(let i=0; i < bC.data.recipes.length; i++){
      //!Creamos recipientes para guardar los datos del array
        const infRecipe = document.createElement('div'); //!
        infRecipe.className='main_recetas-receta' //? Le ponemos un nombre de clase para poder trabajarlo desde css
        const imgRecipe = document.createElement('img');//!
        const title = document.createElement('h1');//!
        const publisher = document.createElement('p');//!
        imgRecipe.src = bC.data.recipes[i].image_url;
        imgRecipe.alt = bC.data.recipes[i].title;
        imgRecipe.inf = bC.data.recipes[i].publisher;
        title.textContent = imgRecipe.alt;
        publisher.textContent = imgRecipe.inf;
        infRecipe.appendChild(imgRecipe);   //?Con el appendChild metemos cada uno de los elementos al contenedor para mostrarlo en el html -
        infRecipe.appendChild(title);       //?este contenedor es el que se va a crear cada vez que presionemos el boton de "buscar"
        infRecipe.appendChild(publisher);
        contenedor.appendChild(infRecipe);  //?Introducimos los contenedores que se crean al contenedor que si esta fijo en html
    }   
}

async function clearFood(){
    const bC = await searchFood(buscador.value)
    console.clear(bC)
    contenedor.textContent = '';
    buscador.value = '';
}

btnBuscar.onclick = getFood;
btnLimpiar.onclick = clearFood;