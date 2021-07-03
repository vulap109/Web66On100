import Header66 from "./header";
import './layout.css'

const Layout = (props: any) => {
    return (
        <div className="site-container">
            <div className="header">
                <Header66 />
            </div>
            <div className="body-content">
                {props.children}
            </div>
            <div className="footer-content">

            </div>
        </div>
    );
}

export default Layout;