import { Container, Stack, Title, Text, Divider } from "@mantine/core";
import { groq } from "next-sanity";
import client from "../../lib/sanity/client";
import Link from "next/link";

import dayjs from "dayjs";

export default function Donate({ data }) {
  return (
    <Container py={{ base: "xs", sm: "xl" }}>
      <Title pb="xl">Blog</Title>

      <Stack>
        {data?.map((item) => (
          <Stack key={item.id}>
            <Link key={item.id} href={`/blog/posts/${item.slug}`}>
              <Text weight="bold" size="lg">
                {item.title}
              </Text>
            </Link>

            <Text>{item.publishedAtDate}</Text>
            <Divider />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(groq`*[_type == "blogPost"]{
    title,
    'slug': slug.current,
    publishedAt
  }`);

  data.forEach((item) => {
    item.publishedAtDate = dayjs(item.publishedAt).format("MMMM D, YYYY");
  });

  return {
    props: {
      data,
    },
  };
}
