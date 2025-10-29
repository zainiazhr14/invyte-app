"use client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";
import { useAuthStore } from "@/common/stores/auth";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import api from "@/common/hooks/api";
import * as z from "zod";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type SignInFormProps = React.ComponentProps<"div"> & {
  onLogin: (form: { email: string; password: string }) => Promise<void>; 
  onPageChange: () => void;
};

type SignUpFormProps = React.ComponentProps<"div"> & {
  onRegister: (form: { email: string; password: string }) => Promise<void>; 
  onPageChange: () => void;
};

function SignInForm({
  onLogin,
  onPageChange
}: SignInFormProps) {
  const signUpSchema = z.object({
    email: z.email("Input email address"),
    password: z.string().min(1, "Input your password"),
  })

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });
  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    onLogin(data)
  };
  
  return(
    <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="relative w-32 h-16">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              fill
              className="!w-32 object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-muted-foreground text-balance">
            Login to your Invyte account
          </p>
        </div>
        <Controller 
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="you@example.com"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        
        <Controller 
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Your Password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Field>
          <Button type="submit">Login</Button>
        </Field>
        
        <FieldDescription className="text-center" onClick={onPageChange}>
          Don&apos;t have an account? <a className="cursor-pointer" onClick={onPageChange}>Sign up</a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}


function SignUpForm({
  onRegister,
  onPageChange
}: SignUpFormProps) {
  const signUpSchema = z.object({
    email: z.email("Input email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    phone: z.string().min(10, "Invalid phone number").regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Phone number must contain only digits"),
  })

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      phone: ""
    }
  });

  const onSubmit = (data: z.infer<typeof signUpSchema>) => {
    onRegister(data)
  };
  
  return(
    <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="relative w-32 h-16">
            <Image
              src="/assets/img/logo.png"
              alt="logo"
              fill
              className="!w-32 object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <h1 className="text-2xl font-bold">Welcome to Invyte</h1>
          <p className="text-muted-foreground text-balance">
            Sign up to create your account
          </p>
        </div>
        <Controller 
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="you@example.com"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        <Controller 
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="+62 812 **** ****"
                autoComplete="off"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />

        <Controller 
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Your Password"
                autoComplete="off"
                type="password"
              />
              {fieldState.invalid && (
                <FieldError errors={[fieldState.error]} />
              )}
            </Field>
          )}
        />
        
        <Field>
          <Button type="submit">Register</Button>
        </Field>
        <FieldDescription className="text-center">
          You have an account? <a className="cursor-pointer" onClick={onPageChange}>Sign In</a>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}



export function AuthForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const slides = [{
    src: '/assets/img/wedding.jpg',
    alt: ''
  }, {
    src: '/assets/img/party.jpg',
    alt: ''
  }, {
    src: '/assets/img/converence.jpg',
    alt: ''
  }]

  const router = useRouter();

  const [page, setPage] = useState('sign-in');

  const setToken = useAuthStore(state => state.setToken)
  const setUser = useAuthStore(state => state.setUser)

  const onLogin = async (form: unknown) => {
    await api('/v1/auth/sign-in', {
      method: 'POST',
      data: form
    }).then(res => {
      const data = res.data
      setToken(data.accessToken)
      setUser(data.user)
      router.push('/')
    })
  }

  const onRegister = async (form: unknown) => {
    await api('/v1/auth/sign-up', {
      method: 'POST',
      data: form
    }).then(res => {
      const data = res.data
      setToken(data.accessToken)
      setUser(data.user)
      router.push('/')
    })
  }


  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          {
            page == 'sign-up' 
              ? 
              <SignUpForm onRegister={onLogin} onPageChange={() => setPage('sign-in')} /> 
              : 
              <SignInForm onLogin={onLogin} onPageChange={() => setPage('sign-up')} />
          }
          <div className="bg-muted relative hidden md:block">
            <Swiper
              modules={[Autoplay, Pagination]} 
              spaceBetween={0}
              slidesPerView={1}
              navigation
              pagination={{ clickable: false }}
              loop={true}
              freeMode={false}
              autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
              speed={800}
              className="h-full custom-swiper"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="relative h-full w-full">
                  <Image
                    src={slide.src}
                    alt={slide.alt || `Slide ${index + 1}`}
                    fill
                    className="object-cover dark:brightness-[0.2] dark:grayscale"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
