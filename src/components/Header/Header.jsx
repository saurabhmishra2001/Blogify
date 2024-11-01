import { Logo, LogoutBtn } from '../index'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: '/add-post',
            active: authStatus
        }
    ]

    return (
        <header className='sticky top-0 z-50 bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg'>
            <div className='max-w-full'>
                <nav className='flex items-center justify-between h-20 px-8'>
                    <div className='flex items-center'>
                        <Link to="/" className='transition-transform hover:scale-105 bg-white/10 p-2 rounded-lg'>
                            <Logo width='45px'/>
                        </Link>
                    </div>

                    <ul className='flex items-center space-x-3'>
                        {navItems.map((item) => 
                            item.active ? (
                                <li key={item.name}>
                                    <button 
                                        onClick={() => navigate(item.slug)}
                                        className='px-4 py-2 text-sm font-medium text-white transition-all duration-200 
                                        rounded-lg hover:bg-white/20 border border-transparent
                                        hover:border-white/40 focus:outline-none focus:ring-2 
                                        focus:ring-white/50'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className='ml-2'>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header