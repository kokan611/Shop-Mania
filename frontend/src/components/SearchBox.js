import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form onSubmit={submitHandler} style={{ display: "flex" }}>
      <FormControl
        style={{ display: "inline" }}
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder="Search Products....."
        className="mr-sm-2 me-sm-2"
      ></FormControl>

      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
