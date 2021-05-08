import Style from "../styles/base.scss";
import modalService from "../js/services/modalService"
import formService from "../js/services/formService"

const createBtn = document.querySelector('.header__create-btn');

const newApplicationForm = `
    <form class="form form__create-application" id="newApplication">
        <p class="form__create-application--headline">Create Appliction</p>
        <div class="row">
            <label>Company name</label>
            <input class="form__create-application--input" name="company_name" type="text" />
        </div>
        <div class="row">
            <label>Job title</label>
            <input class="form__create-application--input" name="job_title" type="text" />
        </div>
        <div class="row">
            <label>Creation date</label>
        </div>
        <div class="row">
            <label>Status</label>
            <select class="form__create-application--select" name="status">
            <option value="">Please choose an option</option>
            <option value="Availble">Availble</option>
            <option value="Disable">Disable</option>
            </select>
        </div>
        <div class="row">
            <label>Phase</label>
            <select class="form__create-application--select" name="phase">
            <option value="">Please choose an option</option>
            <option value="HR">HR</option>
            <option value="Technical">Technical</option>
            </select>
        </div>
        <button class="btn btn__submit" type="submit" id="btnSubmit">SUBMIT</button>
    </form>
`;

const newApplicationPopup = modalService(newApplicationForm, {
    id: "createAppModalId",
    modalName: "newApplicationPopup",
    closeByClickOnOverlay: true,
});

createBtn.addEventListener('click', function() {
    newApplicationPopup.open();
    const formData = document.getElementById('newApplication').elements;
    const createApplicationForm = formService(formData);
    
    const btnSubmit = document.getElementById('btnSubmit');
    btnSubmit.addEventListener('click', createApplicationForm.printData);
});
