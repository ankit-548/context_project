import userContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
    const {user} = useContext(userContext);
    return (
        <div>
            {!user? (
                <h3>No user</h3>
            ): (
                <h3>Welcome {user.username}</h3>
            )}
        </div>
    )
}

export default Profile;