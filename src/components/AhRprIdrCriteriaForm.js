//API Hub Request, Persist & Respond UI
//IDentity Resolution search criteria form

import React from "react";

function AhRprIdrCriteriaForm(props) {
  return (
    <form
      onSubmit={props.handleCriteriaSubmit}
      onReset={props.handleCriteriaReset}
    >

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={props.state.name}
        onChange={props.handleCriteriaChange}
      />

      <input
        type="text"
        name="streetAddressLine1"
        placeholder="Address"
        value={props.state.streetAddressLine1}
        onChange={props.handleCriteriaChange}
      />

      <input
        type="text"
        name="addressLocality"
        placeholder="City"
        value={props.state.addressLocality}
        onChange={props.handleCriteriaChange}
      />

      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />

    </form>
  );
}

export { AhRprIdrCriteriaForm };
