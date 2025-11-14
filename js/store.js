// Step 1: Create the getJobs function
// TODO: Implement the getJobs function
function getJobs() {
    // Get jobs from localStorage
    // If jobs exist, parse them and return, otherwise return an empty array
    return JSON.parse(localStorage.getItem("jobs")) || [];
}

// Step 2: Create the getJob function
// TODO: Implement the getJob function
function getJob(id) {
    // Get all jobs
    // Find the job with the matching id and return it
    const jobs = getJobs();
    return jobs.filter((job) => job[id])[0];
}

// Step 3: Create the addJob function
// TODO: Implement the addJob function
function addJob(job) {
    // Get all jobs
    // Add the new job to the array
    // Save the updated array to localStorage
    const jobs = getJobs();
    jobs.push(job);
    localStorage.setItem("jobs", jobs);
}

// Step 4: Create the updateJob function
// TODO: Implement the updateJob function
function updateJob(updatedJob) {
    // Get all jobs
    // Map through the jobs and replace the one with the matching id
    // Save the updated array to localStorage
    const jobs = getJobs();
    const updatedJobsArr = jobs.map((job) =>
        job.id == updatedJob.id ? updatedJob : job
    );
    localStorage.setItem("jobs", updatedJobsArr);
}

// Step 5: Create the deleteJob function
// TODO: Implement the deleteJob function
function deleteJob(id) {
    // Get all jobs
    // Filter out the job with the matching id
    // Save the updated array to localStorage
    const jobs = getJobs();
    const updatedJobsArr = jobs.filter((job) => job.id != id);
    localStorage.setItem("jobs", updatedJobsArr);
}

export { getJobs, getJob, addJob, updateJob, deleteJob };
