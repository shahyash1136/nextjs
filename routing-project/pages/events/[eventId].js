import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

function EventDetailsPage({ event }) {
  if (!event) {
    return <p>Loading..</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailsPage;

export async function getStaticPaths({ context }) {
  const data = await getFeaturedEvents();
  const path = data.map((el) => ({ params: { eventId: el.id } }));
  return {
    paths: path,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { eventId } = context.params;
  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
    revalidate: 30,
  };
}
