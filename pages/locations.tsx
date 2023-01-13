import { Box, Container } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { createClient } from "next-sanity";

export default function Locations({ data }) {
  return (
    <Container py={{ base: "xs", sm: "xl" }}>
      {data.map((item) => (
        <Box key={item.id}>
          <PortableText value={item.content}></PortableText>
        </Box>
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
  const data = await client.fetch(`*[_type == "storeLocation"]`);

  return {
    props: {
      data,
    },
  };
}
