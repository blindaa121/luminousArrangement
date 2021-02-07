export const ADD_RISK_LEVEL = 'ADD_RISK_LEVEL';

export const addRiskOne = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 80,
        largeCap: 20,
        midCap: 0,
        foreign: 0, 
        smallCap: 0
    }
})

export const addRiskTwo = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 70,
        largeCap: 15,
        midCap: 15,
        foreign: 0, 
        smallCap: 0
    }
})

export const addRiskThree = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 60,
        largeCap: 15,
        midCap: 15,
        foreign: 10, 
        smallCap: 0
    }
})

export const addRiskFour = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 80,
        largeCap: 20,
        midCap: 0,
        foreign: 0, 
        smallCap: 0
    }
})
export const addRiskFive = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 40,
        largeCap: 20,
        midCap: 20,
        foreign: 20, 
        smallCap: 0
    }
})

export const addRiskSix = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 35,
        largeCap: 25,
        midCap: 5,
        foreign: 30, 
        smallCap: 5
    }
})

export const addRiskSeven = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 20,
        largeCap: 25,
        midCap: 25,
        foreign: 25, 
        smallCap: 5
    }
})

export const addRiskEight = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 10,
        largeCap: 20,
        midCap: 40,
        foreign: 20, 
        smallCap: 10
    }
})

export const addRiskNine = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 5,
        largeCap: 15,
        midCap: 40,
        foreign: 25, 
        smallCap: 15
    }
})

export const addRiskTen = () => ({
    type: ADD_RISK_LEVEL,
    level: {
        bonds: 0,
        largeCap: 5,
        midCap: 25,
        foreign: 30, 
        smallCap: 40
    }
})