'use client'

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

interface SideBarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SideBarProps> = ({ children }) => {
    const pathName = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search'
        }
    ], [pathName])


    return (
        <div className="flex h-full">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box>
                    Sidebar Navigation
                </Box>
            </div>
        </div>
    )
}

export default Sidebar