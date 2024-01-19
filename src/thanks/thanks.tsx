import Link from "next/link";

const ThanksPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center
    min-h-screen gap-4"
    >
      <h3 className="text-center">Thanks for your order</h3>
      <Link href="/" className="text-center">
        Go back
      </Link>
    </div>
  );
};

export default ThanksPage;
