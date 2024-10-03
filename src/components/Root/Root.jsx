
// import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../Header/Navbar/Navbar';

const Root = () => {
    return (
        
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            


        </>
    );
};

export default Root;