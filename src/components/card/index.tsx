
import React from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { capitalize } from '../../utils/capitalize';

type Address = {
    city: string;
    street: string;
    number: number;
};

interface Props {
    id: string,
    email: string;
    firstName: string;
    lastName: string;
    address: Address;
}

const CustomCard: React.FC<Props> = ({ id, email, firstName, lastName, address }) => {
    let { city, street, number } = address;

    // capitalize first letter of first and last name
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);

    // capitalize first letter of city and street
    city = capitalize(city);
    street = capitalize(street);

    // define navigate function
    const navigate = useNavigate()

    return (
        <div className='flex flex-col rounded-lg w-[350px] shadow-lg  hover:cursor-pointer hover:bg-gray-200'
            onClick={() => {
                navigate({
                    pathname: 'detail',
                    search: createSearchParams({
                        id: id
                    }).toString()
                });
            }}>
            <div className='flex justify-center mt-4'>
                <h2 className="text-blue-600 font-bold text-2xl">{`${firstName} ${lastName}`}</h2>
            </div>
            <div className='flex flex-col p-5 gap-y-2'>
                <p className="text-lg">
                    <b>Email:</b> {email}
                </p>
                <p className="text-lg">
                    <b>Address:</b> {`${city}, ${street} ${number}`}
                </p>
            </div>

        </div>
    );
};

export default CustomCard;
