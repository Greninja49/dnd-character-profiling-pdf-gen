import React, { useState } from "react";
import { CharacterData } from "../types/CharacterData";
import { TextInput, TextArea, ListInput } from "./Input";
import { generateCharacterPDF } from "../pdf/generateCharacterPDF";
import "./CharacterForm.css";

const empty: CharacterData = {
  // Identity
  name: "",
  age: "",
  sex: "",

  // Birth
  birthdate: "",
  birthSign: "",
  bloodType: "",
  birthPlace: "",

  // Physical
  height: "",
  weight: "",
  eyesight: "",
  handedness: "",
  hairColor: "",
  eyeColor: "",
  voiceType: "",

  // Medical / Physical history
  surgeriesIllnesses: "",
  scarsTattoos: "",
  distinctivePhysicalTraits: "",

  // Background
  race: "",
  religion: "",

  // Legal / Education
  criminalRecord: "",
  educationAndAwards: [""],

  // Life history
  childhood: "",
  sexualHistory: "",
  admiredPeople: "",
  dislikedPeople: "",

  // Psychology
  dreams: "",
  fears: "",
  personalityTraits: "",

  // Relationships
  romanticRelationships: "",
  familyRelationships: "",
  problemRelationships: "",

  // Life situation
  employment: "",
  economicStatus: "",
  petsAndPlants: "",

  // Skills & habits
  specialSkills: [""],
  hobbies: [""],
  likesDislikes: "",
  habits: "",
  favoritePhrases: "",

  // Misc
  others: "",
};

