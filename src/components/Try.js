import React from "react";

const Try = () => {
  const form = document.getElementById("form");
  let bill = form.bill.value;
  let persons = form.persons.value;
  let results = bill - persons;

  form.addEventListener("submit", function () {
    return alert(results);
  });
  return <div></div>;
};

export default Try;
