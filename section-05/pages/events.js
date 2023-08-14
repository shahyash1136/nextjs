import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      <h1>List of events</h1>
      {events.map((el) => {
        return (
          <div key={el.id}>
            <h2>
              {el.id} {el.title} {el.date} | {el.category}
            </h2>
            <p>{el.description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
