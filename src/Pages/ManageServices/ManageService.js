import React, { useEffect, useState } from "react";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h1>ManageService</h1>
      {services.map((service) => (
        <div key={service._id} className="border m-5 rounded p-5 bg-black">
          <h3 className="p-3 text-white">{service.name}</h3>
          <button onClick={() => handleDelete(service._id)} className="btn btn-info">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageService;
