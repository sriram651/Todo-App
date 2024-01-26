"use client";

import Head from 'next/head';
import Logo from '@/components/Logo/Logo';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

export default function Login() {
    return (
        <>
            <Head>
                <title>Todo | Login</title>
            </Head>
            <div className="login-page-container">
                <section className="login-page">
                    <div className="login-content">
                        <Logo />
                        <LoginForm />
                    </div>
                </section>
            </div>
        </>
    )
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm({
        resolver: zodResolver(schema)
    });

    async function handleLogin(data) {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            throw new Error();
        } catch (err) {
            setError("root", {
                message: "Invalid Login Credentials!",
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} className="login-form">
            {errors.root ? <div className="form-error">{errors.root.message}</div> : null}
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} />
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Login"}</button>
        </form>
    )
}

function EmailInput({ register, errors }) {
    return (
        <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
                {...register("email")}
                placeholder='example@mail.com'
                className={`${errors.email ? "error" : ""}`}
            />
            {errors.email ? <div className="input-error-message">{errors.email.message}</div> : null}
        </div>
    )
}

function PasswordInput({ register, errors }) {
    return (
        <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
                {...register("password")}
                type="password"
                placeholder='Enter your password...'
                className={`${errors.password ? "error" : ""}`}
            />
            {errors.password ? <div className="input-error-message">{errors.password.message}</div> : null}
        </div>
    )
}