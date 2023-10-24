/**
 * @param {string} tag
 * @param {object} attributes
 * @return {HTMLElement}
 */
export const CreateElements = (tag, attributes={})=>{
    const element = document.createElement(tag)

    for( const [attribute, value] of Object.entries(attributes)){
        element.setAttribute(attribute, value)
    }
    return element
}