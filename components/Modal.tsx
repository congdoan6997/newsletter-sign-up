import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

export function Modal({ open, setOpen }: { open: boolean; setOpen: any }) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px] p-10 !rounded-3xl !gap-4">
        {/* <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader> */}
        <Image
          src={"/assets/images/icon-success.svg"}
          alt=""
          width={40}
          height={40}
        />
        <h1 className="text-4xl font-bold">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to your email address. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full mt-4 h-12
          bg-gradient-to-r 
          hover:from-primary-pink hover:to-primary-tomato hover:h-12"
          >
            Dismiss message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
