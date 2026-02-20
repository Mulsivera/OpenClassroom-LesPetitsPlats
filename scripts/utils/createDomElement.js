export function createDomElement (element,className,id,textContent) {
    
    const domElement = document.createElement(element);

    if(className) {
        domElement.classList = (className);
    }

    if(id) {
        domElement.id = id;
    }

    if(textContent) {
        domElement.textContent = textContent;
    }

    return domElement;

}