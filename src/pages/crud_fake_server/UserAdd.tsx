import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../app/hooks";
import { addNewUser } from "../../app/slices/userSlice";
import { useNavigate } from "react-router-dom";

type userAddType = {
  username: string;
  email: string;
  phone: string;
};

const UserAdd: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userAddState, setUserAddState] = useState<userAddType>({
    username: "",
    email: "",
    phone: "",
  });

  const onAddSubmit = (e: any) => {
    e.preventDefault();
    if (!userAddState.username || !userAddState.email || !userAddState.phone) {
      toast.error("Please fill all fields!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const formFieldData = {
        id: Date.now(),
        name: userAddState.username,
        email: userAddState.email,
        phone: userAddState.phone,
      };
      dispatch(addNewUser(formFieldData));
    }
  };
  return (
    <div className="container">
      <form onSubmit={(e) => onAddSubmit(e)}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={userAddState.username}
            onChange={(e) => {
              setUserAddState({
                ...userAddState,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={userAddState.email}
            onChange={(e) => {
              setUserAddState({
                ...userAddState,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={userAddState.phone}
            onChange={(e) => {
              setUserAddState({
                ...userAddState,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>{" "}
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default UserAdd;
