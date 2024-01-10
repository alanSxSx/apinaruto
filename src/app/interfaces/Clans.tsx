import Character from "./Characters";

// Clan.ts
interface Clan {
    id: string;
    name: string;
    images: string[];
    characters: Character[];
  }
  
  export default Clan;
  