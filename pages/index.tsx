import {
  AspectRatio,
  Container,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";

export default function Home() {
  return (
    <div>
      <Container py={{ base: "xs", sm: "xl" }} px={{ base: 0 }}>
        <Title mb={20}>About Us</Title>

        <Stack>
          <Text size="lg" lh={{ base: 1.5, sm: "xl" }}>
            The NH Mutual Aid Relief Fund is a grassroots effort of
            working-class people who believe that direct action and solidarity
            are the best ways to meet the material and social needs of our
            community.
          </Text>
          <Text size="lg" lh={{ base: 1.5, sm: "xl" }}>
            We are a volunteer-run, non-profit organization. We are not
            affiliated with any political party, union, or other organization.
          </Text>
          <Text size="lg" lh={{ base: 1.5, sm: "xl" }}>
            100% of proceeds are used to purchase snacks, first aid supplies,
            hygiene products, and more.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}
