"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Copy from "@/components/copy"
import Image from "next/image"
import ShoppingListImage1 from "@/assets/images/shopping-list/img2.png"
import ShoppingListImage2 from "@/assets/images/shopping-list/diagram.png"
import AnimatedMedia from "@/components/animatedMedia"
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)

const UniMail = () => {
    return (
        <>
            <div className="sm:pt-16 pt-10 pb-12">
                <Copy delay={0.5}>
                    <h1 className="font-semibold uppercase leading-none text-center text-[14vw] md:text-[12vw]">
                        SHOPPING LIST
                    </h1>
                </Copy>

                <div className="flex justify-center w-full -mt-6 md:-mt-16 relative z-10 overflow-hidden">
                    <AnimatedMedia delay={0.7} className="w-2/3 h-auto block">
                        <Image
                            placeholder="blur"
                            loading="lazy"
                            src={ShoppingListImage1}
                            alt="harbor image 1"
                        />
                    </AnimatedMedia>
                </div>
                <div className="flex justify-center py-8">
                    <div className="md:w-1/3 w-2/3">
                        <Copy>
                            <p className="font-normal text-xs leading-normal">
                                A mobile app to manage your shopping list and recipes.

                                The app is intended for private use by a family or small group of users.
                                It does not implement authentication and therefore is not designed for public distribution on the App Store. It is only tested and recommended for iOS.
                            </p>
                        </Copy>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="md:w-1/3 w-2/3">
                        <Copy delay={0.5}>
                            <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                                Features
                            </h2>
                        </Copy>
                        <Copy>
                            <p className="font-normal text-xs leading-normal">
                                Real-time shared shopping list and recipe management with a custom-built prediction model for automatic item categorization.
                                Quickly search and add products, manage recipes with favorites and filters, and automate weekly items.
                                Includes live notifications, customizable UI, and admin tools for logs and improving categorization accuracy.
                            </p>
                        </Copy>
                    </div>
                    <div className="md:w-1/3 w-2/3">
                        <Copy delay={0.5}>
                            <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                                Built with
                            </h2>
                        </Copy>
                        <Copy>
                            <p className="font-normal text-xs leading-normal">
                                The mobile app is built with Expo and React Native, using Zustand for state management and Firebase for real-time data synchronization.
                                The backend follows a microservice architecture developed in Go, with bbolt for lightweight data storage and Docker for containerization and deployment.
                            </p>
                        </Copy>
                    </div>
                    <div className="md:w-1/3 w-2/3">
                        <Copy delay={0.5}>
                            <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                                Architecture
                            </h2>
                        </Copy>
                        <Copy>
                            <p className="font-normal text-xs leading-normal">
                                The application follows a microservice-based architecture.
                                The mobile app communicates with Nginx, which acts as a reverse proxy in front of the API Gateway.
                                The API Gateway then routes requests to the appropriate backend microservices.
                                Each microservice manages its own responsibilities and storage.
                            </p>
                        </Copy>
                        <AnimatedMedia animationOnScroll={true}>
                            <Image
                                placeholder="blur"
                                loading="lazy"
                                src={ShoppingListImage2}
                                alt="Diagram"
                            />
                        </AnimatedMedia>
                    </div>
                    <div className="md:w-1/3 w-2/3">
                        <Copy delay={0.5}>
                            <h2 className="text-xs font-medium mb-2 tracking-wide text-muted">
                                CI/CD
                            </h2>
                        </Copy>
                        <Copy>
                            <p className="font-normal text-xs leading-normal">
                                Automated CI/CD pipelines using GitHub Actions handle building and deployment.
                                The mobile app is built with EAS and distributed via TestFlight, with a scheduled
                                workflow to keep builds active. Backend microservices are automatically updated
                                by pulling the latest code and rebuilding Docker containers on deployment.
                            </p>
                        </Copy>
                    </div>
                    <div className="flex gap-4">
                        <Copy>
                            <Link
                                target="_blank"
                                className="underline"
                                href="https://github.com/BryanVanWinnendael/Shopping-List"
                            >
                                Source {">"}
                                {">"}
                            </Link>
                        </Copy>
                    </div>
                </div>
            </div>
            <div className="h-px bg-black w-full z-30 relative" />
        </>
    )
}

export default UniMail
