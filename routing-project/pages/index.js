import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage({ featureEvents }) {
  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
}

export async function getStaticProps({ context }) {
  const featureEvents = await getFeaturedEvents();

  return {
    props: {
      featureEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
