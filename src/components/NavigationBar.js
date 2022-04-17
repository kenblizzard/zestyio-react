import { Menu } from "antd"
import { Link, } from "react-router-dom"

const NavigationBar = () => {
    return (
        <Menu mode="horizontal" theme="dark">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about">
                <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
    )
}

export default NavigationBar