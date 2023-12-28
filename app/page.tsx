"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from "react";
import { Modal } from "@/components/Modal";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Email is invalid" }),
});
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // console.log(data);
    setOpen(true);
  }

  return (
    <main
      className="bg-neutral-grey h-screen 
    flex justify-center items-center"
    >
      <section
        className="bg-neutral-white flex flex-col-reverse md:flex-row
      justify-between items-center 
      md:rounded-3xl md:h-[600px] w-full h-full md:w-[600px] lg:w-[900px] md:p-4 lg:p-6"
      >
        <div className="md:flex-1 flex flex-col gap-4 md:px-10 px-6 md:py-20 py-10">
          <h1 className="lg:text-6xl text-4xl font-bold">Stay updated!</h1>
          <p className="text-wrap">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-4 items-center">
              <Image
                src={"/assets/images/icon-list.svg"}
                alt=""
                width={20}
                height={20}
                className="inline"
              />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex gap-4 items-center">
              <Image
                src={"/assets/images/icon-list.svg"}
                alt=""
                width={20}
                height={20}
                className="inline"
              />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex gap-4 items-center">
              <Image
                src={"/assets/images/icon-list.svg"}
                alt=""
                width={20}
                height={20}
                className="inline"
              />
              <p>And much more!</p>
            </li>
          </ul>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6 mt-3"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel className="text-base">Email address</FormLabel>
                      <FormMessage className="text-base" />
                    </div>
                    <FormControl>
                      <Input
                        className="w-full text-base h-14"
                        placeholder="email@company.com"
                        {...field}
                      />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                  </FormItem>
                )}
              />
              <Button
                className="w-full text-base h-14 bg-gradient-to-r 
              hover:from-primary-pink hover:to-primary-tomato hover:h-14"
                type="submit"
              >
                Subscribe to monthly newsletter
              </Button>
            </form>
          </Form>
        </div>

        <div
          className="md:flex-1 relative md:max-w-[400px] md:h-full 
        w-full h-[300px] rounded-2xl overflow-hidden"
        >
          <Image
            src={"/assets/images/illustration-sign-up-desktop.svg"}
            alt="desktop illustration"
            fill
            className="object-cover md:block hidden"
          ></Image>
          <Image
            src={"/assets/images/illustration-sign-up-mobile.svg"}
            alt="desktop illustration"
            fill
            className="object-cover md:hidden block"
          ></Image>
        </div>
      </section>

      <Modal open={open} setOpen={setOpen} />
    </main>
  );
}