const CharacterForm: React.FC = () => {
  const [data, setData] = useState<CharacterData>(empty);

  return (
    <>
      <div className="sheet">
        <h2 className="title">Character History</h2>

        {/* ================= BASIC INFO ================= */}
        <TextInput
          label="Name / Nicknames"
          value={data.name}
          onChange={(v: string) => setData({ ...data, name: v })}
        />
        <TextInput
          label="Age"
          value={data.age}
          onChange={(v: string) => setData({ ...data, age: v })}
        />
        <TextInput
          label="Sex"
          value={data.sex}
          onChange={(v: string) => setData({ ...data, sex: v })}
        />

        {/* ================= BIRTH ================= */}
        <TextInput
          label="Birthdate"
          value={data.birthdate}
          onChange={(v: string) => setData({ ...data, birthdate: v })}
        />
        <TextInput
          label="Birth Sign"
          value={data.birthSign}
          onChange={(v: string) => setData({ ...data, birthSign: v })}
        />
        <TextInput
          label="Blood Type"
          value={data.bloodType}
          onChange={(v: string) => setData({ ...data, bloodType: v })}
        />
        <TextInput
          label="Birth Place"
          value={data.birthPlace}
          onChange={(v: string) => setData({ ...data, birthPlace: v })}
        />

        {/* ================= PHYSICAL ================= */}
        <TextInput
          label="Height"
          value={data.height}
          onChange={(v: string) => setData({ ...data, height: v })}
        />
        <TextInput
          label="Weight"
          value={data.weight}
          onChange={(v: string) => setData({ ...data, weight: v })}
        />
        <TextInput
          label="Eyesight / Glasses"
          value={data.eyesight}
          onChange={(v: string) => setData({ ...data, eyesight: v })}
        />
        <TextInput
          label="Handedness"
          value={data.handedness}
          onChange={(v: string) => setData({ ...data, handedness: v })}
        />
        <TextInput
          label="Hair Color"
          value={data.hairColor}
          onChange={(v: string) => setData({ ...data, hairColor: v })}
        />
        <TextInput
          label="Eye Color"
          value={data.eyeColor}
          onChange={(v: string) => setData({ ...data, eyeColor: v })}
        />
        <TextInput
          label="Type of Voice"
          value={data.voiceType}
          onChange={(v: string) => setData({ ...data, voiceType: v })}
        />

        {/* ================= MEDICAL ================= */}
        <TextArea
          label="History of Surgeries / Cavities / Illnesses"
          value={data.surgeriesIllnesses}
          onChange={(v: string) => setData({ ...data, surgeriesIllnesses: v })}
        />
        <TextArea
          label="Scars / Burns / Skin Damage / Tattoos"
          value={data.scarsTattoos}
          onChange={(v: string) => setData({ ...data, scarsTattoos: v })}
        />
        <TextArea
          label="Other Distinctive Physical Characteristics"
          value={data.distinctivePhysicalTraits}
          onChange={(v: string) =>
            setData({ ...data, distinctivePhysicalTraits: v })
          }
        />

        {/* ================= BACKGROUND ================= */}
        <TextInput
          label="Race"
          value={data.race}
          onChange={(v: string) => setData({ ...data, race: v })}
        />
        <TextInput
          label="Religion"
          value={data.religion}
          onChange={(v: string) => setData({ ...data, religion: v })}
        />

        {/* ================= LEGAL / EDUCATION ================= */}
        <TextArea
          label="Criminal Record"
          value={data.criminalRecord}
          onChange={(v: string) => setData({ ...data, criminalRecord: v })}
        />
        <ListInput
          label="Awards / Education"
          values={data.educationAndAwards}
          onChange={(v: string[]) =>
            setData({ ...data, educationAndAwards: v })
          }
        />

        {/* ================= LIFE HISTORY ================= */}
        <TextArea
          label="Formative Experiences / Childhood"
          value={data.childhood}
          onChange={(v: string) => setData({ ...data, childhood: v })}
        />
        <TextArea
          label="Sexual History / Lovers"
          value={data.sexualHistory}
          onChange={(v: string) => setData({ ...data, sexualHistory: v })}
        />
        <TextArea
          label="People the Subject Admires"
          value={data.admiredPeople}
          onChange={(v: string) => setData({ ...data, admiredPeople: v })}
        />
        <TextArea
          label="People the Subject Dislikes"
          value={data.dislikedPeople}
          onChange={(v: string) => setData({ ...data, dislikedPeople: v })}
        />

        {/* ================= PSYCHOLOGY ================= */}
        <TextArea
          label="Dreams for the Future"
          value={data.dreams}
          onChange={(v: string) => setData({ ...data, dreams: v })}
        />
        <TextArea
          label="Fears"
          value={data.fears}
          onChange={(v: string) => setData({ ...data, fears: v })}
        />
        <TextArea
          label="Personality Traits / Habits / Sayings"
          value={data.personalityTraits}
          onChange={(v: string) => setData({ ...data, personalityTraits: v })}
        />

        {/* ================= RELATIONSHIPS ================= */}
        <TextArea
          label="Romantic Relationships"
          value={data.romanticRelationships}
          onChange={(v: string) =>
            setData({ ...data, romanticRelationships: v })
          }
        />
        <TextArea
          label="Family Relationships"
          value={data.familyRelationships}
          onChange={(v: string) => setData({ ...data, familyRelationships: v })}
        />
        <TextArea
          label="Problem Relationships"
          value={data.problemRelationships}
          onChange={(v: string) =>
            setData({ ...data, problemRelationships: v })
          }
        />

        {/* ================= LIFE SITUATION ================= */}
        <TextArea
          label="Employment / School"
          value={data.employment}
          onChange={(v: string) => setData({ ...data, employment: v })}
        />
        <TextArea
          label="Economic Status / Behavior"
          value={data.economicStatus}
          onChange={(v: string) => setData({ ...data, economicStatus: v })}
        />
        <TextArea
          label="Pets / Plants"
          value={data.petsAndPlants}
          onChange={(v: string) => setData({ ...data, petsAndPlants: v })}
        />

        {/* ================= SKILLS / HABITS ================= */}
        <ListInput
          label="Special Skills / Fighting / Languages"
          values={data.specialSkills}
          onChange={(v: string[]) => setData({ ...data, specialSkills: v })}
        />
        <ListInput
          label="Hobbies / Recreation"
          values={data.hobbies}
          onChange={(v: string[]) => setData({ ...data, hobbies: v })}
        />
        <TextArea
          label="Likes / Dislikes"
          value={data.likesDislikes}
          onChange={(v: string) => setData({ ...data, likesDislikes: v })}
        />
        <TextArea
          label="Habits"
          value={data.habits}
          onChange={(v: string) => setData({ ...data, habits: v })}
        />
        <TextArea
          label="Favorite Phrases"
          value={data.favoritePhrases}
          onChange={(v: string) => setData({ ...data, favoritePhrases: v })}
        />

        {/* ================= OTHER ================= */}
        <TextArea
          label="Others"
          value={data.others}
          onChange={(v: string) => setData({ ...data, others: v })}
        />
      </div>

      <button className="pdf-btn" onClick={() => generateCharacterPDF(data)}>
        Generate PDF
      </button>
    </>
  );
};

export default CharacterForm;
