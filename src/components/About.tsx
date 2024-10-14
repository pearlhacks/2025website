import { SecondaryButton } from "./SecondaryButton";

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
    </div>
  );
}
