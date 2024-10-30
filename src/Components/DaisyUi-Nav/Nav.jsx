import { useState } from "react";
import Link from "./Link";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        {
            id: 1,
            path: '/',
            name: 'Home',
            price: 0,
        },
        {
            id: 2,
            path: '/about',
            name: 'About',
            price: 10,
        },
        {
            id: 3,
            path: '/services',
            name: 'Services',
            price: 20,
        },
        {
            id: 4,
            path: '/contact',
            name: 'Contact',
            price: 5,
        },
        {
            id: 5,
            path: '/faq',
            name: 'FAQ',
            price: 0,
        },
    ];
    

    return (
        <nav className="p-5 bg-pink-500">
            <div onClick={()=>setOpen(!open)} className="md:hidden">
                {
                    open === true ? <RxCross2 className="text-2xl"></RxCross2> : < RiMenu2Line className="text-2xl "></RiMenu2Line>
                }
                </div>
            <ul className={`md:flex absolute md:static bg-pink-500 p-5 rounded-xl shadow-2xl duration-1000 ${open? 'top-12' : '-top-60' }`}>
            {
                routes.map(route => <Link key={route.id} route = {route}></Link>)
            }
            </ul>
        </nav>
    );
}; 

export default Nav;