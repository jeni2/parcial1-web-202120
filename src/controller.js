const { response, request } = require('express');

//importamos el modulo http para crear el servidor
const http = require('http');

//importamos el modulo axios
const axios= require('axios');

//importamos el modulo para manipulcion de archivos
const fs= require('fs');

//funcion que carga los jugadores desde la url externa, los datos se cargan en resp
async function getJugadores(){

  const resp = await axios.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe');
 // console.log(resp.data);
  return resp.data;   

}

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  console.log('entro2')
  const datos =await getJugadores();
  r= encontrarJugadores(datos,139);
  console.log('r: ')
  console.log(r)
  return  resp.json(datos);
};

function encontrarJugadores(datos,sum) {
  a=' '
  console.log('entro a la funcion')
 for (i in datos.values){
   for (j in datos.values){
    
   if(parseInt(datos.values[i].h_in) + parseInt(datos.values[j].h_in) == sum)
   {
     a= a+ ' ' + i
     console.log('entro al if')
    console.log(datos.values[i])
    console.log(datos.values[j])
  }
   }
 }
 
  console.log('salgo del for')
  return a;
}

module.exports = { getPairsOfPlayers ,getJugadores};
