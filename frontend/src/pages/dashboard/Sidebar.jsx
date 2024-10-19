import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faPeopleGroup, faTable} from "@fortawesome/free-solid-svg-icons"
import Logo from "../../assets/images/logo.svg?react";

export default function Sidebar () {
    return (
        <aside className="w-1/6 h-auto ml-4 pt-8 flex flex-col justify-center items-center content-center">
            <Logo className="ml-4 min-h-8 max-h-8 mb-4" />
            <hr className='w-10/12 h-0 bg-lineGrey'></hr>
            <ul className="w-full flex flex-col justify-center pl-2 mt-8 gap-8">
                <li className="w-auto h-14 pl-2 flex flex-row justify-center items-center gap-2 bg-white rounded-xl drop-shadow-sm">
                   <FontAwesomeIcon size='s' className='p-2 text-white bg-mainColor drop-shadow-2xl rounded-xl' icon={faHouse} />
                   <Link className="w-full text-sm font-bold font-helvetica text-focusBlack" to={"/"}>
                   Dashboard
                   </Link> 
                </li>
                <li className="w-auto h-auto pl-2 flex flex-row justify-center items-center gap-2">
                   <FontAwesomeIcon size='s' className='p-2 text-mainColor bg-white drop-shadow-2xl rounded-xl' icon={faTable} />
                   <Link className="w-full text-sm h-full font-bold font-helvetica text-sideGrey" to={"/"}>
                   Store
                   </Link> 
                </li>
                <li className="w-auto h-auto pl-2 flex flex-row justify-center items-center gap-2">
                   <FontAwesomeIcon size='s' className='p-2 text-mainColor bg-white drop-shadow-2xl rounded-xl' icon={faPeopleGroup} />
                   <Link className="w-full text-sm h-full font-bold font-helvetica text-sideGrey" to={"/"}>
                   Team Management
                   </Link> 
                </li>
            </ul>
        </aside>
    )
}