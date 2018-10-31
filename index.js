const buyBottlesCashOrBottles = cash => Math.floor(cash / 2);
const buyBottlesWithBottleCaps = bottlePops => Math.floor(bottlePops / 4);

let totalBottles = 0;
let bottlesOnHand = 0;
let bottleCapsOnHand = 0;

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
    bottlesOnHand += newBottlesFromCaps;
    totalBottles += newBottlesFromCaps;
    bottleCapsOnHand -= (newBottlesFromCaps * 4);
    bottleCapsOnHand += newBottlesFromCaps;
  }

  if (bottlesOnHand >= 2) {
    const newBottles = buyBottlesCashOrBottles(bottlesOnHand);
    totalBottles += newBottles;
    bottlesOnHand -= newBottles;
    bottleCapsOnHand += newBottles;
  }

  if (bottlesOnHand >= 2 || bottleCapsOnHand >= 4) {
    popBottles();
  }
};

popBottles(10);

console.log(totalBottles);
