import { MapPin, Phone, Building2, Mail} from "lucide-react";
import { ActionIcon, Container, Group, Text, Title, Stack, SimpleGrid } from "@mantine/core";

const data = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", link: "/" },
            { label: "About Us", link: "/about" },
            { label: "Products", link: "/products" },
            { label: "Claims", link: "/claims" },
            { label: "Gallery", link: "/gallery" },
            { label: "Events", link: "/events" },
            { label: "Vacancies", link: "/vacancies" },
            { label: "Contact Us", link: "/contacts" },
        ],
    },
    {
        title: "Contact Us",
        links: [
            { icon: MapPin, label: "Head Office @ Africa Avenue (Bole Road)" },
            { icon: Phone, label: "251 0116637716 / 17 / 18 / 19" },
            { icon: Building2, label: "12941, Addis Ababa, Ethiopia" },
            { icon: Mail, label: "md@africainsurancesc.com" },
        ],
    },
];

function Footer() {
    return (
        <footer style={{ backgroundColor: "#343989", color: "white" }}>
            <Container size="lg" px="md" py="xl">
                <Group justify="space-between" align="flex-start" wrap="wrap" >
                    {/* Left Section */}
                    <Stack gap="xs" w={{ base: "100%", md: "33%" }} pl={{ base: 0, md: "xl" }}>
                        <Title order={4} fw={700} size="xl">
                            African Insurance Company
                        </Title>
                        <img
                            src="src/assets/aic.png"
                            alt="African Insurance Company"
                            style={{ width: "50%", height: "auto" }}
                        />
                        <Text size="xl">Committed to Excellence and Quality service</Text>
                    </Stack>

                    {/* Center Section */}
                    <Stack gap="" align="flex-start" w={{ base: "100%", md: "20%" }}>
                        <Title order={5} size="xl">Quick Links</Title>
                        <SimpleGrid cols={2} spacing={5}>
                            {data[0].links.map((item) => (
                                <Text
                                    gap="lg"
                                    size="xl"
                                    component="a"
                                    key={item.label}
                                    href={item.link}
                                    style={{ color: "white" }}
                                >
                                    {item.label}
                                </Text>
                            ))}
                        </SimpleGrid>
                    </Stack>

                    {/* Right Section */}
                    <Stack gap="xs" align="flex-start" w={{ base: "100%", md: "33%" }}>
                        <Title order={5} size="xl">Contact Address</Title>
                        {data[1].links.map(({ icon: Icon, label }) => (
                            <Group key={label} wrap="nowrap" align="center">
                                <Icon size={30} />
                                <Text size="xl">{label}</Text>
                            </Group>
                        ))}
                    </Stack>
                </Group>

                {/* Bottom Section */}
                <Group justify="space-between" mt="xl" pt="md" style={{ borderTop: "1px solid #aaa" }}>
                    <Text size="xl" c="gray.4">
                        © {new Date().getFullYear()} African Insurance Company. All rights reserved.
                    </Text>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;

