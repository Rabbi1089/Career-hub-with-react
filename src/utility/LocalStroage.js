const getStroedJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplications = getStroedJobApplication();
    const exits = storedJobApplications.find(jobId => jobId === id );
    if(!exits){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }

}



export {saveJobApplication , getStroedJobApplication}