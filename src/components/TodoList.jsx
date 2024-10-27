import TodoItem from "./TodoItem"; // Import TodoItem component

function TodoList({ activityArr, setActivityArr }) {
  return (
    <div className="bg-[#BDB4E4] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}
      {activityArr.map((item, index) => (
        <TodoItem
          key={item.id}
          item={item}
          index={index}
          activityArr={activityArr}
          setActivityArr={setActivityArr}
        />
      ))}
    </div>
  );
}

export default TodoList;
