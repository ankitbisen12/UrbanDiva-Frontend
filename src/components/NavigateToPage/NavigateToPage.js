import React from "react";

const callouts = [
  {
    name: "Women's",
    description: "Work from home accessories",
    imageSrc:
      "https://digitalscholar.in/wp-content/uploads/2022/09/seo-tips-for-fashion-e-commerce-website-768x512.jpg",
    href: "#",
  },
  {
    name: "Men's",
    description: "Journals and note-taking",
    imageSrc:
      "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_spanish_man_spanish_style_linen_shirt_tailored_shorts__7d3f1677_aafe_4670_b641_e50b33b89334.jpg",
    href: "#",
  },
  {
    name: "Accessories's",
    description: "Daily commute essentials",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZo-UcfeuhGQHi7MAQMbeaqdw8z2jfheIIHg&s",
    href: "#",
  },
];

const NavigateToPage = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center pt-8">
          <span className="text-2xl md:text-4xl font-bold jost-nav">
            Shop By category
          </span>
        </div>
        <div className="mx-auto max-w-2xl pb-6 sm:pb-8 lg:max-w-none lg:pb-12">
          <div className="mt-6 space-y-6 md:grid md:grid-cols-3 md:gap-x-6 md:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-44 md:h-44 lg:h-56 w-full overflow-hidden rounded-none bg-white">
                  <img
                    alt={callout.name}
                    src={callout.imageSrc}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <button className="px-6 py-2 text-black bg-white text-xl font-bold uppercase">
                      {callout.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateToPage;
