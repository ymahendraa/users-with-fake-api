import { fetcher } from "../../../libs/fetcher";
import useSWR from "swr";
import { useSearchParams } from "react-router-dom";
import { capitalize } from "../../../utils/capitalize";
import DialogCustom from "../../../components/dialog";
import { useState } from "react";
import Edit from "../components/Edit";

const UserDetail = () => {
    // create state for dialog
    const [open, setOpen] = useState(false);
    //get params
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const { data, error, mutate } = useSWR(`/users/${id}`, fetcher);

    if (error) return <div>Failed to load user</div>;
    if (!data) return <div>Loading...</div>;

    const user = { ...data };
    // capitalize first letter of first and last name
    user.name.firstname = capitalize(user.name.firstname);
    user.name.lastname = capitalize(user.name.lastname);

    // capitalize first letter of city and street
    user.address.city = capitalize(user.address.city);
    user.address.street = capitalize(user.address.street);
    user.address.zipcode = capitalize(user.address.zipcode);


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="flex flex-col gap-y-2 bg-white rounded-lg shadow-lg p-6 w-2/6">
                <h2 className="text-2xl font-bold">
                    {user.name.firstname} {user.name.lastname}
                </h2>
                <p className="text-gray-700">
                    <span className="font-bold">Email:</span> {user.email}
                </p>
                <div className="flex flex-col text-gray-700 gap-y-2">
                    <span className="font-bold">Address:</span>
                    <span ><b>City:</b> {user.address.city}</span>
                    <span ><b>Street:</b> {user.address.street}</span>
                    <span ><b>Number:</b> {user.address.number}</span>
                    <span ><b>Zipcode:</b> {user.address.zipcode}</span>
                </div>
                <div className="flex flex-row justify-end gap-x-2">
                    <button onClick={
                        () => {
                            window.history.back();
                        }
                    } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        back
                    </button>
                    <button
                        onClick={
                            () => {
                                setOpen(true);
                            }
                        }
                        className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded"
                    >
                        edit
                    </button>
                </div>
            </div>
            <DialogCustom open={open} setOpen={setOpen} title={`Edit ${user.name.firstname} ${user.name.lastname} `}>
                <Edit user={user} closeHandle={setOpen} mutate={mutate} />
            </DialogCustom>
        </div>
    );
};

export default UserDetail;
