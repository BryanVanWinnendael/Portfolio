"use client"

import Copy from "@/components/copy"

export default function Home() {
  return (
    <div className="bg-white text-black font-sans px-4">
      {/* Content Grid */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl">
          {/* Bio Section */}
          <div className="lg:col-span-3">
            <Copy delay={0.5}>
              <h2 className="text-sm font-medium mb-4 tracking-wide text-muted">
                BIO
              </h2>
            </Copy>
            <Copy>
              <p className="text-sm leading-relaxed">
                Bryan Van Winnendael, Software developer based in Winksele,
                Belgium.
              </p>
            </Copy>
          </div>

          {/* Selected Works Section */}
          <div className="lg:col-span-6">
            <Copy delay={0.5}>
              <h2 className="text-sm font-medium mb-4 tracking-wide text-muted">
                SELECTED WORKS
              </h2>
            </Copy>
            <div className="text-sm leading-relaxed space-y-1">
              <Copy>
                <p>
                  (01) <span className="font-bold">Netweb</span>, web
                  application for Imec to manage network devices.
                </p>
                <p>
                  (02) TESLA an all-electric travel trailer bringing an
                  iPhone-like experience to RVing.
                </p>
                <p>(03) TELLURIC and sound design agency based in France.</p>
              </Copy>
            </div>
          </div>

          {/* Awards Section */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <h3 className="font-medium mb-4 tracking-wide text-muted">
                  AWWWARDS
                </h3>
                <div className="space-y-2">
                  <div>SOTD, DEV</div>
                  <div>SOTD, DEV</div>
                  <div>SOTD, DEV</div>
                  <div>SOTD, DEV</div>
                  <div>-</div>
                  <div>-</div>
                  <div>-</div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4 tracking-wide text-gray-500">
                  CSSDA
                </h3>
                <div className="space-y-2">
                  <div>-</div>
                  <div>-</div>
                  <div>WOTD</div>
                  <div>WOTD</div>
                  <div>WOTD</div>
                  <div>WOTD</div>
                  <div>WOTD</div>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-4 tracking-wide text-gray-500">
                  FWA
                </h3>
                <div className="space-y-2">
                  <div>-</div>
                  <div>FOTD</div>
                  <div>FOTD</div>
                  <div>FOTD</div>
                  <div>FOTD</div>
                  <div>-</div>
                  <div>FOTD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
