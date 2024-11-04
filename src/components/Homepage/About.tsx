import { SecondaryButton } from "../Buttons/SecondaryButton";
import { TrackCard } from "./TrackCard";
import track1Icon from "../../../public/images/tracks/track_1.svg";
import track2Icon from "../../../public/images/tracks/track_2.svg";
export function About() {
  return (
    <div className="bg-pink-accent justify-center items-center text-center pt-20 sm:pt-40 px-5 space-y-8">
      <h2 className="text-white font-sans font-bold text-2xl">
        What is Pearl Hacks?
      </h2>
      <div className="text-center space-y-2 text-pink-200">
        <p>
          Pearl Hacks is a hackathon for women and gender non-conforming
          individuals in tech. We especially cater to first-time hackers who are
          looking for a supportive environment to explore technology.
        </p>
        <p>
          Participants work in teams to create incredible projects in 24 hours
          with the help of excellent mentors, workshops, and tech talks. All the
          while, they’ll get to meet some fantastic people, enjoy fun games,
          collect swag, and eat free food.
        </p>
      </div>
      <div className="space-x-2">
        <SecondaryButton href="/about">Learn more</SecondaryButton>
        <SecondaryButton href="https://pearlhacks2024.devpost.com/">
          Show past projects
        </SecondaryButton>
        {/* <div className="relative inset-0 flex">
          <img
            src="/images/landing/SecondaryGraphic_PH2025.svg"
            className="m-auto w-3/5 lg:2/5"
          />
        </div> */}
      </div>
      <div className="pt-8 space-y-8">
        <div className="justify-center items-center space-x-2 flex flex-row">
          <h2 className="text-white font-sans font-bold text-2xl">Tracks</h2>
          <div className="p-1 text-center text-xs rounded-md bg-pink-transition text-white">
            NEW!
          </div>
        </div>
        <div className="w-full flex flex-col justify-center px-8 gap-5 md:flex-row">
          <TrackCard
            title={"Beginner"}
            description={
              "Just getting started in tech? The beginner track is for students who have never touched tech or are new to hackathons/building technical projects."
            }
            icon={track1Icon}
          />
          <TrackCard
            title={"Regular"}
            description={
              "For those of you who’ve attended in the past, this is the regular Pearl Hacks hackathon experience, repackaged! Hack together in a team or solo, and submit your project for a chance to win amazing prizes!"
            }
            icon={track2Icon}
          />
        </div>
      </div>
    </div>
  );
}
