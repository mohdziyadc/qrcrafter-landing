"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import QRCrafterLogo from "public/qrCrafter-Logo.png";
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
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const formSchema = z.object({
  emailId: z.string().email(),
});
const SignUp = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailId: "",
    },
  });

  const submitHandler = async () => {};
  return (
    <div className="flex justify-center items-center bg-secondary-foreground h-screen">
      <Card className="md:w-[30%] border-4  border-primary">
        <CardHeader className="mb-4">
          <CardTitle className="flex flex-row items-center justify-center">
            <Image
              src={QRCrafterLogo}
              alt="logo"
              width={45}
              height={45}
              className="rounded-lg mr-2"
            />
            <p className="text-3xl text-secondary-foreground font-bold">
              QRCrafter
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(submitHandler)}>
                <div className="flex flex-col gap-4">
                  <FormField
                    name="emailId"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sign Up</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">
                    <div className="flex flex-row justify-center items-center gap-6">
                      <p>Join the waitlist</p>
                      <div>
                        <MoveRight className="h-6 w-6" />
                      </div>
                    </div>
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default SignUp;
