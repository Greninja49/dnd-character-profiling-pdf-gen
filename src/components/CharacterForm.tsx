import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./CharacterSheet.css";

interface CharacterData {
  name: string;
  age: string;
  sex: string;
  birthdate: string;
  birthSign: string;
  bloodType: string;
  birthPlace: string;
  height: string;
  weight: string;
  eyesight: string;
  handedness: string;
  hairColor: string;
  eyeColor: string;
  voiceType: string;

  surgeries: string;
  scars: string;
  distinctiveFeatures: string;

  race: string;
  religion: string;

  criminalRecord: string;
  awardsEducation: string;

  childhood: string;
  sexualHistory: string;
  admiredPeople: string;
  dislikedPeople: string;

  dreams: string;
  fears: string;

  personalityTraits: string;

  romanticRelationships: string;
  familyRelationships: string;
  problemRelationships: string;

  employment: string;
  economicStatus: string;
  petsPlants: string;

  specialSkills: string;
  hobbies: string;
  likesDislikes: string;
  habits: string;
  favoritePhrases: string;
  others: string;
}

const CharacterSheet: React.FC = () => {
  const sheetRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<CharacterData>({
    name: "",
    age: "",
    sex: "",
    birthdate: "",
    birthSign: "",
    bloodType: "",
    birthPlace: "",
    height: "",
    weight: "",
    eyesight: "",
    handedness: "",
    hairColor: "",
    eyeColor: "",
    voiceType: "",

    surgeries: "",
    scars: "",
    distinctiveFeatures: "",

    race: "",
    religion: "",

    criminalRecord: "",
    awardsEducation: "",

    childhood: "",
    sexualHistory: "",
    admiredPeople: "",
    dislikedPeople: "",

    dreams: "",
    fears: "",

    personalityTraits: "",

    romanticRelationships: "",
    familyRelationships: "",
    problemRelationships: "",

    employment: "",
    economicStatus: "",
    petsPlants: "",

    specialSkills: "",
    hobbies: "",
    likesDislikes: "",
    habits: "",
    favoritePhrases: "",
    others: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const exportPDF = async () => {
    if (!sheetRef.current) return;

    const canvas = await html2canvas(sheetRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("Character_History_Full.pdf");
  };

  const Field = ({
    label,
    name,
  }: {
    label: string;
    name: keyof CharacterData;
  }) => (
    <div className="box">
      <label>{label}</label>
      <input name={name} value={data[name]} onChange={handleChange} />
    </div>
  );

  const Area = ({
    label,
    name,
  }: {
    label: string;
    name: keyof CharacterData;
  }) => (
    <div className="box full">
      <label>{label}</label>
      <textarea name={name} value={data[name]} onChange={handleChange} />
    </div>
  );

  return (
    <>
      <div className="sheet" ref={sheetRef}>
        <h2 className="title">Character History</h2>

        <div className="grid">
          <Field label="Name / Nicknames" name="name" />
          <Field label="Age" name="age" />
          <Field label="Sex" name="sex" />

          <Field label="Birthdate" name="birthdate" />
          <Field label="Birth Sign" name="birthSign" />
          <Field label="Blood Type" name="bloodType" />
          <Field label="Birth Place" name="birthPlace" />

          <Field label="Height" name="height" />
          <Field label="Weight" name="weight" />
          <Field label="Eyesight / Glasses" name="eyesight" />
          <Field label="Handedness" name="handedness" />
          <Field label="Hair Color" name="hairColor" />
          <Field label="Eye Color" name="eyeColor" />
          <Field label="Type of Voice" name="voiceType" />

          <Area
            label="History of Surgeries / Cavities / Illnesses"
            name="surgeries"
          />
          <Area label="Scars / Burns / Skin Damage / Tattoos" name="scars" />
          <Area
            label="Other Distinctive Physical Characteristics"
            name="distinctiveFeatures"
          />

          <Field label="Race" name="race" />
          <Field label="Religion" name="religion" />

          <Area label="Criminal Record" name="criminalRecord" />
          <Area label="Awards / Education" name="awardsEducation" />

          <Area label="Formative Experiences / Childhood" name="childhood" />
          <Area label="Sexual History / Lovers" name="sexualHistory" />
          <Area label="People the Subject Admires" name="admiredPeople" />
          <Area label="People the Subject Dislikes" name="dislikedPeople" />

          <Area label="Dreams for the Future" name="dreams" />
          <Area label="Fears" name="fears" />

          <Area
            label="Personality Traits / Habits / Sayings"
            name="personalityTraits"
          />

          <Area label="Romantic Relationships" name="romanticRelationships" />
          <Area label="Family Relationships" name="familyRelationships" />
          <Area label="Problem Relationships" name="problemRelationships" />

          <Area label="Employment / School" name="employment" />
          <Area label="Economic Status / Behavior" name="economicStatus" />
          <Area label="Pets / Plants" name="petsPlants" />

          <Area
            label="Special Skills / Fighting / Languages"
            name="specialSkills"
          />
          <Area label="Hobbies / Recreation" name="hobbies" />
          <Area label="Likes / Dislikes" name="likesDislikes" />
          <Area label="Habits" name="habits" />
          <Area label="Favorite Phrases" name="favoritePhrases" />
          <Area label="Others" name="others" />
        </div>
      </div>

      <button className="pdf-btn" onClick={exportPDF}>
        Download PDF
      </button>
    </>
  );
};

export default CharacterSheet;
