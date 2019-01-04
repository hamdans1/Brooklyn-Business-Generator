let businessName = '';

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
  'Fair Trade',
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

const businessGenerator = () => {
  let randomNeighborhood = neighborhoodArray[Math.floor(Math.random() * neighborhoodArray.length)];
  let randomDescriptor = descriptorArray[Math.floor(Math.random() * descriptorArray.length)];
  let randomProduct = productArray[Math.floor(Math.random() * productArray.length)];
  let randomBusiness = businessArray[Math.floor(Math.random() * businessArray.length)];
  businessName = `${randomNeighborhood} ${randomDescriptor} ${randomProduct} ${randomBusiness}`;
  return businessName;
};
