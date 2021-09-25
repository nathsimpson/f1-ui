import React from "react";

import { TotemPole } from "./index";
import { leaderboard } from "../../data";

export default {
  component: TotemPole,
  title: "Components/TotemPole",
};

export const Primary = (args) => <TotemPole drivers={leaderboard} {...args} />;
