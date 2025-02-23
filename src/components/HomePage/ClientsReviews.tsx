import React, { FC } from "react";
import Review from "../reusable/Review";
import Marquee from "react-fast-marquee";

const ClientsReviews: FC = () => {
  return (
    <div className="bg-[#02050A]">
      <div className="text-center mb-12 text-white pt-24 space-y-6 ">
        <p className=" uppercase">Build With Incredible</p>
        <h2 className="text-3xl font-bold">Our clients Feedback</h2>
      </div>

      <Marquee>
        <Review
          img="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-1.png"
          name="David Troot"
          designation="Director ,TMS.Inc"
          feedback="Absolutely loved my experience! The service was impeccable, and the
        food was delicious. Will definitely be coming back!"
        />
        <Review
          img="https://scontent.fdac90-1.fna.fbcdn.net/v/t39.30808-6/475778482_3934092866919866_2774381266004835512_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFPYBIoFR-nlGf0cXkfibEUydL8-8E2NSnJ0vz7wTY1KYGkCPpsExYuURgYkF9OLbh63kBl1pFsyZI21HRp3wpa&_nc_ohc=JrojMNaQp3MQ7kNvgFqLeC9&_nc_oc=Adjg7_tZf1PHh9Ka1tuPjjfZenFalooVsihT_2MrQoEnwe6l95wyFuOUilfnwMy8yK4&_nc_zt=23&_nc_ht=scontent.fdac90-1.fna&_nc_gid=AXP9PXO6H4zvUmqqFBpuPHX&oh=00_AYBfKg7eR-bgx3MNQmzLLQ8OIVIitZaDX71N4ADUMHeSlQ&oe=67BF5D29"
          name="Akash"
          designation="Founder, CdngPng Inc"
          feedback="Absolutely loved my experience! The service was impeccable, and the
        food was delicious. Will definitely be coming back!"
        />
        <Review
          img="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-1.png"
          name="David Troot"
          designation="Director ,TMS.Inc"
          feedback="Absolutely loved my experience! The service was impeccable, and the
        food was delicious. Will definitely be coming back!"
        />
        <Review
          img="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-1.png"
          name="David Troot"
          designation="Director ,TMS.Inc"
          feedback="Absolutely loved my experience! The service was impeccable, and the
        food was delicious. Will definitely be coming back!"
        />
        <Review
          img="https://html.rrdevs.net/preview/runok/assets/imgs/elementor/products-1.png"
          name="David Troot"
          designation="Director ,TMS.Inc"
          feedback="Absolutely loved my experience! The service was impeccable, and the
        food was delicious. Will definitely be coming back!"
        />
      </Marquee>
    </div>
  );
};

export default ClientsReviews;
