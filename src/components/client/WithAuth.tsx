import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const withAuth = ( WrappedComponent :any) => {
    return function WithAuthComponent(props: any) {
        const router = useRouter();
        const { status } = useSession({
            required: true,
            onUnauthenticated() {
                router.push('/auth/signin'); // Redirect to login page
            },
        });

        if (status === 'loading') {
            return <div>Loading...</div>; // Or a loading spinner
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
