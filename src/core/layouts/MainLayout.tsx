import React from "react";
import NavBar from "../../components/NavBar";

const MainLayout: React.FC = (props: any) => {
    return <div className=' background'>
        <NavBar/>
        {
            props.children
        }
    </div>
}

export default MainLayout;