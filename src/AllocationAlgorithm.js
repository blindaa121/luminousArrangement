
    function calculateOptimizedAmount(userInput, riskPercentages) {
        // arr1 = user input
        // arr2 = risk percentages
        const optimizedAmounts = [];
        const length = userInput.length;
        const total = userInput.reduce((a, b) => a + b);

        for (let i = 0; i < length; i++) {
            const percentage = (riskPercentages[i] / 100).toFixed(2);
            const optimizedVal = (total * percentage).toFixed(2);
            optimizedAmounts.push(optimizedVal)
        }
        
        calculateDifferences(userInput, optimizedAmounts)
    }

    function calculateDifferences(userInput, optimizedAmounts) {
        // arr1 will be selected risk percentages 
        // arr2 will be the user input in dollar amount 
        // output differences 
        const categoryAmounts = {
            'Bonds': 0,
            'Large Cap': 0,
            'Mid Cap': 0,
            'Small Cap': 0,
            'Foreign': 0
        }

        const length = userInput.length;

        for (let i = 0; i < length; i++) {
            let diff = (userInput[i] - optimizedAmounts[i]).toFixed(2);
            switch (i) {
                case 0:
                    categoryAmounts['Bonds'] = diff;
                case 1:
                    categoryAmounts['Large Cap'] = diff;
                case 2:
                    categoryAmounts['Mid Cap'] = diff;
                case 3:
                    categoryAmounts['Small Cap'] = diff;
                case 4:
                    categoryAmounts['Foreign'] = diff;
            }
        }

        calculateAllocations(categoryAmounts)
    }

    function calculateAllocations(obj) {
        console.log(obj, 'coming from calculateAllocations');
        const needsMoney = {};
        const givesMoney = {};
        const output = [];
        // conskeys= {};
        for (const category in obj) {
            if (obj[category] < 0) {
                needsMoney[category] = obj[category];
            } else if (obj[category] > 0) {
                givesMoney[category] = obj[category];
            }
        }
        console.log(needsMoney);
        console.log(givesMoney);
        const needCategories = Object.keys(needsMoney);
        const giveCategories = Object.keys(givesMoney);

        let i = 0;
        let j = 0;
        while (i < giveCategories.length) {
            debugger
            while (j < needCategories.length) {
                needsMoney[needCategories[j]] = Math.abs(needsMoney[needCategories[j]]).toFixed(2);
                if (givesMoney[giveCategories[i]] <= needsMoney[needCategories[j]]) {
                    needsMoney[needCategories[j]] = (needsMoney[needCategories[j]] - givesMoney[giveCategories[i]]).toFixed(2);
                    output.push(`Transfer $${givesMoney[giveCategories[i]]} from ${giveCategories[i]} to ${needCategories[j]}`);
                    i++;
                    break;
                } else {
                    givesMoney[giveCategories[i]] = (givesMoney[giveCategories[i]] - needsMoney[needCategories[j]]).toFixed(2);
                    output.push(`Transfer $${needsMoney[needCategories[j]]} from ${giveCategories[i]} to ${needCategories[j]}`);
                    j++
                }
            }
        }

        return output
    }



// let userInput = [12, 50, 65, 50, 87];
// let riskPercentage = [35, 25, 5, 30, 5];
// let optimizedAmount = [87.50,62.50,12.50,75,12.50]
// getOptimizedAmount(optimizedAmount, userInput)
// console.log(calculateOptimizedAmount(userInput, riskPercentage))