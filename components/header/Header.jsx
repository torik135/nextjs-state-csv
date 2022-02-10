import { useState } from "react"

import Button from "../Button"
import Text from "../Text"
import Nav from "./Nav"
import NavItem from "./NavItem"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <header className="header">
            <Text>
                <h2>github.com/torik135</h2>
            </Text>
            <Nav>
                {open && 
                    <NavItem
                        text="Traversy Media"
                    />
                }
                <Button 
                    text={open ? 'close' : 'credits'}
                    onClick={() => setOpen(!open)}
                />
            </Nav>
        </header>
    )
}

export default Header
