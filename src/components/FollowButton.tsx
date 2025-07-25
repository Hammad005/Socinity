"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.action';

const FollowButton = ({userId}: {userId: string}) => {
    const [isLoading, setisLoading] = useState(false);

    const handleFollow = async () => {
        setisLoading(true);
        try {
            await toggleFollow(userId);
            toast.success("User followed successfully");
        } catch (error) {
            toast.error("Error following user");
        } finally {
            setisLoading(false);
        }
    }
  return (
    <Button
    size={"sm"}
    variant={"secondary"}
    onClick={handleFollow}
    disabled={isLoading}
    className='w-20'
    >
        {isLoading ? <Loader2 className='animate-spin size-4'/> : "Follow"}
    </Button>
  )
}

export default FollowButton