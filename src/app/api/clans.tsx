import Clans from '../interfaces/Clans';

export const getAllClans = async (): Promise<Clans[]> => {
  let allClans: Clans[] = [];
  let page = 1;

  while (true) {
    const res = await fetch(`https://narutodb.xyz/api/clan?page=${page}`);

    if (!res.ok) {
      throw new Error('Falha ao carregar dados');
    }

    const data: { clans: Clans[] } = await res.json();

    // Adicione os personagens da página atual à lista
    allClans = [...allClans, ...data.clans];

    // Se não houver mais personagens, saia do loop
    if (data.clans.length === 0) {
      break;
    }

    // Avance para a próxima página
    page++;
  }

  return allClans;
};