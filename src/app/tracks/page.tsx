import { GenericLayout } from "@/components/GenericLayout";

export default async function Page() {
  return (
    <GenericLayout title="Tracks">
      <div className="space-y-5 text-pink-transition">
        <div>
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            Beginner Track
          </h2>
          <p>
            Just getting started in tech? The beginner track is for students who
            have never touched tech or are new to hackathons/building technical
            projects. In this track, you will complete a fun mini project under
            the guidance of a teacher through a workshop, either in a group or
            solo. Mentors will be available to support you through everything
            needed to make your project happen and to answer any questions you
            might have! At the end, you can enter your submission for the
            beginner track to win a fun little prize~
          </p>
        </div>
        <div>
          <h2 className="text-green font-sans font-bold text-2xl py-5">
            General Track
          </h2>
          <p>
            Want to create your own project? The general track is for hackers of
            all experience levels, backgrounds, and skills. For those of you
            who’ve attended in the past, this is the regular Pearl Hacks
            hackathon experience, repackaged! Hack together in a team or solo,
            and submit your project for a chance to win amazing prizes!
          </p>
        </div>
      </div>
    </GenericLayout>
  );
}
