"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import Link from "next/link"
import AnimatedMedia from "@/components/animatedMedia"

import ShoppingListImage1 from "@/assets/images/shopping-list/img2.png"
import ShoppingListImage2 from "@/assets/images/shopping-list/diagram.png"

gsap.registerPlugin(ScrollTrigger)

const features = [
  "Real time shared shopping lists",
  "Recipe management",
  "Product categorization",
  "Product search",
  "Automated weekly products",
  "Live notifications",
  "Customizable interface",
  "Admin tools and logging",
]

const ShoppingList = () => {
  return (
    <>
      <div className="pb-12 pt-10 sm:pt-16">
        <Copy delay={0.5}>
          <h1 className="text-center text-[14vw] font-semibold uppercase leading-none md:text-[12vw]">
            SHOPPING LIST
          </h1>
        </Copy>

        <div className="relative z-10 -mt-6 flex w-full justify-center overflow-hidden md:-mt-16">
          <AnimatedMedia delay={0.7} className="block h-auto w-2/3">
            <Image
              placeholder="blur"
              loading="lazy"
              src={ShoppingListImage1}
              alt="Shopping List application"
            />
          </AnimatedMedia>
        </div>

        <div className="flex justify-center px-4 py-10 md:py-12">
          <div className="w-full max-w-xl">
            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Shopping List is a mobile application for managing shared
                shopping lists and recipes. It is designed for private use by a
                family or small group of users.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The application is currently focused on iOS and does not
                implement authentication, making it unsuitable for public App
                Store distribution.
              </p>
            </Copy>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 py-6 md:py-8">
          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Features
              </h2>
            </Copy>

            <Copy>
              <div className="grid grid-cols-1 gap-y-1 text-sm leading-relaxed text-black/80 sm:grid-cols-2 md:text-base">
                {features.map((feature) => (
                  <p key={feature}>— {feature}</p>
                ))}
              </div>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Built with
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                The mobile application is built with Expo and React Native, with
                Zustand handling client side state management and Firebase
                Realtime Database providing real time synchronization.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The backend is built with Go and follows a microservice
                architecture. Each service uses bbolt for lightweight, service
                specific persistent storage, while Docker is used for
                containerization and deployment.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Architecture
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                The application follows a microservice based architecture. The
                mobile app communicates with Nginx, which acts as the public
                entry point and reverse proxy for the backend.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                Nginx handles HTTPS termination, domain routing, rate limiting,
                and forwards requests to the API Gateway inside the internal
                Docker network.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The API Gateway routes requests to the appropriate microservice.
                Each service is responsible for its own domain logic and
                persistent storage.
              </p>
            </Copy>

            <div className="mt-6">
              <AnimatedMedia animationOnScroll={true}>
                <Image
                  placeholder="blur"
                  loading="lazy"
                  src={ShoppingListImage2}
                  alt="Shopping List system architecture diagram"
                />
              </AnimatedMedia>
            </div>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Data storage
              </h2>
            </Copy>

            <Copy>
              <div className="text-sm leading-relaxed text-black/80 md:text-base">
                <p>
                  <span className="font-medium text-black">
                    Firebase Realtime Database
                  </span>{" "}
                  stores shopping list products and keeps them synchronized in
                  real time across users and devices.
                </p>

                <p>
                  <span className="font-medium text-black">bbolt</span> is used
                  by individual microservices for persistent service specific
                  data such as recipes, notifications, and scheduled products.
                </p>
              </div>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Shared contracts
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Shared contracts and models keep the communication between the
                mobile application and backend services consistent. Contracts
                define request and response structures, while models provide
                shared domain entities across the microservices.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                TypeScript types for the mobile application are generated
                automatically from these shared definitions.
              </p>

              <div className="mt-4 inline-block bg-black px-3 py-2 font-mono text-xs text-white">
                yarn generate
              </div>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                CI/CD
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                GitHub Actions is used to automate the build, testing, and
                deployment workflows across the project.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Mobile app pipeline
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                The mobile application is built using EAS Build and distributed
                through TestFlight. GitHub Actions automates the build and
                publishing process.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Cron pipeline
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                A scheduled GitHub Actions workflow runs every two months to
                keep the TestFlight build active. This is necessary because the
                TestFlight provisioning profile has a limited validity period.
              </p>
            </Copy>
          </div>

          <div className="w-full max-w-xl px-4">
            <Copy delay={0.5}>
              <h2 className="mb-3 text-[10px] font-medium uppercase tracking-widest text-muted">
                Microservices pipeline
              </h2>
            </Copy>

            <Copy>
              <p className="text-sm leading-relaxed text-black/80 md:text-base">
                Each microservice has an automated deployment pipeline. Changes
                are tested first, after which a new Docker image is created and
                published to GitHub Container Registry.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/80 md:text-base">
                The server then pulls the latest image from GHCR and redeploys
                the corresponding microservice. This keeps deployments
                reproducible while allowing each service to be updated
                independently.
              </p>
            </Copy>
          </div>

          <div className="flex gap-5 pt-2">
            <Copy>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline underline-offset-4 transition-opacity hover:opacity-60"
                href="https://github.com/BryanVanWinnendael/Shopping-List"
              >
                Source {">>"}
              </Link>
            </Copy>
          </div>
        </div>
      </div>

      <div className="relative z-30 h-px w-full bg-black" />
    </>
  )
}

export default ShoppingList
