import { addressLine, site } from "@/lib/site";

const query = encodeURIComponent(addressLine);

export function Location() {
  return (
    <section className="wrap pb-20" data-reveal>
      <div className="card grid overflow-hidden p-3 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-[1.25rem] bg-tint">
          <iframe
            title={`Map showing Hashtrik headquarters at ${addressLine}`}
            src={`https://www.google.com/maps?q=${query}&z=13&output=embed`}
            className="map-frame block h-80 w-full border-0 lg:h-full lg:min-h-[26rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col p-5 lg:p-8">
          <h2 className="type-section">Headquarters</h2>
          <address className="mt-5 text-lg not-italic">
            {site.name}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
            <br />
            United States
          </address>
          <dl className="mt-6 space-y-4 border-t border-line pt-6">
            <div>
              <dt className="text-sm text-muted">Working hours</dt>
              <dd className="mt-0.5 font-medium">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Email</dt>
              <dd className="mt-0.5 font-medium">
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-6 text-muted">Visits are by appointment, so write to us first.</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${query}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button mt-auto self-start max-lg:mt-6"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
