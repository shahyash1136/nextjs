import { useState } from "react";

function CommentsPage() {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setData(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchComments();
  };

  return (
    <>
      <input
        type='text'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit</button>
      <button onClick={fetchComments}>Load Comments</button>
      {data.map((el) => {
        return (
          <div key={el.id}>
            {el.id} {el.text}
            <button onClick={() => deleteComment(el.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default CommentsPage;
