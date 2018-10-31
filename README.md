# Poppin' Bottles

## Descriptiopn
This is a recycling program on pop bottles. Here is how the program works:

For every two empty bottles, you can get one free (full) bottle of pop
For every four bottle caps, you can get one free (full) bottle of pop
Each bottle of pop costs $2 to purchase
Given these parameters, this program figure out how many total bottles of pop can be redeemed given a customer investment.

## Installation

Clone this repository to a new directory on your computer:
```
git clone https://github.com/fiveache/popping-bottles.git
```

## Usage
In the command line, run `node index.js <cash>`, where `<cash>` is a number representing how much you're spending on bottles

```
node index.js 10
```

Expected output:
```
TOTAL BOTTLES: 15
  TOTAL EARNED:
    FROM PURCHASING BOTTLES: 5
    FROM RETURNING BOTTLES:  7
    FROM RETURNING CAPS:     3
  YOU HAVE:
    1 BOTTLE(S) REMAINING &
    3 BOTTLE CAP(S) REMAINING
```
