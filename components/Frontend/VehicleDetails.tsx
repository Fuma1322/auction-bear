import Link from "next/link";

export default function VehicleDetails() {
  return (
    <div className="max-w-4xl space-y-12 mt-12">

      {/* HIGHLIGHTS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Highlights</h2>

        <p>
          <strong>THIS...</strong> is a 2011 Mercedes-Benz SLS AMG Coupe,
          finished in Iridium Silver Metallic with a Classic Red interior.
        </p>

        <p>
          The attached Carfax history report shows that this is a two-owner car
          that has been registered in California and Texas since new.
        </p>

        <p>
          A build sheet is provided in the gallery, and a partial list of notable
          equipment reported by the selling dealer includes a limited-slip
          differential, heated seats, carbon fiber interior trim, and a Bang &
          Olufsen surround sound system. The selling dealer reports no notable
          modifications.
        </p>

        <p>
          Released for 2010, the Mercedes-Benz SLS stood out as the first
          production car developed in-house from the ground up by AMG. It
          featured a front-mid-mounted V8, an aluminum chassis, and, in coupe
          form, gullwing doors that echoed the 300 SL built in the 1960s.
          Production ended after the 2015 model year.
        </p>

        <p>
          Power comes from a 6.2-liter V8, rated at 563 horsepower and 479 lb-ft
          of torque. Output is sent to the rear wheels via a 7-speed automatic
          transmission.
        </p>
      </section>

      {/* EQUIPMENT */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Equipment</h2>

        <p>
          A build sheet is provided in the gallery, and a partial list of notable
          equipment reported by the selling dealer includes:
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Limited-slip differential</li>
          <li>19-inch front and 20-inch rear wheels</li>
          <li>Gullwing doors</li>
          <li>Heated seats</li>
          <li>Carbon fiber interior trim</li>
          <li>Bang & Olufsen surround sound system</li>
        </ul>
      </section>

      {/* KNOWN FLAWS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Known Flaws</h2>

        <p>
          The attached Carfax history report notes that this SLS sustained
          unspecified damage to its front end in January 2017. It adds that not
          all damage is caused by an accident. The selling dealer states that
          the front right has been repainted.
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Some chips on the front end</li>
          <li>Some scratches on the front wheels</li>
          <li>2016 and 2018 date codes on the tires</li>
          <li>Some wear on the upholstery and door panels</li>
        </ul>
      </section>

      {/* SERVICE HISTORY */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Recent Service History</h2>

        <p>
          The selling dealer states that work performed in preparation for the
          sale includes changing the engine oil and filter and replacing the
          door struts. Some service information appears in the attached Carfax
          history report.
        </p>
      </section>

      {/* OTHER ITEMS */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Other Items Included in Sale</h2>
        <ul className="list-disc pl-6">
          <li>1 key</li>
        </ul>
      </section>

      {/* OWNERSHIP */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Ownership History</h2>

        <p>
          The selling dealer reportedly purchased this SLS in December 2025 and
          has added minimal mileage to it since.
        </p>
      </section>

      {/* SELLER NOTES */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold">Seller Notes</h2>

        <p>
          The selling dealer states that the windows are tinted.
        </p>
      </section>

      {/* VIDEO */}
    <section className="space-y-6">
    <h2 className="text-xl font-bold">Video</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video w-full overflow-hidden rounded-md border">
            <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-md border">
            <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID_2"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            </div>
        </div>

        {/* Disclaimer */}
        <div className="rounded-md border p-4 text-sm text-muted-foreground leading-relaxed">
            <p>
            All Cars &amp; Bids auction listings are written based on information
            provided by the seller during the submission process, and have been
            reviewed by the seller for accuracy to the best of their abilities.
            However, it is ultimately the bidder&apos;s responsibility to perform all
            due diligence prior to placing a bid on any auction, including but not
            limited to factual content, flaws, legality of registering in any given
            state, emissions/safety compliance, and import eligibility. Please{" "}
            <Link
                href="#contact-seller"
                className="font-medium hover:text-primary"
            >
                contact seller
            </Link>{" "}
            with any specific questions or requests.
            </p>
        </div>
        </section>
    </div>
  );
}