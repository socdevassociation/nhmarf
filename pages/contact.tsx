import { Container, Group, Title } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <Head>
        <title>NHMARF - Contact</title>
      </Head>
      <Container py={{ base: "xs", sm: "xl" }}>
        <Title pb="xl">Contact Us</Title>
        <Group>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
            <polyline points="3 7 12 13 21 7"></polyline>
          </svg>
          <Link href="mailto:nhmarf@protonmail.com">nhmarf@protonmail.com</Link>
        </Group>
      </Container>
    </div>
  );
}
