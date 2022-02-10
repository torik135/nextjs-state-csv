import Text from "../Text"
import Nav from "./Nav"
import NavItem from "./NavItem"

const Header = () => {
    return (
        <header className="header">
            <Text>
                <h2>Header</h2>
            </Text>
            <Nav>
                <NavItem/>
                <NavItem/>
                <NavItem/>
            </Nav>
        </header>
    )
}

export default Header
