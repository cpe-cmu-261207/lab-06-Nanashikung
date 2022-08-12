import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";
import { useState } from "react";
import UserCard from "../components/UserCard";
import UserCardDetail from "../components/UserCardDetail";
const axios = require("axios");

export default function Home() {
  const [users, setUsers] = useState([]);
  const [Input, setInput] = useState(1);
  const genUsers = async () => {
    if (Input < 1) {
      alert("Invalid number of users");
    } else {
      const resp = await axios.get(
        `https://randomuser.me/api/?results=${Input}`
      );
      const newUses = [];
      for (const data of resp.data.results) {
        newUses.push({
          name: data.name.first + " " + data.name.last,
          email: data.email,
          imgUrl: data.picture.large,
          address: `${data.location.city} ${data.location.state} ${data.location.country} ${data.location.postcode}`,
        });
        setUsers(newUses);
      }
    }
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <button class="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      {users.map((x) => (
        <UserCard {...x} />
      ))}

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Praschaya Kornnittisarat 640610649
      </p>
    </div>
  );
}
