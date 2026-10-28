"use client";

import { useState } from "react";
import Link from "next/link";
import SiteIcon from "@/components/ui/SiteIcon";

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function firstOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

export default function EventCalendar() {
  const [month, setMonth] = useState(() => firstOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingDays = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const cellCount = Math.ceil((leadingDays + daysInMonth) / 7) * 7;
  const monthLabel = new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(month);
  const selectedLabel = new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(selectedDate);

  const changeMonth = (offset: number) => {
    const nextMonth = new Date(year, monthIndex + offset, 1);
    setMonth(nextMonth);
    setSelectedDate(nextMonth);
  };

  return (
    <section className="calendar-section">
      <div className="section-container">
        <div className="calendar-intro">
          <h2 className="calendar-section-heading">What’s coming up</h2>
          <p className="calendar-section-copy">
            Keep an eye on the calendar for the next chance to meet, share, and
            celebrate with fellow past students.
          </p>
        </div>

        <div className="calendar-layout">
          <section className="calendar-card" aria-label="Monthly event calendar">
            <div className="calendar-card-top">
              <div>
                <span className="calendar-card-kicker">Browse by month</span>
                <h3 className="calendar-month-heading">{monthLabel}</h3>
              </div>
              <div className="calendar-month-controls">
                <button
                  type="button"
                  className="calendar-month-button"
                  onClick={() => changeMonth(-1)}
                  aria-label="Go to previous month"
                >
                  <span aria-hidden="true">←</span>
                </button>
                <button
                  type="button"
                  className="calendar-month-button"
                  onClick={() => changeMonth(1)}
                  aria-label="Go to next month"
                >
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <div className="calendar-weekdays" aria-hidden="true">
              {weekdays.map((weekday) => (
                <span key={weekday}>{weekday}</span>
              ))}
            </div>

            <ol className="calendar-days" aria-label={`Days in ${monthLabel}`}>
              {Array.from({ length: cellCount }, (_, index) => {
                const day = index - leadingDays + 1;
                const isCurrentMonth = day > 0 && day <= daysInMonth;

                if (!isCurrentMonth) {
                  return (
                    <li
                      key={`empty-${index}`}
                      className="calendar-day-empty"
                      aria-hidden="true"
                    />
                  );
                }

                const date = new Date(year, monthIndex, day);
                const isSelected =
                  date.getFullYear() === selectedDate.getFullYear() &&
                  date.getMonth() === selectedDate.getMonth() &&
                  date.getDate() === selectedDate.getDate();
                const isToday =
                  date.getFullYear() === new Date().getFullYear() &&
                  date.getMonth() === new Date().getMonth() &&
                  date.getDate() === new Date().getDate();

                return (
                  <li key={day}>
                    <button
                      type="button"
                      className={`calendar-day${isSelected ? " calendar-day-selected" : ""}${isToday ? " calendar-day-today" : ""}`}
                      onClick={() => setSelectedDate(date)}
                      aria-label={new Intl.DateTimeFormat("en", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(date)}
                      aria-pressed={isSelected}
                      aria-current={isToday ? "date" : undefined}
                    >
                      {day}
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="calendar-selection" aria-live="polite">
              <span className="calendar-selection-mark" aria-hidden="true" />
              <p>
                Selected date: <strong>{selectedLabel}</strong>
              </p>
            </div>
          </section>

          <aside className="calendar-aside">
            <div className="calendar-notice">
              <span className="calendar-notice-icon" aria-hidden="true">
                <SiteIcon name="star" />
              </span>
              <h3>No upcoming events announced yet</h3>
              <p>
                Event dates and registration details will appear here as soon
                as they are confirmed.
              </p>
            </div>

            <div className="calendar-connect">
              <h3>Good things are better together.</h3>
              <p>
                Check the latest announcements or join the alumni network so
                you don’t miss the next gathering.
              </p>
              <Link href="/news" className="calendar-text-link">
                Read the latest news <span aria-hidden="true">→</span>
              </Link>
              <Link href="/register" className="calendar-text-link">
                Join the alumni network <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
