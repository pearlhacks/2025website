import { HeartIcon } from "@heroicons/react/24/outline";
import { FooterContent } from "./FooterContent";
import { SocialMediaBar } from "./SocialMediaBar";

export function Footer() {
  return (
    <div className="w-full bg-cover bg-bottom items-center bg-no-repeat px-5 pt-96 lg:pt-30 pb-5 md:pb-10 bg-[url('/images/PH25_Footer.svg')]">
      <div className="flex flex-col space-y-2 md:space-y-4 divide-pink-accent divide-y">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-left md:justify-center items-center gap-2 md:gap-4">
          <FooterContent title="Keep up with us">
            Join our mailing list!
          </FooterContent>
          <FooterContent title="Administration">
            Pearl Hacks abides by the MLH Code of Conduct. For questions or
            feedback, contact us at questions@pearlhacks.com.
          </FooterContent>
          <FooterContent title="Inclusivity Statement">
            Pearl Hacks is an event designed to uplift and center women and
            gender non-conforming individuals in tech. We expect all of our
            mentors, volunteers, participants, directors, sponsors, judges, and
            visitors to be respectful of our participants’ gender identities and
            expressions.
          </FooterContent>
        </div>
        <div className="flex  py-2 md:py-5 text-pink-accent w-full flex-col justify-start md:flex-row md:justify-between items-center">
          <span className="flex flex-row items-center space-x-1">
            <p>Made with</p> <HeartIcon className="w-4 h-4" />{" "}
            <p>by Pearl Hacks</p>
          </span>
          <SocialMediaBar />
        </div>
      </div>
    </div>
  );
}
