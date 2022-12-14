import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import Swal from "sweetalert2";
import { ApiEndPoint } from "../api/config-Api";
import CheckboxHook from "../Components/checkbox/CheckboxHook";
import Field from "../Components/field/Field";
import Input from "../Components/input/Input";
import Label from "../Components/label/Label";
import Loading from "../Components/Loading/Loading";
import MessageBox from "../Components/MessageBox";
import { useStore } from "../Context/Store-Context";
import Heading from "../Layout/Heading";
import { initialState, reducer } from "../Reducer/reducerUserUpdate";
import { getError } from "../Util/constanst";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 40px;
  .form {
    max-width: 600px;
    margin: 50px auto;
  }
  .styled-input-single {
    position: relative;
    padding: 20px 0 20px 40px;
    text-align: left;

    label {
      cursor: pointer;
      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        border-radius: 50%;
      }
      &:before {
        left: 0;
        width: 30px;
        height: 30px;
        margin: -15px 0 0;
        background: #e7ecf3;
        box-shadow: 0 0 1px grey;
      }
      &:after {
        left: 5px;
        width: 20px;
        height: 20px;
        margin: -10px 0 0;
        opacity: 0;
        background: #37b2b2;
        transform: translate3d(-40px, 0, 0) scale(0.5);
        transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
      }
    }

    input[type="radio"],
    input[type="checkbox"] {
      position: absolute;
      top: 0;
      left: -9999px;
      visibility: hidden;

      &:checked + label {
        &:before {
        }
        &:after {
          transform: translate3d(0, 0, 0);
          opacity: 1;
        }
      }
    }
  }
`;
const UserListUpdate = () => {
  const navigate = useNavigate();
  //d??ng react-hook-form
  const {
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  //context-api
  const { state } = useStore();
  const { userInfo } = state;
  //get id = react-router-dom
  const params = useParams(); //admin/user/id
  const { id: userId } = params;

  //reducerUserUpdate
  const [{ loading, error }, dispatch] = useReducer(reducer, initialState);

  //d??ng state l???y gi?? tr??? checked
  //get api hi???n th??? th??ng tin user
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        // ????? l???y ra d??? li???u c???a userId, b???n c???n g???i request l??n server v???i method GET
        const { data } = await axios.get(`${ApiEndPoint}/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS" });
        //set gi?? tr??? hi???n th??? th??ng tin l??n ?? input
        setValue("name", data.name);
        setValue("email", data.email);
        setValue("isAdmin", data.isAdmin);
      } catch (err) {
        toast.error(err.message, {
          pauseOnHover: false,
          delay: 0,
        });
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [setValue, userId, userInfo]);

  //h??m c???p nh???t UserListUpdate
  const handleUpdateUser = async (values) => {
    try {
      dispatch({ type: "UPDATE_REQUEST" });
      //method PUT ????? update user
      await axios.put(
        `/api/users/${userId}`,
        {
          _id: userId,
          name: values.name,
          email: values.email,
          isAdmin: values.isAdmin,
        },
        {
          //x??c th???c ?????n backend
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );
      //setState
      dispatch({ type: "UPDATE_SUCCESS" });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Update Th??nh C??ng",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/admin/user");
    } catch (err) {
      toast.error(err.message, {
        pauseOnHover: false,
        delay: 0,
      });
      dispatch({ type: "UPDATE_FAIL" });
    }
  };

  return (
    <Wrapper className="section">
      <Heading>C???p Nh???t Ng?????i D??ng</Heading>
      {loading && <Loading />}
      {error && <MessageBox variant="danger">{error}</MessageBox>}
      <form
        className="form"
        autoComplete="off"
        onSubmit={handleSubmit(handleUpdateUser)}
      >
        <Field>
          <Label htmlFor="Name">T??n Ng?????i D??ng</Label>
          <Input
            name="name"
            type="text"
            placeholder="Nh???p T??n Ng?????i D??ng"
            required
            control={control}
          ></Input>
        </Field>
        <Field>
          <Label htmlFor="Email">Email</Label>
          <Input
            name="email"
            type="text"
            placeholder="Nh???p Email Ng?????i D??ng"
            control={control}
            required
          ></Input>
          {/* isAdmin */}

          <div className="flex items-center gap-2">
            {/* s??? d???ng useController */}
            <CheckboxHook
              control={control}
              name="isAdmin"
              checked={"isAdmin"}
            ></CheckboxHook>
            <Label htmlFor="isAdmin">isAdmin</Label>
          </div>
        </Field>
        <Button type="submit" kind="ghost" isLoading={isSubmitting}>
          X??c Nh???n
        </Button>
      </form>
    </Wrapper>
  );
};

export default UserListUpdate;
