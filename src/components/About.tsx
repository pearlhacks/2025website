import { SecondaryButton } from "./SecondaryButton";

export function About(){
    return (
      <div className="justify-center text-center py-10 p-5 space-y-8">
        <h2 className="text-white font-sans font-bold text-2xl">
          What is Pearl Hacks?
        </h2>
        <div className="text-left space-y-2 text-pink-200">
          <p>
            Pearl Hacks is a hackathon for women and gender non-conforming
            individuals in tech. We especially cater to first-time hackers who
            are looking for a supportive environment to explore technology.
          </p>
          <p>
            Participants work in teams to create incredible projects in 24 hours
            with the help of excellent mentors, workshops, and tech talks. All
            the while, they’ll get to meet some fantastic people, enjoy fun
            games, collect swag, and eat free food.
          </p>
        </div>
        <div className="space-x-2">
          <SecondaryButton>Learn more</SecondaryButton>
          <SecondaryButton>Show past projects</SecondaryButton>
        </div>
      </div>
    );
}