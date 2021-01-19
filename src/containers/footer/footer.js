import React from "react";
import { Footer } from "../../components";

export const FooterContainer = () => {
  return (
    <div>
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>

        <Footer.Break />

        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQs</Footer.Link>
            <Footer.Link href="#">Investor Realtions</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Informations</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />

        <Footer.Text color="wheat" textSize="20px">
          Netflix India
        </Footer.Text>
      </Footer>
    </div>
  );
};
