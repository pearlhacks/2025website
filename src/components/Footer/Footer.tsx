import { HeartIcon } from "@heroicons/react/24/outline";
import { FooterContent } from "./FooterContent";
import { SocialMediaBar } from "./SocialMediaBar";
import { Link } from "../Link";
import { link_mailinglist } from "@/utils/Urls";

export function Footer() {
  return (
    <div className="w-full bg-cover bg-bottom items-center bg-no-repeat px-5 pt-96 pb-5 md:pb-10 bg-[url('/images/PH25_Footer.svg')]">
      <div className="flex flex-col space-y-5 md:space-y-4 divide-pink-accent divide-y">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-left md:justify-center items-start gap-2 md:gap-4">
          <span className="hidden sm:block">
            <FooterContent title="Keep up with us">
              Join {" "}
              <Link href={link_mailinglist}>
                our mailing list
              </Link>
              !
            </FooterContent>
          </span>
          <FooterContent title="Administration">
            Pearl Hacks abides by the MLH Code of Conduct. For questions or
            feedback, contact us at{" "}
            <Link href="mailto:questions@pearlhacks.com">
              questions@pearlhacks.com
            </Link>
            .
          </FooterContent>
          <FooterContent title="Inclusivity Statement">
            Pearl Hacks is an event designed to uplift women and gender
            non-conforming students in tech. We expect all mentors, volunteers,
            participants, directors, sponsors, judges, and visitors to be
            respectful of our participants’ identities and expressions.
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
