
import { useEffect, useState } from "react";
import Job from "../../job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className=" grid grid-cols-2 gap-6 my-6">
                {
                    jobs.slice(0, dataLength).map((job, idx) => <Job key={idx} job={job}></Job>)
                }

            </div>
            <div className={dataLength === jobs.length && "hidden"}>
                <button onClick={() => setDataLength(jobs.length)}
                    className="btn">Show all Jobs
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;