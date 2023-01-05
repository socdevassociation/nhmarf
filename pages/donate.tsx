import { Container, Group, Stack, Title, Text, Divider } from "@mantine/core";
import Link from "next/link";
import { createClient } from "next-sanity";
import { PortableText } from "@portabletext/react";

export default function Donate({ data }) {
  return (
    <Container py={{ base: "xs", sm: "xl" }}>
      <Stack>
        <Link href="https://donorbox.org/nhmarf">Donate through DonorBox</Link>
        <Link href="https://paypal.me/nhmarf">Donate through PayPal</Link>
      </Stack>

      {data.map((item) => (
        <PortableText
          key={item.id}
          value={item.content}
          components={{
            block: {
              p: (props) => {
                return <Text m={0} p={0} {...props} bg="red" />;
              },
              h2: (props) => {
                return <Title order={3} {...props} />;
              },
            },
          }}
        ></PortableText>
      ))}
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
  const data = await client.fetch(`*[_type == "dropoff"]`);

  return {
    props: {
      data,
    },
  };
}
