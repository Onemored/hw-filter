import React from "react";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          className={
            filter === selected
              ? "toolbar__button toolbar__button_active"
              : "toolbar__button"
          }
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
