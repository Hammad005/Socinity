import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className='text-6xl font-bold'>Not Found</h1>
        <p className='text-muted-foreground tracking-widest'>The page you are looking for does not exist.</p>
        <Link href="/" className='mt-4'>
        <Button>

          <Home className='w-4 h-4'/> Return Home
        </Button>
        </Link>
    </div>
  )
}

export default NotFound