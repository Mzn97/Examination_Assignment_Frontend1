document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buyButton');
    const cart = document.getElementById('cartItems');
    let totalCost = 0;

    buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', function() {

            buyButton.disabled = true;

            const songContainer = buyButton.closest('.song-details');
            const songTitle = songContainer.querySelector('p').textContent;
            const songPrice = parseFloat(songContainer.querySelector('p').getAttribute('data-price'));

            if (!isNaN(songPrice)) {
                const purchasedSong = document.createElement('li');
                purchasedSong.textContent = songTitle;

                cart.appendChild(purchasedSong);

                totalCost += songPrice;
                updateTotalCost();

                alert('Låten har lagts till i din korg.');
            } else {
                alert('Felaktig prisinformation.');
            }

            setTimeout(function() {
                buyButton.disabled = false;
            }, 1000);
        });
    });

    function updateTotalCost() {
        document.getElementById('totalCost').textContent = `Total kostnad: ${totalCost.toFixed(2)} kr`;
    }
});
