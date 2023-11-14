import CustomCard from '../../components/card';
import useSWR from 'swr';
import { fetcher } from '../../libs/fetcher';
import Header from '../../components/header';
const Users = () => {
    const { data, error } = useSWR('/users', fetcher);

    if (error) return <div>Failed to load users</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <div className="flex flex-wrap py-16 px-20 gap-5 justify-center">
                {data.map((user: any) => (
                    <CustomCard
                        id={user.id}
                        key={user.id}
                        firstName={user.name.firstname}
                        lastName={user.name.lastname}
                        email={user.email}
                        address={user.address}
                    />
                ))}
            </div>
        </>
    );
};

export default Users;
