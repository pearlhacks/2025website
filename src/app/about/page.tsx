import { GenericLayout } from "@/components/GenericLayout";
import { SecondaryButton } from "@/components/Buttons/SecondaryButton";

export default async function Page() {
  return (
    <GenericLayout title="About Us">
      <div className="space-y-4 text-brown">
        <div className="flex flex-wrap items-center">
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            Our Beginnings
          </h2>
          <div className="flex flex-col md:flex-row items-top lg:items-center md:space-x-4">
            <div className="space-y-4">
              <p>
                Pearl Hacks was first held in 2014 as one of the only
                beginner-friendly hackathons targeted towards women at the time.
                It was organized in response to the boom in college hackathons,
                where students got to spend a weekend bringing their
                technological ideas to life with the help of their peers and
                industry professionals.
              </p>
              <p>
                But while those hackathons were great at immersing students into
                tech, it was clear that the gender gap and the often
                intimidating environment at those events was stopping a lot of
                women of all skill levels from signing up. The first Pearl
                Hacks, organized by UNC alumni Maegan Clawges, brought in 250
                female high school and college students in the hopes of
                providing them with a great hackathon experience that
                sidestepped these issues.
              </p>
            </div>
            <img
              src="/images/about/About_1.jpg"
              className="mt-4 md:mt-0 md:w-1/3 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center text-start space-x-4">
          <div className="flex flex-col md:flex-row items-top md:space-x-4 lg:items-center">
            <img
              src="/images/about/About_2.jpg"
              className="mb-4 md:mb-0 md:w-1/3 rounded-md"
            />
            <div className="space-y-4">
              <p>
                By growing and learning from the last eight years of Pearl Hacks
                (which has nearly tripled in size), we now strive to be an open
                and inclusive environment for gender minorities to experience
                hackathons, and hopefully dive deeper into the world of
                technology after experiencing a weekend with us.
              </p>
              <p>
                First-timers are welcomed to join no matter their level of
                experience. All that awaits you is a weekend of meeting amazing
                people, learning about technology, and free swag and prizes. We
                hope you join us at this wonderful event!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <SecondaryButton href="https://maeganclawges.com/web/pearlhacks.html">
            Learn more
          </SecondaryButton>
        </div>
        <div className="flex flex-wrap items-center">
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            Inclusivity Statement
          </h2>
          <div className="space-y-4">
            <p>
              Pearl Hacks is an event designed to uplift and center women and
              gender non-conforming individuals in tech. We expect all of our
              mentors, volunteers, participants, directors, sponsors, judges,
              and visitors to be respectful of our participants’ gender
              identities and expressions.
            </p>
          </div>
        </div>
      </div>
    </GenericLayout>
  );
}
