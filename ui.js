export default class UI {
    render(arr) {
        const container = document.getElementById('cardsRow');
        const sort = document.getElementById('sort');
        const results = document.getElementById('resultsSpan');

        if (arr.length > 0) {
            results.innerHTML = `There are ${arr.length} result`;
            sort.style.display = 'flex';

            let output = '';
            arr.forEach(({ thumbnail, title, year, tracks, price, url }) => {
                output += `
                <div class="card">
                    <img src="${thumbnail}" class="card-img-top" />
                
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5><br>
                        
                        <div id="spanDiv">
                            <span>Year Released: ${year}</span>
                            <span>Tracks: ${tracks}</span><br>
                            <span>Price: $${price}</span><br>
                        </div>
                    </div>
                    <a href="${url}" target="_blank"><button class="btn btn-primary">GO TO ALBUM</button></a>
                </div>`;
            });

            container.innerHTML = output;
        } else {
            results.innerHTML = `There are no results...`;
            sort.style.display = 'none';
            container.innerHTML = '';
        }
    }

    turnDataToArray(data) {
        let arr = [];

        data.results.forEach(({ collectionCensoredName, releaseDate, trackCount, collectionPrice, collectionViewUrl, artworkUrl100 }) => {
            arr.push({
                title: collectionCensoredName,
                year: releaseDate.slice(0, 4),
                tracks: trackCount,
                price: collectionPrice,
                url: collectionViewUrl,
                thumbnail: artworkUrl100
            });
        });

        return arr;
    }

    resetForm() {
        const form1 = document.querySelector('#form1');
        form1.reset();
    }

    sortArrayOfObjects(arr, byProperty) {
        return arr.sort((a, b) => {
            if (a[byProperty] < b[byProperty]) {
                return -1;
            }
            if (a[byProperty] < b[byProperty]) {
                return 1;
            }
            return 0;
        });
    }
}
