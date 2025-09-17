'use client';
import * as React from 'react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// Icons
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DrawIcon from '@mui/icons-material/Draw';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import MenuIcon from '@mui/icons-material/Menu';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import VideocamIcon from '@mui/icons-material/Videocam';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CookieIcon from '@mui/icons-material/Cookie';
import FolderIcon from '@mui/icons-material/Folder';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Button } from './ui/button';
import { ModeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    {
      path: '/',
      icon: HomeFilledIcon,
      label: 'Home',
    },
    {
      path: '/image',
      icon: InsertPhotoIcon,
      label: 'Image',
    },
    {
      path: '/video',
      icon: VideocamIcon,
      label: 'Video',
    },
    {
      path: '/real-time',
      icon: DrawIcon,
      label: 'Real-time',
    },
    {
      path: '/enhance',
      icon: AutoFixHighIcon,
      label: 'Enhance',
    },
    {
      path: '/edit',
      icon: ArchitectureIcon,
      label: 'Edit',
    },
    {
      path: '/files',
      icon: FolderIcon,
      label: 'Files',
    },
  ];
  return (
    <header className="py-4 px-4 lg:px-8 sticky top-0 not-dark:bg-white z-10 dark:bg-black ">
      <div className="flex justify-between relative items-center">
        <div className="flex gap-6 items-center">
          <Link href={'/'}>
            <Button variant={'link'} size={'icon'}>
              <CookieIcon />
            </Button>
          </Link>
          {/* Nav Left */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className="inline-flex gap-3 items-center ">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm">johndoe@email.com</p>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Nav center*/}
        <NavigationMenu
          viewport={false}
          className="hidden lg:flex bg-accent p-2 rounded-2xl absolute left-1/2 -translate-x-1/2"
        >
          <NavigationMenuList className="gap-3">
            {navLinks.map((item) => (
              <NavigationMenuItem key={item.path}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle({}),
                    'flex items-center justify-center rounded-lg transition-colors',
                    pathname === item.path
                      ? '!bg-white shadow-md'
                      : 'bg-transparent !hover:bg-red-400'
                  )}
                >
                  <Link href={item.path}>
                    <item.icon
                      fontSize="small"
                      color="inherit"
                      className="text-black dark:text-muted-foreground"
                    />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Nav right */}
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="gap-3 flex">
                <Button className="text-secondary-foreground bg-accent">
                  <InsertPhotoIcon fontSize="small" />
                  Gallery
                </Button>
                <Button className="text-secondary-foreground bg-accent">
                  <HeadsetMicIcon fontSize="small" />
                  Support
                </Button>
                <Button
                  size={'icon'}
                  className="text-secondary-foreground bg-accent"
                >
                  <NotificationsIcon />
                </Button>
                <ModeToggle />
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile nav */}
        <div className="flex lg:hidden gap-3">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon fontSize="small" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full">
              <nav className="mt-6 flex flex-col gap-4 p-8">
                {navLinks.map((item) => (
                  <Link href={item.path} className="text-lg font-medium">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
