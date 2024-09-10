import HighLightedText from "@/components/highlighted-text";
import Image from "next/image";
import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  return (
    <>
      <header className="mt-28 text-center text-orange-100">
        <h1 className="text-5xl font-bold">
          One Shared Passion: <HighLightedText>Food</HighLightedText>
        </h1>
        <p className="mt-8 text-2xl">
          Join our community and share your favorite recipes!
        </p>
      </header>
      <main className="mt-24 flex flex-col items-center gap-12 text-center text-orange-100">
        <h1 className="text-4xl font-bold">Community Perks</h1>

        <ul className="flex flex-col gap-12 text-xl">
          <li>
            <Image
              src={mealIcon}
              alt="A delicious meal"
              className="mx-auto w-48"
            />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="A crowd of people, cooking"
              className="mx-auto w-48"
            />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
              className="mx-auto w-48"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
