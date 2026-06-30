const novaScotiaCities = [
  "Advocate Harbour", "Amherst", "Annapolis Royal", "Antigonish", "Argyle",
  "Arichat", "Aylesford", "Baddeck", "Bass River", "Bear River",
  "Berwick", "Blandford", "Boisdale", "Boularderie", "Bridgetown",
  "Bridgewater", "Brookfield", "Canning", "Canso", "Caribou",
  "Carleton", "Chelsea", "Chester", "Cheticamp", "Cheverie",
  "Clark`s Harbour", "Clarksville", "Collingwood Corner", "Dartmouth", "Debert",
  "Digby", "Dingwall", "Dundee", "East Bay", "Ecum Secum",
  "Elmsdale", "Eskasoni", "Freeport", "French Village", "Gabarus",
  "Glace Bay", "Goldboro", "Goshen", "Grand Etang", "Grand Lake",
  "Grand Narrows", "Great Village", "Greenwood", "Guysborough", "Halifax",
  "Hantsport", "Heatherton", "Hopewell", "Hubbards", "Ingonish",
  "Inverness", "Kennetcook", "Kentville", "Kenzieville", "Ketch Harbour",
  "Kingston", "L`Ardoise", "LaHave", "Lake Charlotte", "Larrys River",
  "Lawrencetown", "Liverpool", "Lockeport", "Louisbourg", "Louisdale",
  "Lunenburg", "Mabou", "Maccan", "Mahone Bay", "Maitland",
  "Margaree Forks", "Marion Bridge", "Melrose", "Merigomish", "Meteghan",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < novaScotiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(novaScotiaCities[i]);
}

module.exports = { batches };
