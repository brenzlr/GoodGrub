import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  Paragraph,
} from "./FooterStyle";

export function Footer() {
  return (
    <Box>
      {/* */}
      <Container>
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Column style={{ textAlign: 'center' }}>
            <Heading>Location</Heading>
            <Paragraph>21 275 Rue Lakeshore Road, Sainte-Anne-de-Bellevue, QC H9X 3L9</Paragraph>
          </Column>
          <Column style={{ textAlign: 'center' }}>
            <br />
            <br />
            <br />
            <Heading></Heading>
            <h1
              style={{
                color: "green",
                textAlign: "center",
                marginTop: "-50px",
              }}
            >
              © 2022 GoodGrub.inc
            </h1>
          </Column>
          <Column style={{ textAlign: 'center' }}>
            <Heading>Contact Us</Heading>
            <Paragraph>goodgrub2022@gmail.com</Paragraph>
            <Paragraph>514-694-2069</Paragraph>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
