import { Session } from "next-auth";
import { getSession, GetSessionParams } from "next-auth/react";
import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
