

import {Context} from "../Context/Context";
import {useContext} from 'react';

export default function AllData() {
    const {state} = useContext(Context) //TODO:look deeper into useContext
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
            {state.users.map(element=> {
                return <tr>
                    <td>{element.email}</td>
                    <td>{element.name}</td>
                    <td>{element.password}</td>
                    <td>{element.balance}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}
