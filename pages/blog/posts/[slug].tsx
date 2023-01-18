import { Container, Title, Text, Stack, Divider } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import client from "../../../lib/sanity/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import dayjs from "dayjs";

export default function BlogPost({ post }) {
  const router = useRouter();
  const slug = post?.slug;

  return (
    <>
      <Head>
        <title>NHMARF - {post?.title ? post.title : "Post not found"}</title>
      </Head>
      <Container py={{ base: "xs", sm: "xl" }}>
        {router.isFallback && <div>Loading...</div>}
        {post && (
          <>
            <Stack py="xl">
              <Title>{post.title}</Title>
              <Text>{dayjs(post.publishedAt).format("MMM D, YYYY")}</Text>
              <Divider />
            </Stack>

            <PortableText value={post.content}></PortableText>
          </>
        )}
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({
      params: { slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug = "" } = params;

  const post = await client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]`,
    {
      slug,
    }
  );

  console.log(post);

  return {
    props: {
      post,
    },
  };
}
