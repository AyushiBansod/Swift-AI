"use client";

export default function Marquee() {
  const logos = [
    { name: "HubSpot", style: "font-bold tracking-tight" },
    { name: "webflow", style: "font-semibold italic" },
    { name: "slack", style: "font-bold" },
    { name: "mailchimp", style: "font-semibold" },
    { name: "Dropbox", style: "font-bold" },
    { name: "zoom", style: "font-bold tracking-wider" },
    { name: "Adobe", style: "font-semibold" },
  ];

  return (
    <div className="bg-black pb-16 pt-4 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-white/70 text-2xl md:text-3xl mb-12" style={{ fontFamily: 'var(--font-dosis), sans-serif' }}>
        Collaboration That Drives Innovation
      </h2>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-black to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-[150px]"
            >
              <span className={`text-2xl text-white/40 ${logo.style} whitespace-nowrap`}>
                {logo.name === "slack" && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.124 2.521a2.528 2.528 0 0 1 2.52-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.52V8.834zm-1.271 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.166 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.124a2.528 2.528 0 0 1 2.521 2.52A2.528 2.528 0 0 1 15.166 24a2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.271a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.312A2.528 2.528 0 0 1 24 15.166a2.528 2.528 0 0 1-2.522 2.521h-6.312z"/>
                    </svg>
                    slack
                  </span>
                )}
                {logo.name === "Dropbox" && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 2l6 4-6 4-6-4zm12 0l6 4-6 4-6-4zm-6 5.5l6-4 6 4-6 4-6-4zm-6 3.5l6 4 6-4v2l-6 4-6-4v-2z"/>
                    </svg>
                    Dropbox
                  </span>
                )}
                {logo.name === "Adobe" && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zm.893-11.788L24 22.624h-5.108l-2.434-5.475-2.599 5.475H8.897l6.806-14.225-.844-1.788zM0 22.624h7.434L2.438 8.396 0 22.624z"/>
                    </svg>
                    Adobe
                  </span>
                )}
                {logo.name === "mailchimp" && (
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.55 11.5c-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92 1.92-.86 1.92-1.92-.86-1.92-1.92-1.92zm-11.1 0c-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92 1.92-.86 1.92-1.92-.86-1.92-1.92-1.92zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                    mailchimp
                  </span>
                )}
                {logo.name === "HubSpot" && (
                  <span className="inline-flex items-center">
                    <span className="text-3xl mr-1">⬡</span>
                    HubSpot
                  </span>
                )}
                {logo.name === "zoom" && (
                  <span className="inline-flex items-center">
                    zoom
                  </span>
                )}
                {logo.name === "webflow" && (
                  <span className="inline-flex items-center">
                    webflow
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
