require('dotenv').config();

const thirdPlanet = process.env.THIRD_PLANET_FROM_SUN;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log(`Third planet from the sun is ${thirdPlanet}` );
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main();
