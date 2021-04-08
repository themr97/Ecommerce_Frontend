import React from "react";
import Layout from "../layout/index";

const ContactComponent = (props) => {
    return (
        <div className="flex flex-col items-center justify-center my-32">
            <div style={{ fontSize: "34px" }}>This application is made using MERN Stack and Braintree for payment option</div>
            <div style={{ fontSize: "24px" }}>Feel free to use the admin panel email: test@test.com and password test123!</div>

            <div>Functionality</div>
            <div>
                <ul style={{ listStyleType: 'disc' }}>
                    <li>Admin and User Panel</li>
                    <li>Slider Image on home page</li>
                    <li>Products and Catergoies can be added</li>
                    <li>Search Function and Filter Function</li>
                    <li>Order log for Admin/Owner</li>
                    <li>Review and Rating System</li>
                </ul>
            </div>
        </div>
    );
};

const Contact = (props) => {
    return <Layout children={<ContactComponent />} />;
};

export default Contact
