const elements = document.querySelectorAll('.rating');

function collect_ratings(){
    const ratings = {
        count: 0,
        sum: 0,
        average: 0,
    };

    let rating = 0;

    elements.forEach( e => {
        rating = parseInt(e.id.replace('star', ''));
        ratings.count += parseInt(e.value)
        ratings.sum += parseInt(e.value) * rating;
    });

    if (ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count;
    }
    return ratings
};

document.addEventListener('change', () => {
 const ratings = collect_ratings();
 document.querySelector('#average').value = ratings.average.toFixed(2);
});
