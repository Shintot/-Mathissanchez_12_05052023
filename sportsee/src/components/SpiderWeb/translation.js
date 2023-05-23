class Translations {
  static translate(word) {
    const translations = {
      "intensity": "intensité",
      "strength": "force",
      "speed": "vitesse",
      "endurance": "endurance",
      "energy": "énergie",
      "cardio": "cardio",
    };

    return translations[word] || word;
  }
}
export default Translations;
