import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { getAllUsers } from "../../app/actions/userAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UserDataMainModel } from "../../app/models/userModel";
import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { viewUser } from "../../app/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const { allUsers, isLoading } = useAppSelector((state) => state.user);

  // console.log("allUsers=>", allUsers);

  const viewClick = (vdata: UserDataMainModel) => {
    // console.log("vdata=>", vdata);
    const afterViewDispatch = dispatch(viewUser(vdata));

    console.log("afterViewDispatch=>", afterViewDispatch);

    if (afterViewDispatch.payload) {
      navigate(`/user/view/${vdata.id}`, { replace: true });
    } else {
      toast.error("No particular user visible or something wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div>
      <h2 className="mb-4 mt-4" style={{ color: "green" }}>
        CRUD Using JSON Fake API
      </h2>
      {allUsers.length === 0 ? (
        <h3>No user found!</h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((udata: UserDataMainModel, index: number) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{udata.name}</td>
                    <td>{udata.phone}</td>
                    <td>{udata.email}</td>
                    <td>
                      <button className="" onClick={() => viewClick(udata)}>
                        <FaEye />
                      </button>
                      &nbsp; &nbsp;
                      <button className="" onClick={() => viewClick(udata)}>
                        <FaPencilAlt />
                      </button>
                      &nbsp; &nbsp;
                      <button className="" onClick={() => viewClick(udata)}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserList;
