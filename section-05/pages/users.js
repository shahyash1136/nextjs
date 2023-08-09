import User from "../components/User";

const UsersList = (props) => {
  const { users } = props;

  return (
    <>
      <h1>List of users</h1>
      <ul>
        {users.map((el) => {
          return (
            <li key={el.id}>
              <User user={el} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
