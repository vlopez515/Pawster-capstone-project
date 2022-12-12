import { React } from "react";
import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Form } from "../Forms/Form";


function Account() {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      console.log(user);
      alert("You are now logged out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="account">
    {/* <Form>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control>
        </Form.Control>
        </Form.Group> */}
     

      <div>
        <h2>Welcome, {user?.displayName}!</h2>
        <img src={user?.photoURL} className="image-container" alt="PFP"></img>
      </div>

      <h2>Email: {user?.email}</h2>

      <button onClick={handleSignOut}>Logout</button>
      <button>
        <a href="/user/1/explore">BACK</a>
      </button>
      {/* </Form> */}
    </div>
  );
}

export default Account;
