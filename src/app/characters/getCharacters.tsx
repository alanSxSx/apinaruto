import { getAllCharacters } from "../api/characters";
import Characters from '../interfaces/Characters';

export default async function getCharacters(): Promise<Characters[]> {
  try {
    const characters = await getAllCharacters();
    console.log('Personagens obtidos:', characters);
    return characters;
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    throw error; // Rejeita o erro para que seja tratado por quem chama a função
  }
}
