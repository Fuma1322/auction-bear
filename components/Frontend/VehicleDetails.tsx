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

    </div>
  );
}