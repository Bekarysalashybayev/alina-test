function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomNumbersArray(size: number, min: number, max: number): number[] {
    const randomNumbersArray = [];
    for (let i = 0; i < size; i++) {
        const randomNumber = getRandomNumber(min, max);
        randomNumbersArray.push(randomNumber);
    }
    return randomNumbersArray;
}
