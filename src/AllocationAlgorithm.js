function calculateOptimizedAmount(userInput, riskPercentages) {
  const optimizedAmounts = [];
  const inputValues = Object.values(userInput).map(num => Number(num))
  const length = inputValues.length;
  const total = inputValues.reduce((a, b) => a + b);

  for (let i = 0; i < length; i++) {
    const percentage = (riskPercentages[i] / 100)
    const optimizedVal = (total * percentage).toFixed(2);
    optimizedAmounts.push(optimizedVal)
  }

  const moneyDifferences = calculateDifferences(inputValues, optimizedAmounts);
  return calculateAllocations(moneyDifferences);
}

function calculateDifferences(userInput, optimizedAmounts) {
  const length = userInput.length;
  const categoryAmounts = {
    'Bonds': 0,
    'Large Cap': 0,
    'Mid Cap': 0,
    'Small Cap': 0,
    'Foreign': 0
  }

  for (let i = 0; i < length; i++) {
    let diff = (userInput[i] - optimizedAmounts[i]).toFixed(2);
    switch (i) {
      case 0:
        categoryAmounts['Bonds'] = diff
      case 1:
        categoryAmounts['Large Cap'] = diff
      case 2:
        categoryAmounts['Mid Cap'] = diff
      case 3:
        categoryAmounts['Small Cap'] = diff
      case 4:
        categoryAmounts['Foreign'] = diff
    }
  }

  return categoryAmounts;
}

function calculateAllocations(obj) {
  const needsMoney = {};
  const givesMoney = {};
  const output = [];
  for (const category in obj) {
    if (obj[category] < 0) {
      needsMoney[category] = obj[category];
    } else if (obj[category] > 0) {
      givesMoney[category] = obj[category];
    }
  }
  
  console.log(needsMoney);
  console.log(givesMoney);
  const need = Object.keys(needsMoney).sort((a,b) => a - b);
  const give = Object.keys(givesMoney).sort((a,b) => a - b);
  let i = 0;
  let j = 0;
  console.log(need);
  console.log(give);
  while (i < give.length) {
    while (j < need.length) {
      needsMoney[need[j]] = Math.abs(needsMoney[need[j]]).toFixed(2);
      
      if (Number(givesMoney[give[i]]) <= Number(needsMoney[need[j]])) {
        needsMoney[need[j]] = (needsMoney[need[j]] - givesMoney[give[i]]).toFixed(2);
        output.push(`Transfer $${givesMoney[give[i]]} from ${give[i]} to ${need[j]}`);
        i++;
        break;
      } else if (Number(needsMoney[need[j]]) == 0) {
        j++;
      } else {
        givesMoney[give[i]] = (givesMoney[give[i]] - needsMoney[need[j]]).toFixed(2);
        output.push(`Transfer $${needsMoney[need[j]]} from ${give[i]} to ${need[j]}`);
        j++
      }
    }
  }

  return output
}
userInput = [300,300,300,0,300]
riskPercentages = [35,25,5,5,30]
console.log(calculateOptimizedAmount(userInput, riskPercentages))

