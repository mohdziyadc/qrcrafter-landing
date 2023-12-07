"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
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
import { Loader2, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormspark } from "@formspark/use-formspark";

type Props = {};

const FORMSPARK_FORM_ID = "4CYjP5tq5";
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
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = async () => {
    const email = form.getValues("emailId");
    if (email) {
      try {
        setLoading(true);
        const submitted = await submit({ email });
        if (submitted) {
          setSubmitted(true);
        }
      } catch (error) {
        throw new Error("FORMSPARK ERROR - " + error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Card className=" bg-secondary-foreground border-4  border-primary">
        <CardHeader className="mb-4">
          <CardTitle className="flex flex-row items-center justify-center">
            <Image
              src={QRCrafterLogo}
              alt="logo"
              width={45}
              height={45}
              className="rounded-lg mr-2"
            />
            <p className="text-3xl text-secondary font-bold">QRCrafter</p>
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
                        <FormLabel className="text-secondary">
                          Sign Up
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={submitted}>
                    {loading ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : submitted ? (
                      <div>
                        <p>Thanks for signing up! We will update you soon</p>
                      </div>
                    ) : (
                      <div className="flex flex-row justify-center items-center gap-6">
                        <p>Join the waitlist</p>
                        <div>
                          <MoveRight className="h-6 w-6" />
                        </div>
                      </div>
                    )}
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
