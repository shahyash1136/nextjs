import React from "react";
import Link from "next/link";
import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humaneReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humaneReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={`/events/${id}`}>Explore</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
