import { useState } from "react";

function AddTodoForm({ activityArr, setActivityArr }) {
  const [newactivity, setNewactivity] = useState("");

  function handleChange(event) {
    setNewactivity(event.target.value);
  }

  function addActivity() {
    if (newactivity.trim() !== "") {
      setActivityArr([...activityArr, { id: activityArr.length + 1, activity: newactivity }]);
      setNewactivity(""); // Clear input field after adding
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>
      <div>
        <input
          type="text"
          className="border border-black bg-transparent p-1"
          placeholder="Next Activity?"
          value={newactivity} // Bind the value to the state
          onChange={handleChange} // Call handleChange on input change
        />
        <button className="bg-black text-white p-1 border border-black" onClick={addActivity}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodoForm;
