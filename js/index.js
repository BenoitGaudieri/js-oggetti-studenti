// Descrizione:
// Creare un oggetto che descriva uno studente
// lo studente avrà  le seguenti proprietà: nome, cognome e età.
// Stampare attraverso il for..in tutte le proprietà (chiavi e valori).

let student = {
    nome: "Benoit",
    cognome: "Gaudieri",
    età: 32,
};

for (const key in student) {
    console.log("Chiave: " + key);
    console.log("Valore: " + student[key]);
}
