"use client";

import { useCallback, useState } from "react";
import Avatar from "../avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./menuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        p-2
        border-[1px]
        border-white
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-white
        "
        >
          <Avatar />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <div
            className="
            absolute
            rounded-md
            shadow-md
            w-[170px]
            bg-black
            overflow-hidden
            top-12
            right-0
            text-sm
            flex
            flex-col
            cursor-pointer
            "
          >
            <div>
              <Link href="orders">
                <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
