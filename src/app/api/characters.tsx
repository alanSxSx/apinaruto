import Characters from '../interfaces/Characters';

export const getAllCharacters = async (): Promise<Characters[]> => {
  let allCharacters: Characters[] = [];
  let cont = 0; // Começar com o primeiro personagem

  try {
    while (true) {
      const res = await fetch(`https://narutodb.xyz/api/character/${cont}`);

      if (!res.ok) {
        if (res.status === 404) {
          // Se o personagem não for encontrado, pare a busca
          console.log(`Personagem com ID '${cont}' não encontrado. Parando a busca.`);
          break;
        } else {
          throw new Error(`Falha ao carregar dados. Status: ${res.status}`);
        }
      }

      const text = await res.text();

      try {
        const character: Characters = JSON.parse(text);

        // Verifica se 'character' existe antes de prosseguir
        if (!character) {
          break;
        }

        // Adicione o personagem atual à lista
        allCharacters.push(character);

        // Avance para o próximo personagem
        cont++;

        // Se atingir o ID 1441, pare a busca
        if (cont === 1441) {
          console.log(`Alcançou o ID máximo. Parando a busca.`);
          break;
        }
      } catch (jsonError) {
        console.error('Erro ao fazer parse do JSON:', jsonError);
        // Se ocorrer um erro ao fazer parse do JSON, interrompa o loop
        break;
      }
    }
  } catch (error) {
    console.error('Erro ao obter personagens:', error);
    throw error; // Rejeita o erro para que seja tratado por quem chama a função
  }

  return allCharacters;
};
