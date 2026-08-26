import { useDialKit } from "dialkit"

export function useScrollbarSettings() {
  const settings = useDialKit("Scrollbar", {
    arrow: {
      arrowLength: [22, 8, 80, 1],
      wingSpread: [8, 1, 24, 0.5],
      bobAmplitude: [3, 0, 12, 0.5],
      bobPeriod: [2, 0.25, 6, 0.05],
      hitPadding: [10, 0, 40, 1],
    },

    line: {
      length: [180, 100, 900, 10],
      dotSpacing: [10, 3, 40, 1],
    },

    tracking: {
      maxExtension: [50, 0, 200, 1],
      extensionFalloff: [0.6, 0, 0.95, 0.01],
      colorFalloff: [0.3, 0, 0.95, 0.01],
      smoothingTau: [0.05, 0.01, 0.5, 0.01],
      hitPadding: [10, 0, 40, 1],
    },

    timing: {
      compressed: {
        type: "easing",
        duration: 0.15,
        ease: [0.33, 1, 0.68, 1],
      },

      extended: {
        type: "easing",
        duration: 0.35,
        ease: [0.65, 0, 0.35, 1],
      },

      split: {
        type: "easing",
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1],
      },

      tracking: {
        type: "easing",
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },

    appearance: {
      dotColor: "#a6a6a6",
      hoverColor: "#0222f3",
      strokeWidth: [4, 1, 12, 0.5],
    },
  })

  const dotCount = Math.max(
    1,
    Math.round(settings.line.length / settings.line.dotSpacing),
  )

  return {
    settings,
    dotCount,
  }
}
