import React from 'react'
import DataCharacter from './DataCharacter'
import { getAllCharacters } from "../api/characters";

import Characters from '../interfaces/Characters';

export async function getCharacters(): Promise<Characters[]> {
  try {
    const characters = await getAllCharacters();
    console.log('Personagens obtidos:', characters);
    return characters;
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    throw error; // Rejeita o erro para que seja tratado por quem chama a função
  }
}



const hasValidImages = async (images: string[] | undefined): Promise<boolean> => {
  if (!images || images.length === 0) {
    return false;
  }

  // Verificar cada imagem
  const results = await Promise.all(
    images.map(async (imageUrl) => {
      try {
        const response = await fetch(imageUrl);
        return response.ok;
      } catch (error) {
        console.error('Erro ao verificar a disponibilidade da imagem:', error);
        return false;
      }
    })
  );

  // Verificar se todas as imagens são válidas
  return results.every((isValid) => isValid);
};

export default async function () {

  const characters = await getCharacters()

 


  return (
   <DataCharacter characters = {characters}/>
 
  )
}
