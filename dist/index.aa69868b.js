//open switch
function clickToOpen() {
    $('#mainNav').toggleClass('close');
    $('#mainNav').toggleClass('open');
}
//arrows
// Option 1: Using the Intersection Observer API (modern approach)
document.addEventListener('DOMContentLoaded', ()=>{
    // Accept an array of element IDs to observe
    const elementIds = [
        'arrowIncreaseDemand',
        'arrowEmpowering',
        'arrowDynamic',
        'arrowContinuous',
        'arrowByEducators'
    ]; // Default value - can be modified or passed as a parameter
    // Initialize the observer
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                console.log(`Element #${entry.target.id} is now visible in the viewport!`);
                // Add your action here, for example:
                entry.target.classList.add('slideLeft');
            // Optional: Stop observing once it's visible
            // observer.unobserve(entry.target);
            } else console.log(`Element #${entry.target.id} is no longer visible in the viewport.`);
        });
    }, {
        // Options:
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    // Function to initialize observation for multiple elements
    function observeElements(ids) {
        ids.forEach((id)=>{
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
                console.log(`Now observing element with ID: ${id}`);
            } else console.warn(`Element with ID "${id}" not found on the page.`);
        });
    }
    // Start observing elements with the specified IDs
    observeElements(elementIds);
    // Example of how to add more elements to observe later:
    // observeElements(['another-element', 'yet-another-element']);
    // Utility function to set up observation for a new list of IDs
    window.observeScrollElements = function(ids) {
        if (Array.isArray(ids)) observeElements(ids);
        else if (typeof ids === 'string') observeElements([
            ids
        ]); // Convert single ID to array
        else console.error('observeScrollElements requires an array of IDs or a single ID string');
    };
});

//# sourceMappingURL=index.aa69868b.js.map
