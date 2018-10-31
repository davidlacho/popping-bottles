const buyBottlesCashOrBottles = cash => Math.floor(cash / 2);
const buyBottlesWithBottleCaps = bottlePops => Math.floor(bottlePops / 4);

let totalBottles = 0;
let bottlesOnHand = 0;
let bottleCapsOnHand = 0;
let bottlesObtainedThroughCaps = 0;
let bottlesObtainedThroughBottles = 0;

const popBottles = (cash) => {
  // First buy the bottles.
  if (cash) {
    const newBottles = buyBottlesCashOrBottles(cash);
    bottlesOnHand += newBottles;
    bottleCapsOnHand += newBottles;
    totalBottles += bottlesOnHand;
  }

  if (bottleCapsOnHand >= 4) {
    const newBottlesFromCaps = buyBottlesWithBottleCaps(bottleCapsOnHand);
    bottlesObtainedThroughCaps += newBottlesFromCaps;
    bottlesOnHand += newBottlesFromCaps;
    totalBottles += newBottlesFromCaps;
    bottleCapsOnHand -= (newBottlesFromCaps * 4);
    bottleCapsOnHand += newBottlesFromCaps;
  }

  if (bottlesOnHand >= 2) {
    const newBottles = buyBottlesCashOrBottles(bottlesOnHand);
    bottlesObtainedThroughBottles += newBottles;
    totalBottles += newBottles;
    bottlesOnHand -= newBottles;
    bottleCapsOnHand += newBottles;
  }

  if (bottlesOnHand >= 2 || bottleCapsOnHand >= 4) {
    popBottles();
  }
};

if (process.argv[2] && process.argv.length === 3) {
  popBottles(process.argv[2]);
  console.log(
    `TOTAL BOTTLES: ${totalBottles}
  TOTAL EARNED:
    BOTTLES:  ${bottlesObtainedThroughBottles}
    CAPS:     ${bottlesObtainedThroughCaps}`
  );
} else {
  console.log('node index.js <cash>');
}
