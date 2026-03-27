import { NavLink, Outlet } from "react-router"
import "./Layout.css"
export const Layout = ()=>{
    return(<>
    <div className="menu">
        <div className="menu_item">
            <NavLink to="/books">Book</NavLink>
        </div>
        <div>
            <NavLink to="/about">About</NavLink>
        </div>
        <div>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div>
          <NavLink to="/books/sorted/asc">Asc</NavLink>
        </div>
        <div>
          <NavLink to="/books/sorted/desc">Desc</NavLink>
        </div>
    </div>
    
    <Outlet/>
    <footer>@ my site</footer>
    </>
    )
}