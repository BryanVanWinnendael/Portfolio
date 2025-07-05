import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = (id = "banner") => {
  const banner = document.getElementById(id)

  if (banner) {
    const tl = gsap.timeline()

    tl.set(banner, {
      yPercent: 0,
    }).to(banner, {
      yPercent: 100,
      stagger: 0.2,
    })
  }
}

export const animatePageOut = (
  href: string,
  router: AppRouterInstance,
  id = "banner"
) => {
  const banner = document.getElementById(id)

  if (banner) {
    const tl = gsap.timeline()

    tl.set(banner, {
      yPercent: -100,
    }).to(banner, {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href)
      },
    })
  }
}
