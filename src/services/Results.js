import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleStudent } from "./students";

export default () => {
  const [aStudent, setAStudent] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  useEffect(() => {
    getSingleStudent(id).then((response) => {
      setAStudent(response);
    });
  }, [id]);

  return (
    <div>
      <button onClick={handleClick} style={{ float: "right" }}>
        back
      </button>
      <div>
        <img src={aStudent.picture?.medium} alt={aStudent.login?.username} />
        <p>
          {aStudent.name?.title} {aStudent.name?.first} {aStudent.name?.last}
        </p>
        <p>
          {aStudent.location?.street.name} {aStudent.location?.street.number}
        </p>
        <p>
          {aStudent.location?.postcode} {aStudent.location?.country}
        </p>
        <p>{aStudent.cell}</p>
        <p>{aStudent.email}</p>
      </div>
    </div>
  );
};
