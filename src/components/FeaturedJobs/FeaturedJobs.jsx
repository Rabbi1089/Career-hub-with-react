
import { useEffect, useState } from "react";
import Job from "../../job/Job";


const FeaturedJobs = () => {

    const [jobs , setJobs ] = useState([]);

        useEffect(() => {
            fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
        }, [])

    return (
        <div>
            <div className=" grid grid-cols-2 gap-6 my-6">
                {
                    jobs.map((job , idx) => <Job key={idx} job={job}></Job>)
                }
             
            </div>
        </div>
    );
};

export default FeaturedJobs;