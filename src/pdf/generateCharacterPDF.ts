import jsPDF from "jspdf";
import { CharacterData } from "../types/CharacterData";

export function generateCharacterPDF(data: CharacterData) {
  const pdf = new jsPDF("p", "mm", "a4");

  let y = 15;
  const marginX = 15;
  const pageHeight = 280;

  const ensureSpace = (needed = 8) => {
    if (y + needed > pageHeight) {
      pdf.addPage();
      y = 15;
    }
  };

  const section = (title: string) => {
    ensureSpace(12);
    pdf.setFont("Times", "bold");
    pdf.text(title, marginX, y);
    y += 3;
    pdf.line(marginX, y, 195, y);
    y += 6;
  };

  const text = (content?: string) => {
    if (!content || !content.trim()) return;
    ensureSpace();
    pdf.setFont("Times", "normal");
    const wrapped = pdf.splitTextToSize(content, 180);
    pdf.text(wrapped, marginX, y);
    y += wrapped.length * 6;
  };

  const list = (items?: string[]) => {
    if (!items) return;
    items
      .filter((i) => i && i.trim())
      .forEach((i) => {
        ensureSpace();
        pdf.text(`• ${i}`, marginX + 2, y);
        y += 6;
      });
  };

  // ===== TITLE =====
  pdf.setFontSize(16);
  pdf.setFont("Times", "bold");
  pdf.text("Character History", 105, y, { align: "center" });
  y += 12;

  pdf.setFontSize(11);

  // ===== IDENTITY =====
  section("Identity");
  text(`Name / Nicknames: ${data.name}`);
  text(`Age: ${data.age}`);
  text(`Sex: ${data.sex}`);

  // ===== BIRTH =====
  section("Birth & Origin");
  text(`Birthdate: ${data.birthdate}`);
  text(`Birth Sign: ${data.birthSign}`);
  text(`Blood Type: ${data.bloodType}`);
  text(`Birth Place: ${data.birthPlace}`);

  // ===== PHYSICAL =====
  section("Physical Description");
  text(`Height: ${data.height}`);
  text(`Weight: ${data.weight}`);
  text(`Eyesight / Glasses: ${data.eyesight}`);
  text(`Handedness: ${data.handedness}`);
  text(`Hair Color: ${data.hairColor}`);
  text(`Eye Color: ${data.eyeColor}`);
  text(`Type of Voice: ${data.voiceType}`);

  // ===== MEDICAL =====
  section("Medical & Physical History");
  text(data.surgeriesIllnesses);
  text(data.scarsTattoos);
  text(data.distinctivePhysicalTraits);

  // ===== BACKGROUND =====
  section("Background");
  text(`Race: ${data.race}`);
  text(`Religion: ${data.religion}`);

  // ===== LEGAL / EDUCATION =====
  section("Criminal Record");
  text(data.criminalRecord);

  section("Awards / Education");
  list(data.educationAndAwards);

  // ===== LIFE HISTORY =====
  section("Formative Experiences / Childhood");
  text(data.childhood);

  section("Sexual History / Lovers");
  text(data.sexualHistory);

  section("People the Subject Admires");
  text(data.admiredPeople);

  section("People the Subject Dislikes");
  text(data.dislikedPeople);

  // ===== PSYCHOLOGY =====
  section("Dreams");
  text(data.dreams);

  section("Fears");
  text(data.fears);

  section("Personality Traits / Habits");
  text(data.personalityTraits);

  // ===== RELATIONSHIPS =====
  section("Relationships");
  text(data.romanticRelationships);
  text(data.familyRelationships);
  text(data.problemRelationships);

  // ===== LIFE SITUATION =====
  section("Employment / Economic Status");
  text(data.employment);
  text(data.economicStatus);

  section("Pets / Plants");
  text(data.petsAndPlants);

  // ===== SKILLS / HABITS =====
  section("Special Skills");
  list(data.specialSkills);

  section("Hobbies / Recreation");
  list(data.hobbies);

  section("Likes / Dislikes");
  text(data.likesDislikes);

  section("Habits");
  text(data.habits);

  section("Favorite Phrases");
  text(data.favoritePhrases);

  section("Others");
  text(data.others);

  pdf.save(`${data.name || "character"}_history.pdf`);
}
