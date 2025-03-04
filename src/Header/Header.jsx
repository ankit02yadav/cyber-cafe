import './Header.css'
function Header(){
    return(
        <header>
            <img src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-g-logo-png-image_6928665.png" alt="Logo Image" className="icon" />
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#sub-footer">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header