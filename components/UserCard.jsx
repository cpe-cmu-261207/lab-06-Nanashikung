import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import UserCardDetail from "./UserCardDetail";
import { useState } from "react";

export default function UserCard(props) {
  const [onclick, setonclick] = useState(false);

  return (
    <div
      className="border-bottom"
      onClick={() => {
        if (onclick) {
          setonclick(false);
        } else {
          setonclick(true);
        }
      }}
    >
      {/* main section */}
      <div className="d-flex align-items-center p-3">
        <img src={`${props.imgUrl}`} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{props.name}</span>
        {onclick ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {onclick ? <UserCardDetail {...props} /> : ""}
    </div>
  );
}
