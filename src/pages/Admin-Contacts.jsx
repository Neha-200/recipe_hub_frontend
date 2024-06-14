
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";



export default function AdminContacts () {

    const { authorizationToken } = useAuth();

    const [contacts, setContacts] = useState([]);

    const getAllContactsData = async () => {
        try {
            const response = await fetch("https://recipe-hub-backend.onrender.com/api/admin/contacts", {
                method: "GET",
                headers: { Authorization: authorizationToken },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            if (response.ok) {
                setContacts(data);
            }
        
        } catch (error) {
            console.log(error);
        }
    }

    const deleteContactById = async (id) => {
        try {
            const response = await fetch(`https://recipe-hub-backend.onrender.com/api/admin/contacts/delete/${id}`,
            {
                method: "DELETE",
                headers: { Authorization : authorizationToken} },
            )
            const data = await response.json();
            console.log(`users after delete ${data}`);


            if (response.ok) {
                getAllContactsData();
                toast.success("Deleted successfully");
            } else {
                toast.error("Not deleted successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllContactsData();
    },[]);

    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Contacts Data</h1>
                </div>
                <div className="container admin-users">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {contacts.map((curContacts, index) => {
                        return <tr key={index}>
                            <td>{curContacts.username}</td>
                            <td>{curContacts.email}</td>
                            <td>{curContacts.message}</td>
                            <td><button onClick={() => {deleteContactById(curContacts._id)}}>Delete</button></td>
                        </tr>
                    })}
                    </tbody>
                </table>
                </div>
            </section>
        </>
    );
};