import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((el) => {
        return (
          <li key={el.id}>
            <p>{el.text}</p>
            <div>
              By <address>{el.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
