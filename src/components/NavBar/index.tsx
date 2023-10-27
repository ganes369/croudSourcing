"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../Button";

const NavBar = () => {
  return (
    <div className="bg-black-color text-white p-4 flex">
      <div className="container flex items-center justify-arround">
        <h1 className="text-xl font-semibold flex justify-between gap-4">
          <Icon icon="uil:home-alt" width="32px" />
          <Icon icon="mdi:forum" width="32px" />
          <Icon icon="uil:search" width="32px" />
        </h1>
      </div>
      <div className="container flex justify-end gap-4">
        <Button
          iconLeft="bx:user"
          variant="secondary"
          className="rounded-md text-white"
        >
          Login
        </Button>
        <Button
          iconLeft="bx:user"
          variant="secondary"
          className="rounded-md text-white"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
