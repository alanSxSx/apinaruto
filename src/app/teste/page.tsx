import React from 'react';
import { getAllCharacters } from '../api/characters';
import Characters from '../interfaces/Characters';

// Função para buscar o clã de um personagem
const getClan = (character: Characters): string => {
  const clan = character?.personal?.clan;

  if (typeof clan === 'string' || typeof clan === 'object') {
    return JSON.stringify(clan); // ou qualquer outra lógica para representar o objeto como string
  } else {
    return 'Sem Clan';
  }

};

export default async function Teste() {
  try {
    const characters = await getAllCharacters();
    console.log(characters[1352])

    return (
      <div>
        {characters.map((character) => (
          <ul key={character.id}>
            <li>ID: {character.id}</li>
            <li>Name: {character.name}</li>
            <li>Clan: {getClan(character)}</li>
          </ul>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return <div>Falha ao carregar dados.</div>;
  }
}
