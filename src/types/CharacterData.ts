export interface CharacterData {
  // Identity
  name: string;
  age: string;
  sex: string;

  // Birth
  birthdate: string;
  birthSign: string;
  bloodType: string;
  birthPlace: string;

  // Physical
  height: string;
  weight: string;
  eyesight: string;
  handedness: string;
  hairColor: string;
  eyeColor: string;
  voiceType: string;

  // Medical / Physical history
  surgeriesIllnesses: string;
  scarsTattoos: string;
  distinctivePhysicalTraits: string;

  // Background
  race: string;
  religion: string;

  // Legal / Education
  criminalRecord: string;
  educationAndAwards: string[];

  // Life history
  childhood: string;
  sexualHistory: string;
  admiredPeople: string;
  dislikedPeople: string;

  // Psychology
  dreams: string;
  fears: string;
  personalityTraits: string;

  // Relationships
  romanticRelationships: string;
  familyRelationships: string;
  problemRelationships: string;

  // Life situation
  employment: string;
  economicStatus: string;
  petsAndPlants: string;

  // Skills & habits
  specialSkills: string[];
  hobbies: string[];
  likesDislikes: string;
  habits: string;
  favoritePhrases: string;

  // Misc
  others: string;
}
