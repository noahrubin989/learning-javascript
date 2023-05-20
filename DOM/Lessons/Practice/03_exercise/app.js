function getAttributes() {
    const atag_obj = document.querySelector('#w3r');
    let properties = ['href', 'hreflang', 'rel', 'target', 'type']
    for (let property of properties) { // Use "of" instead of "in" for iterating over array elements
        if (property in atag_obj) {
            // Get the value of the property
            console.log(`Property ${property} has value: ${atag_obj[property]}`);
        }
    }
}

