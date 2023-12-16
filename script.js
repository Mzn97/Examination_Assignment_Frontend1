document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buyButton');
    const cart = document.getElementById('cartItems');

    buyButtons.forEach(function(buyButton) {
        buyButton.addEventListener('click', function() {
            const songContainer = buyButton.closest('.song-details');
            const songTitle = songContainer.querySelector('p').textContent;

            const purchasedSong = document.createElement('li');
            purchasedSong.textContent = songTitle;

            cart.appendChild(purchasedSong);

            alert('Låten har lagts till i din korg.');
        });
    });
});
