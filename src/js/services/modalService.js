const popup = (content, options={}) => {
    const currentOptions = {
        closeByClickOnOverlay: true,
        isXBtn: true,
        ...options
    }

    const { id, isXBtn, modalName } = currentOptions

    const renderModal = () => `
    <div class="modal" id=${id}>
        <div class="modal__overlay"></div>
        <div class="modal__container">
            ${isXBtn ? `<div id=${id+"XBtn"} onclick="close()" class='modal__x-btn'><span>X</span></div>` : ""}
            <div class="modal__body">${content}</div>
        </div>
    </div>`;

    const generateOptions = () => {
        if(currentOptions) {
            Object.entries(currentOptions).forEach(([key, val])=> {
                switch(key) {
                    case "isXBtn": 
                        if(val) {
                            document.getElementById(`${id+"XBtn"}`).addEventListener('click', close);
                        }
                        break;
                    case "closeByClickOnOverlay":
                        if(val) {
                            document.querySelector(".modal__overlay").addEventListener('click', close);
                        }
                        break;
                }
            })
        }
    }

    const open = () => {
        document.body.insertAdjacentHTML('beforeend', renderModal());
        generateOptions();
    }

    function close() {
        const currModal = document.getElementById(id);
        document.body.removeChild(currModal);
    };

    return {
        open,
        close,
    }
};

export default popup;