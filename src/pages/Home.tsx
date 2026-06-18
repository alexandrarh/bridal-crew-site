export default function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="min-h-screen bg-blush flex flex-col items-center justify-center text-center px-6 -mt-14">
        <p className="font-script text-5xl text-charcoal mb-2">The easiest</p>
        <h1 className="font-heading text-6xl md:text-8xl font-light tracking-widest uppercase text-charcoal">
          "I Do" Guide Ever
        </h1>
        <div className="w-64 border-t border-charcoal my-6" />
        <p className="font-sans text-sm tracking-[0.3em] text-charcoal">06.05.2027</p>
      </section>

      {/* Thank You */}
      <section className="bg-cream py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-script text-3xl text-rose">First off...</p>
          <h2 className="font-heading text-6xl md:text-7xl font-light text-charcoal leading-tight">
            Thank You!!!
          </h2>
          <div className="w-80 border-t border-charcoal mt-4 mb-8 mx-auto" />
          <div className="font-heading text-warm-gray text-md leading-relaxed space-y-4 max-w-xl mx-auto">
            <p>
              I want to start this off by saying thank you all so much for being a part of my bridal crew &lt;3!! 
              Everyone here matters so much to me, and I want to make this day special by including you all in it. 
              This guide will (hopefully) help everyone have a good understanding of bridal crew things and whatnot!
            </p>
            <p>
              Regardless, just ask me (of course) if you have any questions and such. Yayy so exciting!!
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}