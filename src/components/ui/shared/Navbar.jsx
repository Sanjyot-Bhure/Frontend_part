import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../button";

export const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-6xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div className="flex item-center gap-5"> 
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>

            <Popover>
              <PopoverTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage className='w-10 rounded-full' src="https://github.com/shadcn.png" alt="@shadcn"/>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-60 border-none"> 
                <div className="flex gap-4 space-y-1">
                  <Avatar className='cursor-pointer'>
                    <AvatarImage className='w-10 rounded-full' src="https://github.com/shadcn.png" alt="@shadcn"/>
                  </Avatar>
                  <div>
                    <h4 className="text-1xl font-medium"> Sanjyot Bhure</h4>
                    <p className='text-sm font-normal text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                  </div> 
                </div>

                <div>
                    <Button variant="link" className='space-y-1'>View Profile</Button>
                </div>
              </PopoverContent>
            </Popover>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
