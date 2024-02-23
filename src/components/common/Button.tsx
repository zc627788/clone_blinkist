import React from "react";

function Button({ title }: { title: string }) {
  return (
    <a
      href="#"
      style={{ color: "#03314b" }}
      data-test-id="start-trial-button"
      data-event-category="body-20210610-audio_hero"
      type="submit"
    >
      <span className="color button">{title}</span>
    </a>
  );
}

export default Button;
