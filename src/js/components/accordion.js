const accordion = () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item) => {
        item.addEventListener('click', (e) => {
           e.preventDefault();
           item.classList.toggle('active'); 
        });
    });

};

export default accordion;