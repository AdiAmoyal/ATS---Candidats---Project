/*
    Function:
    * isValid - return boolean, validatin in closure chack input type, when we get false we can close the form
    ** all submit - button
    *** render error message - error message for each input- HashMap(key-type of input | value-error message)

    Argument:
    each form need uniqe ID, we sent to the closure the id of the form

    בשלוחצים על submit ה- closure יודע להדפיס את ה- form
*/

const form = (data) => {
    
    function isValidInputText() {
        
    }

    function renderErrorMessage() {

    }

    function printData(e) {
        e.preventDefault();
        
        const inputs = {};
        for(const childForm of data) {
            if(childForm.nodeName === "INPUT" || childForm.nodeName === "SELECT")
                inputs[childForm.name] = childForm.value;
        }
        console.log(inputs);
    }

    return {
        isValidInputText,
        renderErrorMessage,
        printData
    }
};

export default form;