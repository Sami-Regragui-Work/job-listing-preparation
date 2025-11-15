// Step 1: Create the displayJobs function
// TODO: Implement the displayJobs function
function displayJobs(jobs) {
    const listingsContainer = document.getElementById("listings-container");
    listingsContainer.innerHTML = "";

    // Loop through the jobs and create the HTML for each one
    jobs.forEach((job) => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("listing");
        jobElement.setAttribute("data-id", job.id);

        jobElement.innerHTML = `
            <h3>${job.jobTitle} at ${job.companyName}</h3>
            <p><strong>Contract:</strong> ${job.contractType}</p>
            <p><strong>Description:</strong> ${job.description}</p>
            <div><strong>Skills:</strong> ${job.skills.join(", ")}</div>
            <div>
                <strong>Projects:</strong>
                <ul>
                    ${job.projects
                        .map(
                            (p) =>
                                `<li><strong>${p.name}</strong> (${p.duration}): ${p.definition}</li>`
                        )
                        .join("")}
                </ul>
            </div>
            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        // Append the new element to the container
        listingsContainer.appendChild(jobElement);
    });
}

// Step 2: Create the clearForm function
// TODO: Implement the clearForm function
function clearForm() {
    // Clear all the input fields in the form
    const inputs = document
        .getElementById("job-form")
        .querySelectorAll("input[type='text'], textarea");
    inputs.forEach((input) => (input.value = ""));
}

// Step 3: Create the populateForm function
// TODO: Implement the populateForm function
function populateForm(job) {
    // Populate the form fields with the data from the job object
    const inputs = document
        .getElementById("job-form")
        .querySelectorAll("input[type='text'], textarea");
    inputs.forEach((input, index) =>
        input.setAttribute("value", Object.values(job)[index])
    );
}

// Step 4: Create the addSkillInput function
// TODO: Implement the addSkillInput function
function addSkillInput() {
    const skillsContainer = document.getElementById("skills-container");
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.innerHTML = `
        <input type="text" class="skill" placeholder="Enter a skill">
        <button type="button" class="btn-delete-skill">Remove</button>
    `;
    // Append the new skill item to the skills container
    skillsContainer.appendChild(skillItem);
}

// Step 5: Create the addProjectBlock function
// TODO: Implement the addProjectBlock function
function addProjectBlock() {
    const projectsContainer = document.getElementById("projects-container");
    const projectBlock = document.createElement("div");
    projectBlock.classList.add("project-block");
    projectBlock.innerHTML = `
        <div class="form-group">
            <input type="text" class="project-name" placeholder="Project Name">
        </div>
        <div class="form-group">
            <input type="text" class="project-duration" placeholder="Project Duration">
        </div>
        <div class="form-group">
            <textarea class="project-definition" placeholder="Project Definition"></textarea>
        </div>
        <button type="button" class="btn-delete-project">Remove Project</button>
    `;
    // Append the new project block to the projects container
    projectsContainer.appendChild(projectBlock);
}

// Step 6: Create the getSkills and getProjects functions
// TODO: Implement the getSkills function
function getSkills() {
    // Get all skill inputs and return an array of their values
    const skills = Array.from(
        document.querySelectorAll(".skill-item>.skill")
    ).map((input) => input.value);
    return skills;
}

// TODO: Implement the getProjects function
function getProjects() {
    // Get all project blocks and return an array of project objects
    const projects = Array.from(
        document.querySelectorAll(
            "#projects-container input, #projects-container textarea"
        )
    ).reduce((acc, input, index) => {
        const groupIndex = Math.floor(index / 3);
        const key = input.className.split("-")[1];

        if (!acc[groupIndex]) acc[groupIndex] = {};
        acc[groupIndex][key] = input.value;

        return acc;
    }, []);
    console.log(projects);
    return projects;
}

// Step 7: Create the setSkills and setProjects functions
// TODO: Implement the setSkills function
function setSkills(skills) {
    // Clear the skills container
    // If there are skills, loop through them and create the skill items
    const skillsContainer = document.getElementById("skills-container");
    skillsContainer.innerHTML = "";
    if (skills)
        skills.forEach((skill) => {
            const skillItem = document.createElement("div");
            skillItem.classList.add("skill-item");
            skillItem.innerHTML = `
            <input type="text" class="skill" placeholder="Enter a skill" value='${skill}'>
            <button type="button" class="btn-delete-skill">Remove</button>
        `;
        });
}

// TODO: Implement the setProjects function
function setProjects(projects) {
    // Clear the projects container
    // If there are projects, loop through them and create the project blocks
    const projectsContainer = document.getElementById("projects-container");
    projectsContainer.innerHTML = "";
    if (projects)
        projects.forEach((project) => {
            const projectBlock = document.createElement("div");
            projectBlock.classList.add("project-block");
            projectBlock.innerHTML = `
        <div class="form-group">
            <input type="text" class="project-name" placeholder="Project Name" value="${project.name}">
        </div>
        <div class="form-group">
            <input type="text" class="project-duration" placeholder="Project Duration" value="${project.duration}">
        </div>
        <div class="form-group">
            <textarea class="project-definition" placeholder="Project Definition" value="${project.definition}"></textarea>
        </div>
        <button type="button" class="btn-delete-project">Remove Project</button>
    `;
        });
}

export {
    displayJobs,
    clearForm,
    populateForm,
    addSkillInput,
    addProjectBlock,
    getSkills,
    getProjects,
    setSkills,
    setProjects,
};
