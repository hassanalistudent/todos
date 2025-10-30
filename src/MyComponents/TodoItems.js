export const TodoItems = ({ todo ,onDelete}) => {
  // console.log("Received todo:", todo); // Add this line

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}
      >Delete</button>
      <hr />
    </div>
  );
};