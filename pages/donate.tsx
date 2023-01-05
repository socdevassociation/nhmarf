import { Container, Group, Stack, Title, Text, Divider } from "@mantine/core";
import Link from "next/link";

export default function Donate() {
  return (
    <Container py={{ base: "xs", sm: "xl" }}>
      <Stack>
        <Link href="https://donorbox.org/nhmarf">Donate through DonorBox</Link>
        <Link href="https://paypal.me/nhmarf">Donate through PayPal</Link>
      </Stack>
    </Container>
  );
}
