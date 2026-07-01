const novaScotiaCities = [
  "Middleton", "Monastery", "Mount Uniacke", "Mulgrave", "Musquodoboit Harbour",
  "New Germany", "New Glasgow", "New Ross", "New Waterford", "Noel",
  "North Sydney", "Oxford", "Parrsboro", "Peggy`s Cove", "Pictou",
  "Port Bickerton", "Port Dufferin", "Port Greville", "Port Hawkesbury", "Port Hood",
  "Port La Tour", "Port Maitland", "Port Morien", "Port Mouton", "Pubnico",
  "Pugwash", "Queensport", "River Hebert", "River John", "Riverport",
  "Salt Springs", "Saulnierville", "Shelburne", "Sherbrooke", "Shubenacadie",
  "Southampton", "Springfield", "Springhill", "St. Margaret Village", "St. Peter`s",
  "Stellarton", "Stewiacke", "Sydney", "Tangier", "Tatamagouche",
  "Thorburn", "Trenton", "Truro", "Tusket", "Upper Musquodoboit",
  "Upper Stewiacke", "Wallace", "Walton", "Waverley", "Wedgeport",
  "Westville", "Weymouth", "Whycocomagh", "Windsor", "Wolfville",
  "Yarmouth",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < novaScotiaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(novaScotiaCities[i]);
}

module.exports = { batches };
