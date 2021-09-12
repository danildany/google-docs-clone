import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useState } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const [showModal, setShowModal] = useState(false);
  if (!session) return <Login />;

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
      <ModalBody></ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
  return (
    <div>
      <Head>
        <title>Google Docs Clones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="py-6 flex items-center justify-between">
            <h2 className="text-gray-700">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2  font-semibold">Blank</p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Document</h2>
            <p className="mr-12">Date creted</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
