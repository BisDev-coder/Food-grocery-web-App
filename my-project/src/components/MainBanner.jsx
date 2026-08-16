




import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <section className="relative mt-5 sm:mt-6 overflow-hidden rounded-[28px] sm:rounded-[36px]">

      {/* ================= BACKGROUND ================= */}
      <picture>
        <source
          media="(max-width: 767px)"
          srcSet={assets.main_banner_bg_sm}
        />

        <img
          src={assets.main_banner_bg}
          alt="Fresh vegetables and fruits"
          className="
            w-full
            h-[620px]
            sm:h-[650px]
            lg:h-[680px]
            object-cover
            object-center
         
          "
        />
      </picture>
       {/* <div className='absolute inset-0 bg-[#0E2318]/50 ' /> */}
       <div className='absolute inset-0 bg-black/30 ' />

      {/* ================= GRADIENT OVERLAY ================= */}

      {/* Left side - makes text readable */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-black/65
          via-black/25
          to-transparent
        "
      />

      {/* Bottom subtle gradient */}
      <div
        className="
          absolute inset-x-0 bottom-0
          h-1/3
          bg-gradient-to-t
          from-black/30
          to-transparent
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="absolute inset-0">

        <div className="h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="flex h-full items-center">

            <div className="max-w-xl text-white">

              {/* Eyebrow */}
              <div
                className="
                  inline-flex items-center gap-2
                  px-3.5 py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-xl
                  border border-white/20
                  shadow-lg
                  mb-6
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      rounded-full
                      bg-green-400
                      opacity-75
                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-2.5 w-2.5
                      rounded-full
                      bg-green-400
                    "
                  />
                </span>

                <span className="text-xs sm:text-sm font-medium tracking-wide">
                  Fresh groceries. Every single day.
                </span>
              </div>

              {/* Heading */}
              <h1
                className="
                  text-[42px]
                  sm:text-6xl
                  lg:text-[76px]
                  leading-[0.95]
                  tracking-[-0.04em]
                  font-semibold
                "
              >
                Freshness
                <br />

                <span className="text-primary">
                  Delivered.
                </span>
              </h1>

              {/* Description */}
              <p
                className="
                  mt-6
                  max-w-lg
                  text-sm
                  sm:text-base
                  lg:text-lg
                  leading-7
                  text-white/80
                "
              >
                Farm-fresh fruits, vegetables, dairy and daily essentials —
                carefully selected and delivered straight to your doorstep.
              </p>

              {/* CTA */}
              <div className="flex items-center gap-5 mt-8">

                <Link
                  to="/products"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    px-6
                    sm:px-7
                    py-3.5
                    sm:py-4
                    rounded-2xl
                    bg-primary
                    hover:bg-primary-dull
                    text-white
                    font-semibold
                    text-sm
                    sm:text-base
                    shadow-[0_12px_35px_rgba(0,0,0,0.25)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  Shop Fresh Produce

                  <img
                    src={assets.white_arrow_icon}
                    alt=""
                    className="
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  to="/products"
                  className="
                    hidden sm:inline-flex
                    items-center
                    text-sm
                    font-medium
                    text-white/90
                    hover:text-white
                    transition-colors
                  "
                >
                  Explore products
                  <span className="ml-2">↗</span>
                </Link>

              </div>

              {/* Trust indicators */}
              <div
                className="
                  flex
                  items-center
                  gap-5
                  sm:gap-7
                  mt-9
                  pt-6
                  border-t
                  border-white/20
                  max-w-md
                "
              >

                <div>
                  <p className="text-lg sm:text-xl font-semibold">
                    100%
                  </p>

                  <p className="text-xs text-white/60 mt-0.5">
                    Freshness
                  </p>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div>
                  <p className="text-lg sm:text-xl font-semibold">
                    30 min
                  </p>

                  <p className="text-xs text-white/60 mt-0.5">
                    Delivery
                  </p>
                </div>

                <div className="h-8 w-px bg-white/20" />

                <div>
                  <p className="text-lg sm:text-xl font-semibold">
                    500+
                  </p>

                  <p className="text-xs text-white/60 mt-0.5">
                    Products
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= FLOATING FRESHNESS CARD ================= */}

      <div
        className="
          hidden
          lg:flex
          absolute
          right-[8%]
          bottom-[13%]
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
        "
      >

        <div
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-xl
            bg-green-100
            text-lg
          "
        >
          🍃
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Freshness Guaranteed
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            Quality checked daily
          </p>
        </div>

      </div>

      {/* ================= DELIVERY CARD ================= */}

      <div
        className="
          hidden
          md:flex
          absolute
          right-[7%]
          top-[12%]
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
        "
      >

        <div
          className="
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-xl
            bg-primary/10
            text-primary
            text-lg
          "
        >
          ⚡
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">
            Express Delivery
          </p>

          <p className="text-xs text-gray-500 mt-0.5">
            At your doorstep in 30 min
          </p>
        </div>

      </div>

    </section>
  );
};

export default MainBanner;