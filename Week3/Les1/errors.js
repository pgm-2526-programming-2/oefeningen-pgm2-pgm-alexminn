// throw "Fout!";

const message = new Error("Er ging iets mis!");
// throw message;

try {
    console.log('We voeren code uit!');
    // Real-life - zelden gaan we zelf een error throwen, dit komt meestal uit library of ingebouwde js-feature.
    // fetch('www.test.be');

    // Bijvoorbeeld; item in databank bestaat niet!
    throw new Error('Item in databank bestaat niet!');
} catch (error) {
    console.log('Hier geraken we wanneer er iets misgaat', error.message);
} finally {
    console.log('Code die sowieso moet uitgevoerd worden zelfs als er iets misgaat, maak ook indien niet.')
}