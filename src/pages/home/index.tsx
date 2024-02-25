import React, { useRef } from "react";
import Banner from "@/components/UI/Banner";
import Section from "@/components/common/Section";
import Carousel from "@/components/common/Carousel";
import Statics from "@/pages/home/components/Statics";
import Button from "@/components/common/Button";
import Interested from "@/pages/home/components/Interested";
import Catalogue from "@/components/common/Catalogue";
import { blinkist, features, interested, members } from "@/fakeData/data";
import Knowledge from "@/components/common/Knowledge";
import Comments from "@/components/common/Comments";
import Amount from "@/components/common/Amount";
import Investment from "@/components/common/Investment";

const Home = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Banner />
      <Knowledge
        data={features}
        title={"Understand books & podcasts in 15 minutes"}
      />
      <Statics />
      <Investment />
      <Comments title={"What our members say"} data={members} />
      <Amount title={"Start growing with Blinkist now"} data={blinkist} />
      <Section
        bgColor="bg-slate-100 "
        ref={sectionRef}
        title={"What are you interested in?"}
      >
        <Interested dataSource={interested} />
      </Section>
      <div className="line-divider">
        <div className="line-divider__line line-divider__line--l line-divider__line--light-grey"></div>
      </div>
      <div className=" bg-slate-100  pt-12">
        <Carousel titleDetail={{ title: "Career & Success", bookNum: 554 }} />
        <Carousel
          titleDetail={{ title: "Mindfulness & Happiness", bookNum: 179 }}
        />
      </div>
      <div className="bg-slate-100">
        <div className=" pt-8 containerTop">
          <a
            className="category-explorer__view-categories"
            onClick={scrollToTop}
          >
            Scroll up to all categories
          </a>
          <div className="flex justify-center  mt-10">
            <Button title="Start your free trial" />
          </div>
        </div>
      </div>
      <Catalogue title={"Discover the Blinkist catalogue"} />
    </>
  );
};

export default Home;
