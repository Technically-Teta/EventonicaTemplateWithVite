import React, { useState } from 'react';

function EditUserDataForm(props) {
  // Initialize state to store user data
  const [userData, setUserData] = useState(props);

  // Function to handle changes in form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding field in userData state
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a callback function to handle the updated data
    props.onSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditUserDataForm;
