function getElementByXpath(xpath, source = document) {
    let result = []
    let elements = document.evaluate(xpath, source)
    while (true) {
        let node = elements.iterateNext()
        if (node == null) break
        result.push(node)
    }
    return result

}
class Output {
    constructor(target = null, selector = null) {
        this.target = target
        this.selector = selector
    }
}
function createOutput(target = null, selector = null) {
    return new Output(target, selector)
}
/**
* Go all the way up to parent node to see if there is any parent node that match specific criteria
* @param {*} element 
 * @param {*} cb 
 * @returns 
 */
function getParentNode(element, cb, stopPoint = null) {
    while (true) {

        if (element == null || element == stopPoint) break
        if (cb(element)) return element
        element = element.parentElement
    }
    return null
}
/**
 * Generate locator based on its title/inner text/place holder if possible
 * @param {HTMLElement} element 
 * @returns {Output}
 */
function createLocatorByContext(element) {
    let output = new Output()
    if (element.tagName == 'INPUT')
        return output

    let title = element.getAttribute('title')
    let innerText = element.innerText
    let potentialXPath = [
        `//${element.tagName}[text()='${innerText}']`,
        `//${element.tagName}[@title='${title}']`,
    ]
    for (const xpath of potentialXPath) {
        let elements = getElementByXpath(xpath)
        if (elements.length == 1) {
            output = new Output(element, xpath)
            return output
        }
    }

    return output
}

export function getLocator(element, selector) {
    const functionList = [createLocatorByContext]
    let result = createOutput()
    for (let i = 0; i < functionList.length; i++) {
        let currentFunc = functionList[i]
        result = currentFunc(element, selector)
        //if target is not null, it indicates that locator is good to go
        if (result.target != null) break
    }
    if (result.target == null) result.target = element
    return result
}
