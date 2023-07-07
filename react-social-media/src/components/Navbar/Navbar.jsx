import navcss from "./Navbar.module.css"


export const Navbar = () =>{
	return (
		<nav className={navcss.nav}>
          <div><a href="#/" className = {navcss.nav__item}>Profile</a></div>
          <div><a href="#/" className = {navcss.nav__item}>Messages</a></div>
          <div><a href="#/" className = {navcss.nav__item}>News</a></div>
          <div><a href="#/" className = {navcss.nav__item}>Music</a></div>
          <div><a href="#/" className = {navcss.nav__item}>Settings</a></div>
        </nav>
	)
}