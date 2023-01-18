import {
  Container,
  Group,
  Stack,
  Title,
  Text,
  Divider,
  Card,
  SimpleGrid,
  Space,
} from "@mantine/core";
import Link from "next/link";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Head from "next/head";

export default function Donate({ data }) {
  return (
    <Container py={{ base: "xs", sm: "xl" }}>
      <Head>
        <title>NHMARF - Donate</title>
      </Head>
      <Stack>
        <Title>Donate Online</Title>
        <Link href="https://donorbox.org/nhmarf">Donate through DonorBox</Link>
        <Link href="https://paypal.me/nhmarf">Donate through PayPal</Link>
        <Space />
        <Title> Drop Off Locations</Title>

        {data.map((item) => (
          <Stack key={item.id} pb="xl">
            <Title order={2}>{item.name}</Title>
            <Divider />
            <SimpleGrid
              cols={2}
              breakpoints={[
                { maxWidth: "sm", cols: 2 },
                { maxWidth: "xs", cols: 1 },
              ]}
            >
              {item.dropOffLocations.map((location) => (
                <Card key={location.id} shadow="lg" p="xs">
                  <PortableText value={location.content}></PortableText>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>

          // <PortableText
          //   key={item.id}
          //   value={item.content}
          //   components={{
          //     block: {
          //       p: (props) => {
          //         return <Text m={0} p={0} {...props} bg="red" />;
          //       },
          //       h2: (props) => {
          //         return <Title order={3} {...props} />;
          //       },
          //     },
          //   }}
          // ></PortableText>
        ))}
      </Stack>
    </Container>
  );
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-04",
  useCdn: false,
});

export async function getStaticProps() {
  const data = await client.fetch(
    `*[_type == "region"]{..., "dropOffLocations": *[_type == "dropOffLocation" && region._ref == ^._id]}`
  );

  return {
    props: {
      data,
    },
  };
}
