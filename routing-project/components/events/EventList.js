import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem
          key={el.id}
          title={el.title}
          image={el.image}
          date={el.date}
          location={el.location}
          id={el.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
