/* MUTATIONOBSERVER (Doesn't work) (() => {
    const pointChestContainer = document.querySelector(`[data-test-selector=community-points-summary`);

    if(!pointChestContainer) return;


    const pointsObserver = new MutationObserver((mutations, observer) => {
        alert('Points!');

        pointChestContainer.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].click();
    });

    pointsObserver.observe(pointChestContainer, { subtree: true, childList: true });
})(); */

/* Inefficient Timed Checking (works) */
(() => {
    setInterval(() => {
        const pointChestContainer = document.querySelector(`[data-test-selector=community-points-summary]`);

        if(!pointChestContainer) return;

        try {
            pointChestContainer.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[0].click();
            console.log("Collected a channel points chest!");
        }catch(ex)
        {
            // Element not found
        }
        
    }, 10000)();
})();