"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function Component() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("2024-12-31T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-600 to-blue-600">
      <header className="p-4">
        <h1 className="text-2xl font-bold text-white">Dukaan Pe</h1>
      </header>
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-4xl w-full space-y-8 text-center">
          <div className="flex justify-center items-center w-full ">
            <div className=" p-4 rounded-full bg-white">
              <Image
                src="https://utfs.io/f/jtq6Y2dxW3gV4cHYCm9kXSGNfDIeoORKUPqarAtZyL6EJpzH"
                alt="Dukaan Pe Logo"
                width={192}
                height={192}
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Your Shop, Your Way
          </h2>
          <p className="text-xl md:text-2xl text-purple-200">
            The ultimate mobile app for Shopify stores is coming soon!
          </p>
          <div className="relative mx-auto w-64 h-128 md:w-96 md:h-192">
            <div className="absolute inset-0 bg-black rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-3xl overflow-hidden">
              <img
                src="/placeholder.svg?height=512&width=256"
                alt="Dukaan Pe App Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 text-white">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="text-3xl md:text-5xl font-bold">{days}</span>
              <p>Days</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="text-3xl md:text-5xl font-bold">{hours}</span>
              <p>Hours</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="text-3xl md:text-5xl font-bold">{minutes}</span>
              <p>Minutes</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="text-3xl md:text-5xl font-bold">{seconds}</span>
              <p>Seconds</p>
            </div>
          </div>
          <form className="mt-8 space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md mx-auto bg-white"
              required
            />
            <Button
              type="submit"
              className="w-full max-w-md mx-auto bg-white text-purple-600 hover:bg-purple-100"
            >
              Notify Me
            </Button>
          </form>
        </div>
      </main>
      <footer className="p-4 flex justify-center space-x-4">
        <a href="#" className="text-white hover:text-purple-200">
          <Facebook className="w-6 h-6" />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="text-white hover:text-purple-200">
          <Twitter className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="#" className="text-white hover:text-purple-200">
          <Instagram className="w-6 h-6" />
          <span className="sr-only">Instagram</span>
        </a>
      </footer>
    </div>
  );
}
