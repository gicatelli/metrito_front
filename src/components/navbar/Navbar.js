import logo from '../../assets/logo.jpeg';
import './Navbar.css';

const Navbar = ({sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Compras</a>
                <a href="#" className="active_link">Vendas</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <img width="30" src={logo} alt="avatar" />
                </a>
            </div>

        </nav>
    )
}

export default Navbar;