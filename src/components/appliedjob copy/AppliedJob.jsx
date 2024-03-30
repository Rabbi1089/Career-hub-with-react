import { Link } from "react-router-dom";


const AppliedJob = ({ job }) => {
    const {id, logo, job_title,company_name, location , salary} = job
    return (
        <div className="">
            <div className="card bg-primary text-primary-content m-5">
                <div className="flex justify-between">
                    <div className="w-36 h-20"><img src={logo} alt="" /></div>
                    <div className="">
                    <h1 className="text-xl">{job_title}</h1>
                    <p className=" text-sm">{company_name}</p>
                    <p className=" text-sm">{location}</p>
                    <p className=" text-sm">{salary}</p>
                    </div>

                    <div className="card-actions justify-end">
                        <Link to={`/job/${id}`}>
                        <button className="btn">Show Details</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;