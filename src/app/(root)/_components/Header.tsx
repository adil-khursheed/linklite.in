import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Header = () => {
  return (
    <header className="h-12 flex items-center justify-between px-5">
      <SidebarTrigger className="cursor-pointer" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8 rounded-full cursor-pointer">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-p-primary-light hover:bg-p-primary-light/90 text-s-secondary font-bold text-sm">
                AK
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="flex items-center gap-2">
            <Avatar className="size-10">
              <AvatarFallback className="bg-p-primary-light hover:bg-p-primary-light/90 text-s-secondary font-bold text-sm">
                AK
              </AvatarFallback>
            </Avatar>
            <div>
              <p>Adil_Khursheed</p>
              <p>adilkhursheed60@gmail.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="flex items-center justify-between">
            <div>
              <span>Free Account</span>
            </div>
            <Link href="/pricing">
              <Button className="cursor-pointer">Upgrade</Button>
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
