import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { Globe } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { syncUser } from '@/actions/user.action'

const Navbar = async () => {

  const user = await currentUser();
  if(user) await syncUser();
  return (
    <>
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
     <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold bg-foreground text-background px-3 py-1 font-mono rounded-md tracking-wider flex items-center justify-center gap-1">
                <span className='animate-pulse flex gap-1 items-center'><Globe className='size-5'/> Socinity</span>
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar