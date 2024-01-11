import React from 'react';
import { getAllCharacters } from '../api/characters';
import Characters from '../interfaces/Characters';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const removeSpecialCharacters = (str: string): string => {
  // Substitui caracteres especiais por uma string vazia
  return str.replace(/["\[\]]/g, '');
};

const getFirstWord = (str: string): string => {
  const match = str.match(/\b\w+\b/);
  return match ? match[0] : '';
};

// Função para buscar o clã de um personagem
const getClan = (character: Characters): string => {
  const clan = character?.personal?.clan;

  if (typeof clan === 'string' || typeof clan === 'object') {
    return removeSpecialCharacters(JSON.stringify(clan)); // ou qualquer outra lógica para representar o objeto como string
  } else {
    return 'Sem Clan';
  }

};

const getBeforeFirstComma = (str: string): string => {
  const parts = str.split(',');
  return parts.length > 0 ? parts[0] : '';
};



const getAfiliation = (character: Characters): string => {
  const affiliation = character?.personal?.affiliation;

  if (typeof affiliation === 'string' || typeof affiliation === 'object') {
    return getBeforeFirstComma(removeSpecialCharacters(JSON.stringify(affiliation))); // ou qualquer outra lógica para representar o objeto como string
  } else {
    return 'Sem Afiliação';
  }

};

export default async function Teste() {
  try {
    const characters = await getAllCharacters();

    return (

      <div className='flex items-center justify-center w-screen'>
      <div className='flex flex-wrap gap-4 items-center justify-center'>
        {characters.map((character) => (
          <Card key={character.id} className="w-[380px] h-[500px] mt-3">
            <div className="relative h-[200px] overflow-hidden mb-4">
             
                <Image src={character.images[0]}  width={500} height={500} alt={`${character.name}`} />
             
            </div>
            <CardContent className="flex flex-col items-center justify-center">
              <CardHeader>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>{getClan(character)}</CardDescription>
              </CardHeader>
              <CardFooter>
                {getAfiliation(character)}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>




    );
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return <div>Falha ao carregar dados.</div>;
  }
}
