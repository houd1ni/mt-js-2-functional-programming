
const wasBornInCountry = person => person.birthCountry === OUR_COUNTRY
const wasNaturalized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18
 
const isCitizen = person => wasBornInCountry(person) || wasNaturalized(person)
 
const isEligibleToVote = person => isOver18(person) && isCitizen(person)


const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)
