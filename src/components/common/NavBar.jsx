// import logo  from '../../constants/recipelogo.jpg';
// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { useAuth } from '../../store/auth';

// function NavBar() {

//     const {isLoggedIn} = useAuth();


//   return (
//     <header className='shadow sticky z-50 top-0'>
//         <nav className='bg-white border-gray-200 px-4 lg:px-6 md:px-4 py-2.5'>
//             <div className='flex flex-wrap justify-between items-center mx-auto'>
//                 <Link to='/' className='flex items-center'>
//                     <img src= {logo} alt="logo" style={{width:90, height: 80}}/>
//                 </Link>
//                 <div className='justify-between items-center
//                 w-auto lg:flex lg:w-auto lg:order-1 md:flex md:w-auto md:order-1'>
//                     <ul className='flex flex-row mt-4 font-medium
//                     lg:flex-row lg:space-x-8 lg:mt-0 pl-0'>
//                         <li>
//                             <NavLink to='/' className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}>
//                                 <strong>Home</strong>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/recipes' className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}>
//                                 <strong>Recipes</strong>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/about' className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}>
//                                 <strong>About</strong>
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to='/contact' className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}>
//                                 <strong>Contact us</strong>
//                             </NavLink>
//                         </li>

//                         { isLoggedIn ? (<li><NavLink to="/logout" className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}><strong>Logout</strong></NavLink></li> )
//                             : (<>
//                                 <li><NavLink to="/register" className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}><strong>Registration</strong></NavLink></li>
//                                 <li><NavLink to="/login" className={({isActive}) => `block py-2
//                             pr-4 pl-3 duration-200 border-b border-gray-100
//                             ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
//                             hover:text-orange-700 lg:p-0`}><strong>Login</strong></NavLink></li>
//                             </>)
//                         }

//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default NavBar






import logo  from '../../constants/recipelogo.jpg';
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../store/auth';

function NavBar() {

    const {isLoggedIn} = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      };


  return (
    <header className='shadow sticky z-50 top-0'>
        <nav className='bg-white border-gray-200 px-2 lg:px-6 md:px-4 w-full'>
            <div className='flex flex-wrap justify-between items-center mx-auto'>
                <Link to='/' className='flex items-center ml-28'>
                    <img src= {logo} alt="logo" style={{width:90, height: 80}}/>
                </Link>
                <button
                  className="text-gray-500 hover:text-gray-700 focus:outline-none lg:hidden md:hidden"
                   onClick={handleToggle}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
                <div className={`${
              isMobileMenuOpen ? 'flex-col w-full' : 'hidden'
            } flex-col  w-full lg:flex lg:flex-row lg:items-center lg:w-auto lg:space-x-8 md:flex md:flex-row md:items-center md:w-auto md:space-x-8 mr-32` }>
                    <ul className='flex flex-row mt-4 font-medium
                    lg:flex-row lg:space-x-8 lg:mt-0 md:flex-row pl-0'>
                        <li>
                            <NavLink to='/' className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}>
                                <strong>Home</strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/recipes' className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}>
                                <strong>Recipes</strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}>
                                <strong>About</strong>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}>
                                <strong>Contact us</strong>
                            </NavLink>
                        </li>

                        { isLoggedIn ? (<li><NavLink to="/logout" className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}><strong>Logout</strong></NavLink></li> )
                            : (<>
                                <li><NavLink to="/register" className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}><strong>Registration</strong></NavLink></li>
                                <li><NavLink to="/login" className={({isActive}) => `block py-2
                            pr-4 pl-3 duration-200 border-b border-gray-100
                            ${isActive ? "text-orange-700": "text-gray-700"} lg:hover:bg-transparent lg:border-0
                            hover:text-orange-700 lg:p-0`}><strong>Login</strong></NavLink></li>
                            </>)
                        }

                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar

















