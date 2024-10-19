import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faPeopleGroup, faTable, faQuestion} from "@fortawesome/free-solid-svg-icons"
import Logo from "../../assets/images/logo.svg?react";

export default function Sidebar () {
    return (
        <aside className="w-1/6 h-auto ml-4 pt-8 flex flex-col justify-center items-center content-center">
            <Logo className="ml-4 min-h-8 max-h-8 mb-4" />
            <hr className='w-10/12 h-0 bg-lineGrey'></hr>
            <ul className="w-full flex flex-col justify-center pl-2 mt-8 mb-16 gap-8">
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
            <div className="w-10/12 h-48 bg-mainColor rounded-xl drop-shadow-sm overflow-hidden flex flex-col items-start pl-3">
                <div className="absolute top-3/4 left-3/4 w-32 h-32 border border-white/50 rounded-full"></div>
                <div className="absolute top-2/4 left-2/4 w-64 h-64 border border-white/40 rounded-full"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/30 rounded-full"></div>
                <div className="mt-2 w-8 h-8 flex items-center justify-center bg-white rounded-xl mb-8">
                    <FontAwesomeIcon size='xs' className="rounded-full text-sm text-focusBlack" icon={faQuestion} />
                </div>
                <h1 className="font-helvetica font-bold text-white text-lg">Need help?</h1>
                <h2 className="font-helvetica text-white text-sm">please check our docs</h2>
                <Link className="w-3/4 text-xs h-8 font-bold font-helvetica text-focusBlack bg-white mt-8 left-0 rounded-xl self-center flex justify-center items-center" to={"/"}>
                   DOCUMENTATION
                </Link> 
            </div>
        </aside>
    )
}