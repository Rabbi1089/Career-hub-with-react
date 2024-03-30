import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStroedJobApplication } from '../../utility/LocalStroage';
import AppliedJob from '../../appliedjob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])
    console.log('appliedJob job', appliedJob)

    const handleJobsFilter = filter => {

        if (filter === 'all') {
            setDisplayJobs(appliedJob);
        }
        else if (filter === 'remote') {
            const remoteJob = appliedJob.filter(jobs => jobs.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJob);
        }
        else if (filter === 'onsite') {
            console.log('onsite')
            const onSiteJob = appliedJob.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onSiteJob);
        }
    }


    useEffect(() => {

        const storedJobId = getStroedJobApplication();
        console.log('storedJobId : ',storedJobId)
        if (jobs.length > 0) {
           // const appliedJobs = jobs.filter(job => storedJobId.includes(job.id));
            // console.log(appliedJobs)

            // another way to find job

            const jobsApplied = [];
            for (const id of storedJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            console.log('jobsApplied', jobsApplied)
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <div className="flex items-center justify-between mx-2">
                <div>
                    <h1 className='text-3xl font-bold text-blue-500'>Jobs you have applied : {appliedJob.length}</h1>
                </div>
                <div className=" grid col-end-12">
                    <details className="dropdown">
                        <summary className="m-1 btn">remote or onsite: </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                            <li onClick={() => handleJobsFilter('remote')}><a>remote</a></li>
                            <li onClick={() => handleJobsFilter('onsite')}><a>onsite</a></li>
                        </ul>
                    </details>
                </div>

            </div>

            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job} ></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;