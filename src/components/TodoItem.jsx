function TodoItem({ item, index, activityArr, setActivityArr }) {
    // Handle delete functionality
    const handleDelete = (deleteid) => {
      const updatedArr = activityArr.filter((activity) => activity.id !== deleteid);
      setActivityArr(updatedArr); // Update the state with the new array
    };
  
    return (
      <div className="flex justify-between">
        <p>{index + 1}. {item.activity}</p>
        <button className="text-red-500" onClick={() => handleDelete(item.id)}>
        Delete 🗑️
        </button>
      </div>
    );
  }
  
  export default TodoItem;
  