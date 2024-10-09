import { HomePage } from "./home/detial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycle Surgeon",
  description:
    "Dealing in selling and buying in all bicycle parts as well as repairing them",
};

export default function Home() {
  return (
    <div>
      <main>
        <HomePage />
      </main>
    </div>
  );
}
