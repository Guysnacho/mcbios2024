import {
  Box,
  Button,
  ButtonGroup,
  Center,
  CenterProps,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { PiHouse } from "react-icons/pi";

type ImageCardProps = {
  src: string;
  title: string;
  blurb?: string;
  url?: string;
};

export default function ImageCard(props: ImageCardProps & CenterProps) {
  return (
    <Center {...props} py={12}>
      <Box
        role={"group"}
        p={6}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${props.src})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            mx="auto"
            height={[200, 230]}
            width={[242, 282]}
            objectFit={"cover"}
            src={props.src}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Heading
            textAlign="center"
            fontSize={"2xl"}
            fontFamily={"body"}
            fontWeight={500}
          >
            {props.title}
          </Heading>
          {props.blurb && (
            <VStack
              my={4}
              w="80%"
              mx="auto"
              display={["none", null, "unset"]}
              className="space-y-3"
            >
              {props.blurb.split("||").map((blurb, idx) => (
                <Text key={idx}>{blurb}</Text>
              ))}
            </VStack>
          )}
          {props.url && (
            <ButtonGroup spacing="2" mx="auto">
              <Button
                as="a"
                href={props.url}
                target="_blank"
                color={"white"}
                rounded={"full"}
                alignItems="center"
                leftIcon={<PiHouse />}
                bg={"blue.600"}
              >
                Book Today
              </Button>
            </ButtonGroup>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
