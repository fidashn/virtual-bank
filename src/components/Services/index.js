import React, { useEffect } from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-3.svg";
import Icon3 from "../../images/svg-4.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesWrapper,
  ServicesContainer,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1
          data-aos="fade-up"
          data-aos-anchor-placement="services"
          data-aos-once>
          Why use us?
        </ServicesH1>
        <ServicesWrapper
          data-aos="fade-up"
          data-aos-anchor-placement="services"
          data-aos-once>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Transition low fee</ServicesH2>
            <ServicesP>
              Convert money to any account around the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Easy Access</ServicesH2>
            <ServicesP>
              Access accurate data of your account balance anywhere, anytime.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Investments</ServicesH2>
            <ServicesP>
              our team could help you understand and start investing in the stock market.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
