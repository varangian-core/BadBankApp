import {useContext, useState} from 'react';
import {Context} from "../Context/Context";

//TODO: need to link the visual components

import {useFormik} from 'formik';

export default function AddAccount() {
    const {actions} = useContext(Context)
    const [display, setDisplay] = useState(true);

    //Form validation
    const formik = useFormik({
        initialValues:
            {
                name: "",
                email: "",
                password: ""
            },

        onSubmit: values => {
            console.log(values);
            setDisplay(true);
            alert("Congratulations, the account has been registered!!!")
            actions.addAccount({...values, balance: 0});
        },
        onReset: values => {
            setDisplay(true);
        },
        validate: values => {
            let errors = {};
            if (!values.name) errors.name = "Field Required";
            if (!values.email) errors.email = "Field required";
            if (!values.password) errors.password = "Field required";
            if (values.password.length < 8) errors.password = "Password must be at least 8 characters long"
            if (!/^[\w+\d+._+-]+@[\w+\d+-]+\.[\w]{2,4}$/i.test(values.email)) errors.email = "Invalid Email";
            return errors;
        }
    })


    return (
        <></>
    )
}