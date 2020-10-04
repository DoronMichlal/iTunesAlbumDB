export default class Music {
    async getData(userInput) {
        const response = await fetch(`https://itunes.apple.com/search?term=${userInput}&entity=album`);

        const data = await response.json();

        return data;
    }
}
