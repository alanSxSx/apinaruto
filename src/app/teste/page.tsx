import React from 'react';
import { getAllCharacters } from '../api/characters';
import Characters from '../interfaces/Characters';

// Função para buscar o clã de um personagem
const getClan = (character: Characters): string[] => {
  return character?.personal?.clan || [];
};

export default async function Teste() {
  try {
    const characters = await getAllCharacters();

    return (
      <div>
        {characters.map((character) => (
          <ul key={character.id}>
            <li>ID: {character.id}</li>
            <li>Name: {character.name}</li>
            <li>Clan: {character?.personal?.clan ? character.personal.clan : 'Sem Clan'}</li>
          </ul>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return <div>Falha ao carregar dados.</div>;
  }
}
