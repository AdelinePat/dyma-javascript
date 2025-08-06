export function pairOuImpair(number) {
    if (number % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

console.log(pairOuImpair(2))
console.log(pairOuImpair(54))
console.log(pairOuImpair(-3))

export const carre = (number) => {
    return number ** 2
}

console.log(carre(2));