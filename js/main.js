/*
    This is the main entry point of the application.
    - It imports functions from the other modules (UI, Store, Validation).
    - It sets up all the event listeners for the application.
    - It orchestrates the flow of data between the UI and the store.
    - The `submitJob` function is the core of the CRUD functionality, handling both creation and updates.
    - Event delegation is used on the `listings-container` to handle clicks on the edit and delete buttons efficiently.
*/

import { getJobs, getJob, addJob, updateJob, deleteJob as deleteJobFromStore } from './store.js';
import { displayJobs, clearForm, populateForm, addSkillInput, addProjectBlock, getSkills, getProjects } from './ui.js';
import { validateForm } from './validation.js';

document.addEventListener('DOMContentLoaded', loadJobs);

document.getElementById('job-form').addEventListener('submit', submitJob);
document.getElementById('add-skill').addEventListener('click', addSkillInput);
document.getElementById('add-project').addEventListener('click', addProjectBlock);
document.getElementById('listings-container').addEventListener('click', handleListingActions);
document.getElementById('skills-container').addEventListener('click', handleDynamicFieldActions);
document.getElementById('projects-container').addEventListener('click', handleDynamicFieldActions);

function loadJobs() {
    const jobs = getJobs();
    displayJobs(jobs);
}

function submitJob(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    const id = document.getElementById('job-id').value;
    const companyName = document.getElementById('company-name').value;
    const jobTitle = document.getElementById('job-title').value;
    const contractType = document.getElementById('contract-type').value;
    const description = document.getElementById('description').value;
    const skills = getSkills();
    const uniqueSkills = [...new Set(skills.filter(skill => skill.trim() !== ''))];
    const projects = getProjects();

    const jobData = {
        id: id || new Date().getTime().toString(),
        companyName,
        jobTitle,
        contractType,
        description,
        skills: uniqueSkills,
        projects
    };

    if (id) {
        updateJob(jobData);
    } else {
        addJob(jobData);
    }

    loadJobs();
    clearForm();
}

function handleListingActions(e) {
    if (e.target.classList.contains('edit-btn')) {
        const id = e.target.closest('.listing').dataset.id;
        const job = getJob(id);
        populateForm(job);
    }

    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.closest('.listing').dataset.id;
        deleteJobFromStore(id);
        loadJobs();
    }
}

function handleDynamicFieldActions(e) {
    if (e.target.classList.contains('btn-delete-skill')) {
        e.target.closest('.skill-item').remove();
    }

    if (e.target.classList.contains('btn-delete-project')) {
        e.target.closest('.project-block').remove();
    }
}
