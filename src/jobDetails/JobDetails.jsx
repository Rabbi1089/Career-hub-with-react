import { stringify } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_title, job_responsibility, salary } = job
    console.log(job)
    return (
        <div>
            <h1 className="text-4xl m-10 p-5">Job details of : {job_title}</h1>
            <div className=" grid grid-cols-4 gap-4">
                <div className="md: col-span-3 border">
                    <h4 className="text-xl text-left"><span className="font-semibold">job Description </span>: {job_description} </h4>
                    <p></p>
                    <h4 className="text-xl text-left my-3"><span className="font-semibold">job responsibility </span> : {job_responsibility}</h4>
                </div>
                <div className="border">
                    <div className=" bg-blue-200 shadow-md rounded-sm p-2 mb-2">
                        <h5><span>job title</span> : {job_title}</h5>
                        <h5 className=" mb-3"><span>salary</span>: {salary}</h5>
                    </div>
                    <button className="btn btn-primary w-full">Apply now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;


// The useParams hook returns an object of key/value pairs
//  of the dynamic params from the current
// URL <Route path>. Child routes inherit all params from their parent routes.