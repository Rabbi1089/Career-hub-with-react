import { IoLocationOutline } from "react-icons/io5";
import { AiTwotoneDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div>
            <div className="card  h-[420px] bg-base-100 shadow-xl">
                <figure><img src={logo} alt={logo} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p className=" text-left font-semibold">{company_name}</p>
                    <div className="flex justify-start gap-6">
                        <button className="btn bg-slate-50 text-blue-600">Remote</button>
                        <button className="btn   bg-slate-50 text-blue-600">Full-Time</button>
                    </div>
                    <div className="card-actions justify-start gap-4 mb-2">
                        <div className="flex gap-1 items-center">
                            <IoLocationOutline />
                            {location}
                        </div>
                        <div className="flex gap-1 items-center">
                            <AiTwotoneDollarCircle />
                            {salary}
                        </div>
                    </div>
                    <Link to={`/job/${id}`}>
                    <button 
                    className="btn w-[121px] h-[27px] bg-blue-500 text-white">View-Details
                    </button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Job;