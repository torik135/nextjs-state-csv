import Heading from "./Heading"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="header">
            <Heading>
                <h2>Header</h2>
            </Heading>
            <Nav/>
        </header>
    )
}

export default Header
