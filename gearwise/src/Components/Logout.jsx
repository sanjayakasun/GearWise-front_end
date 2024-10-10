import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                // Optionally, make a request to the server to clear session/cookie (if applicable)
                // await axios.post('http://localhost:4005/api/customers/logout');

                // Clear local storage and session
                localStorage.removeItem('customerId');
                navigate('/'); // Navigate to login page after logout
            } catch (error) {
                console.log("Logout error:", error);
            }
        };

        // Call logout function when the component is rendered
        handleLogout();
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
}

export default Logout;
