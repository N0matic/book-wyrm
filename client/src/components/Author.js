import React from "react";

//Author Search Bar
function Author(props) {
  return (
    <form className="flex flex-col mb-4 m-auto h-auto text-gray-100">
      <button onClick={props.handleFormSubmit} className="btn btn=primary mt-1 text-lg font-semibold">
        Author:
      </button>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-conrol"
        placeholder="Search by author"
        id="search"
        className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto mb-3"
      />
    </form>
  )
}

export default Author;
