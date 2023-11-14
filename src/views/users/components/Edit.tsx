
import { useFormik } from 'formik';
import CustomInput from '../../../components/input';
import { fetcher } from '../../../libs/fetcher';

interface User {
    id: string;
    email: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    address: {
        city: string;
        street: string;
        number: string;
        zipcode: string;
        geolocation: {
            lat: string;
            long: string;
        };
    };
    phone: string;
}

interface EditProps {
    user: User;
    closeHandle: React.Dispatch<React.SetStateAction<boolean>>;
    mutate: any;
}

const Edit: React.FC<EditProps> = ({ user, closeHandle, mutate }) => {
    const formik = useFormik({
        initialValues: {
            email: user.email,
            password: user.password,
            firstname: user.name.firstname,
            lastname: user.name.lastname,
            city: user.address.city,
            street: user.address.street,
            number: user.address.number,
            zipcode: user.address.zipcode,
            lat: user.address.geolocation.lat,
            long: user.address.geolocation.long,
            phone: user.phone,
        },
        onSubmit: (values) => {
            // reformat value to match api
            const data = {
                email: values.email,
                password: values.password,
                name: {
                    firstname: values.firstname,
                    lastname: values.lastname,
                },
                address: {
                    city: values.city,
                    street: values.street,
                    number: values.number,
                    zipcode: values.zipcode,
                    geolocation: {
                        lat: values.lat,
                        long: values.long,
                    },
                },
                phone: values.phone,
            };
            fetcher(`/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response)
                .then((data) => {
                    // show alert if success
                    alert('Success');
                    // close dialog
                    closeHandle(false);
                    // mutate data
                    mutate();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        },

    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <CustomInput
                label="Email"
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Password"
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="First id"
                id="firstname"
                type="text"
                value={formik.values.firstname}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Last id"
                id="lastname"
                type="text"
                value={formik.values.lastname}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="City"
                id="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Street"
                id="street"
                type="text"
                value={formik.values.street}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Number"
                id="number"
                type="number"
                value={formik.values.number}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Zipcode"
                id="zipcode"
                type="text"
                value={formik.values.zipcode}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Latitude"
                id="lat"
                type="text"
                value={formik.values.lat}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Longitude"
                id="long"
                type="text"
                value={formik.values.long}
                onChange={formik.handleChange}
            />
            <CustomInput
                label="Phone"
                id="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
            />
            <button type="submit"
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >Submit</button>
        </form>
    );
};

export default Edit;
