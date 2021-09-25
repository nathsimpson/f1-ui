import React from "react";

import { DriverBar } from "./index";
import { leaderboard } from "../../data";

export default {
  component: DriverBar,
  title: "Components/DriverBar",
};

export const Single = (args) => <DriverBar driver={leaderboard[4]} {...args} />;

(Single.argTypes = {
  driver: {
    control: "select",
    options: ["VER", "HAM", "BOT"],
    mapping: {
      VER: leaderboard[0],
      HAM: leaderboard[1],
      BOT: leaderboard[2],
    },
  },
}),
  (Single.args = {
    driver: "VER",
  });
