export const RECEIVE_LEVEL = 'RECEIVE_LEVEL';
export const RECEIVE_LEVELS = 'RECEIVE_LEVELS';

export const selectAllRisks = () => ({
    type: RECEIVE_LEVELS,
    levels: [
        {
            level: 1,
            bonds: 80,
            largeCap: 20,
            midCap: 0,
            foreign: 0,
            smallCap: 0
        },
        {
            level: 2,
            bonds: 70,
            largeCap: 15,
            midCap: 15,
            foreign: 0,
            smallCap: 0
        },
        {
            level: 3,
            bonds: 60,
            largeCap: 15,
            midCap: 15,
            foreign: 10,
            smallCap: 0
        },
        {
            level: 4,
            bonds: 80,
            largeCap: 20,
            midCap: 0,
            foreign: 0,
            smallCap: 0
        },
        {
            level: 5,
            bonds: 40,
            largeCap: 20,
            midCap: 20,
            foreign: 20,
            smallCap: 0
        },
        {
            level: 6,
            bonds: 35,
            largeCap: 25,
            midCap: 5,
            foreign: 30,
            smallCap: 5
        },
        {
            level: 7,
            bonds: 20,
            largeCap: 25,
            midCap: 25,
            foreign: 25,
            smallCap: 5
        },
        {
            level: 8,
            bonds: 10,
            largeCap: 20,
            midCap: 40,
            foreign: 20,
            smallCap: 10
        },
        {
            level: 9,
            bonds: 5,
            largeCap: 15,
            midCap: 40,
            foreign: 25,
            smallCap: 15
        },
        {
            level: 10,
            bonds: 0,
            largeCap: 5,
            midCap: 25,
            foreign: 30,
            smallCap: 40
        }
    ]
})

export const selectRiskOne = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 1,
        bonds: 80,
        largeCap: 20,
        midCap: 0,
        foreign: 0, 
        smallCap: 0
    }
})

export const selectRiskTwo = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 2,
        bonds: 70,
        largeCap: 15,
        midCap: 15,
        foreign: 0, 
        smallCap: 0
    }
})

export const selectRiskThree = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 3,
        bonds: 60,
        largeCap: 15,
        midCap: 15,
        foreign: 10, 
        smallCap: 0
    }
})

export const selectRiskFour = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 4,
        bonds: 50,
        largeCap: 20,
        midCap: 20,
        foreign: 10, 
        smallCap: 0
    }
})
export const selectRiskFive = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 5,
        bonds: 40,
        largeCap: 20,
        midCap: 20,
        foreign: 20, 
        smallCap: 0
    }
})

export const selectRiskSix = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 6,
        bonds: 35,
        largeCap: 25,
        midCap: 5,
        foreign: 30, 
        smallCap: 5
    }
})

export const selectRiskSeven = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 7,
        bonds: 20,
        largeCap: 25,
        midCap: 25,
        foreign: 25, 
        smallCap: 5
    }
})

export const selectRiskEight = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 8,
        bonds: 10,
        largeCap: 20,
        midCap: 40,
        foreign: 20, 
        smallCap: 10
    }
})

export const selectRiskNine = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 9,
        bonds: 5,
        largeCap: 15,
        midCap: 40,
        foreign: 25, 
        smallCap: 15
    }
})

export const selectRiskTen = () => ({
    type: RECEIVE_LEVEL,
    level: {
        level: 10,
        bonds: 0,
        largeCap: 5,
        midCap: 25,
        foreign: 30, 
        smallCap: 40
    }
})