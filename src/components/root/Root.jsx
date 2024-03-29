import { Outlet } from 'react-router-dom';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';

const Root = () => {
    return (
        <div>
            <h1>this is from root</h1>
            <div className=" max-w-5xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;