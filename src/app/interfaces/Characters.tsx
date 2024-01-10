interface Character {
  id: number;
  name: string;
  images: string[];
  debut: {
    manga: string;
    anime: string;
    novel: string;
    movie: string;
    game: string;
    ova: string;
    appearsIn: string;
  };
  family: {
    grandfather: string;
    grandmother: string;
    father: string;
    greatGrandfather: string;
    granduncle: string;
    grandmotherMother: string;
    mother: string;
    aunt: string;
    sister: string;
    firstCousinOnceRemoved: string;
    adoptiveBrother: string;
    host: string;
  };
  jutsu: string[];
  natureType: string[];
  personal: {
    birthdate: string;
    sex: string;
    species: string;
    age: {
      blankPeriod: string;
      borutoMovie: string;
      borutoManga: string;
    };
    height: {
      blankPeriod: string;
      borutoMovie: string;
      borutoManga: string;
    };
    kekkeiGenkai: string;
    classification: string;
    affiliation: string[];
    team: string;
    clan: string[];
    titles: string[];
  };
  rank: {
    ninjaRank: {
      gaiden: string;
    };
  };
  tools: string[];
  voiceActors: {
    japanese: string[];
    english: string[];
  };
}

export default Character