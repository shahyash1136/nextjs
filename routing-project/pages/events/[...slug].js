import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";

function FilteredEventsPage() {
  const router = useRouter();
  const filteredata = router.query.slug;
  if (!filteredata) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filteredata[0];
  const filteredMonth = filteredata[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return;
    <>
      <ErrorAlert>
        <p>Invalid Filter. Please adjust your values</p>
      </ErrorAlert>
      <div className='center'>
        <Button link='/events'>Show All Events</Button>
      </div>
    </>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter!</p>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </>
  );
}

export default FilteredEventsPage;
