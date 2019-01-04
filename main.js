const neighborhoodArray = [
  'Clinton Hill',
  'Cobble Hill',
  'BoCoCa',
  'Park Slope',
  'DUMBO',
  'Williamsburg',
  'Greenpoint',
  'Fort Greene'
];

const descriptorArray = [
  'Organic',
  'Artisan',
  'Craft',
  'Sweet',
  'Handmade',
  'Vegan'
];

const productArray = [
  'Bourbon',
  'Kombucha',
  'Acai',
  'Tattoo',
  'Charcoal',
  'Hummus',
  'Tea'
];

const businessArray = [
  'Haus',
  'Collective',
  'Hall',
  'Company',
  'Studio',
  'Bar',
  'Exchange'
];

//Clicking 'generate' button should call function that returns random element from each array

const businessGenerator() {
  let businessName = '';
  businessName = neighborhoodArray[Math.floor(Math.random * neighborhoodArray.length)];
  return businessName;
}
