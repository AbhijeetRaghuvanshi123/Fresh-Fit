let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}







document.addEventListener('DOMContentLoaded', function() {
    const serviceRows = document.querySelectorAll('.row');

    serviceRows.forEach(row => {
        row.addEventListener('click', () => {
            // Close any other open descriptions
            serviceRows.forEach(otherRow => {
                if (otherRow !== row && otherRow.classList.contains('active')) {
                    otherRow.classList.remove('active');
                }
            });

            // Toggle the active class on the clicked row
            row.classList.toggle('active');
        });
    });
});
