const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStronge();
calculatetotal();


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calculatetotal();
    };
});


select.addEventListener('change', function(e){
    calculatetotal();
})

function calculatetotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);


        seats.forEach(function(seat){
            seatsArr.push(seat);
        })
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });
    console.log(selectedSeatIndexs)


    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value  + '₺';

    saveToLocalStronge(selectedSeatIndexs);
};
function getFromLocalStronge(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index) > -1 ){
                seat.classList.add('selected');
            }
        })
    }



    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null){
        select.selectedIndex = selectedMovieIndex;

    }
}




function saveToLocalStronge(indexs){
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}