import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword("");
    } else {
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="d-flex"
      style={{ height: "30px", marginTop: "5px" }}
    >
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Student..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <FaSearch
        type="submit"
        onClick={submitHandler}
        style={{ fontSize: "30px", margin: "0 5px", color: "white" }}
      />
    </Form>
  );
};

export default SearchBox;
