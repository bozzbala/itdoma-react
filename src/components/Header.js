import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <header>
            <div className="h-cont">
                <NavLink to="/"><div className="nav">Главная</div></NavLink>
                <NavLink to="/about"><div className="nav">О нас</div></NavLink>
                <NavLink to="/contacts"><div className="nav">Контакты</div></NavLink>
            </div>
        </header>
    );
}

export default Header;