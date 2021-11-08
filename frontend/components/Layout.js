import Nav from './Nav'
import LayoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
    return (
        <div>
            <Nav></Nav>
            {children}
        </div>
    )
}

export default Layout