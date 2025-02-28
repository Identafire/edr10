//open switch
function clickToOpen() {
    $('#mainNav').toggleClass('close');
    $('#mainNav').toggleClass('open');
}
//arrows
// Enhanced scroll detection script that works with both IDs and classes
document.addEventListener('DOMContentLoaded', ()=>{
    // Configuration object for elements to observe
    const elementsConfig = [
        // Example with ID
        {
            selector: 'heroArrowOne',
            type: 'id',
            onEnter: (element, selector)=>{
                element.classList.add('visible', 'slide-in-bounce');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        },
        {
            selector: 'heroArrowTwo',
            type: 'id',
            onEnter: (element, selector)=>{
                element.classList.add('visible', 'slide-in-bounce-slow');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        },
        {
            selector: 'heroArrowOneMob',
            type: 'id',
            onEnter: (element, selector)=>{
                element.classList.add('visible', 'slide-in-bounce');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        },
        {
            selector: 'heroArrowTwoMob',
            type: 'id',
            onEnter: (element, selector)=>{
                element.classList.add('visible', 'slide-in-bounce-slow');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        },
        // Example with class
        {
            selector: 'fadeIn',
            type: 'class',
            onEnter: (element, selector)=>{
                element.classList.add('fade-in', 'visible');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        },
        {
            selector: 'slideIn',
            type: 'class',
            onEnter: (element, selector)=>{
                element.classList.add('visible', 'slide-in-bounce');
                element.classList.remove('invisible');
            },
            onExit: (element, selector)=>{}
        }
    ];
    // Create an Intersection Observer instance
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            // Find which configuration this element belongs to
            const elementConfig = findConfigForElement(entry.target);
            if (!elementConfig) return; // Skip if no config found
            const selectorPrefix = elementConfig.type === 'id' ? '#' : '.';
            const selectorName = '${selectorPrefix}${elementConfig.selector}';
            if (entry.isIntersecting) {
                // Element has entered the viewport
                if (typeof elementConfig.onEnter === 'function') {
                    // Check if the function expects two parameters
                    if (elementConfig.onEnter.length >= 2) elementConfig.onEnter(entry.target, selectorName);
                    else // Original function only expects one parameter
                    elementConfig.onEnter(entry.target);
                } else {
                    console.error('onEnter is not a function for element: ${selectorName}');
                    // Apply default behavior
                    entry.target.classList.add('visible');
                }
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    // Helper function to find the matching configuration for an element
    function findConfigForElement(element) {
        return elementsConfig.find((config)=>{
            if (config.type === 'id') return element.id === config.selector;
            else if (config.type === 'class') return element.classList.contains(config.selector);
            return false;
        });
    }
    // Start observing all configured elements
    elementsConfig.forEach((config)=>{
        let elements = [];
        try {
            if (config.type === 'id') {
                // Get element by ID
                const element = document.getElementById(config.selector);
                if (element) elements = [
                    element
                ];
            } else if (config.type === 'class') {
                // Get elements by class name
                const collection = document.getElementsByClassName(config.selector);
                if (collection && collection.length > 0) elements = Array.from(collection);
            }
            const selectorPrefix = config.type === 'id' ? '#' : '.';
            const selectorName = '${selectorPrefix}${config.selector}';
            if (elements.length === 0) console.warn('No elements found for ${selectorName}');
            else elements.forEach((element)=>{
                if (element) {
                    observer.observe(element);
                    console.log("Now observing ${config.type === 'id' ? 'element with ID' : 'element with class'}: ${selectorName}");
                }
            });
        } catch (error) {
            console.error("Error while setting up observation for ${config.type === 'id' ? '#' : '.'}${config.selector}:", error);
        }
    });
    // Utility functions
    // Add a new element to observe by ID
    window.observeElementById = function(id, onEnterFn, onExitFn) {
        if (!id) {
            console.error('No ID provided to observeElementById');
            return false;
        }
        // Default functions if not provided
        const onEnter = onEnterFn || function(el) {
            console.log('Element #${id} has entered the viewport!');
            el.classList.add('visible');
        };
        const onExit = onExitFn || function(el) {
            console.log('Element #${id} has left the viewport.');
            el.classList.remove('visible');
        };
        // Add to our configuration
        const newConfig = {
            selector: id,
            type: 'id',
            onEnter,
            onExit
        };
        elementsConfig.push(newConfig);
        // Start observing the new element
        const element = document.getElementById(id);
        if (element) {
            observer.observe(element);
            console.log('Now observing element with ID: #${id}');
            return true;
        } else {
            console.error('Element with ID "#${id}" not found on the page.');
            return false;
        }
    };
    // Add elements to observe by class
    window.observeElementsByClass = function(className, onEnterFn, onExitFn) {
        if (!className) {
            console.error('No class name provided to observeElementsByClass');
            return false;
        }
        // Default functions if not provided
        const onEnter = onEnterFn || function(el) {
            console.log('Element .${className} has entered the viewport!');
            el.classList.add('visible');
        };
        const onExit = onExitFn || function(el) {
            console.log('Element .${className} has left the viewport.');
            el.classList.remove('visible');
        };
        // Add to our configuration
        const newConfig = {
            selector: className,
            type: 'class',
            onEnter,
            onExit
        };
        elementsConfig.push(newConfig);
        // Start observing all elements with this class
        const elements = document.getElementsByClassName(className);
        if (elements.length > 0) {
            Array.from(elements).forEach((element)=>{
                observer.observe(element);
            });
            console.log('Now observing ${elements.length} element(s) with class: .${className}');
            return true;
        } else {
            console.error('No elements with class ".${className}" found on the page.');
            return false;
        }
    };
    // Stop observing by selector (works with both IDs and classes)
    window.stopObserving = function(selector, isClass = false) {
        if (!selector) {
            console.error('No selector provided to stopObserving');
            return false;
        }
        // Clean selector (remove # or . if present)
        const cleanSelector = selector.replace(/^[#.]/, '');
        const type = isClass ? 'class' : 'id';
        const selectorPrefix = type === 'id' ? '#' : '.';
        const formattedSelector = '${selectorPrefix}${cleanSelector}';
        let elements = [];
        if (type === 'id') {
            const element = document.getElementById(cleanSelector);
            if (element) elements.push(element);
        } else elements = Array.from(document.getElementsByClassName(cleanSelector));
        if (elements.length === 0) {
            console.error('No elements found for "${formattedSelector}"');
            return false;
        }
        // Stop observing these elements
        elements.forEach((element)=>{
            observer.unobserve(element);
        });
        // Remove from our configuration array
        for(let i = elementsConfig.length - 1; i >= 0; i--)if (elementsConfig[i].type === type && elementsConfig[i].selector === cleanSelector) elementsConfig.splice(i, 1);
        console.log("Stopped observing ${elements.length} element(s) with ${type === 'id' ? 'ID' : 'class'}: ${formattedSelector}");
        return true;
    };
}); //accordion width

//# sourceMappingURL=index.aa69868b.js.map
