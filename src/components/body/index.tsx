import React from "react";
import { Main, SmallCardsContainer } from "./styles";
import { Article } from "../bigcard";
import { SmallCard } from "../smallcard";

import Image1 from "../../assets/images/static1.png";
import Image2 from "../../assets/images/static2.png";
import Image3 from "../../assets/images/static3.png";

const Body = () => {
  return (
    <>
      <Main>
        <Article />

        <SmallCardsContainer>
          <SmallCard
            image={Image1}
            tags={["React", "Frontend", "Design"]}
            date="March 15, 2025"
            title="Lorem Ipsum Dolor: Consectetur Adipiscing Elit Sed Tempor Nunc"
            readingTime="4 min read"
            description="Nullam tempus quam id lectus malesuada finibus. Proin volutpat est eu nulla tincidunt, dignissim elementum lacus elementum. Proin ut ante."
          />
          <SmallCard
            image={Image2}
            tags={["Next.js", "Web"]}
            date="March 12, 2025"
            title="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            readingTime="5 min read"
            description="Praesent ultricies tortor et tempor ultrices. Nulla sollicitudin feugiat feugiat. Sed maximus mi nec massa efficitur, eget pellentesque nisi elementum."
          />
          <SmallCard
            image={Image3}
            tags={["JavaScript", "Programming"]}
            date="March 10, 2025"
            title="Etiam Eleifend Volutpat Nibh: Placerat Tortor in Mollis Magna"
            readingTime="3 min read"
            description="Morbi vestibulum pharetra lectus, ut scelerisque eros scelerisque eu. Vivamus varius magna a lorem interdum, eget cursus erat interdum. Vestibulum."
          />
        </SmallCardsContainer>
      </Main>
    </>
  );
};

export { Body };
