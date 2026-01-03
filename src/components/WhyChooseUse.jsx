import { CheckCircleIcon, SparklesIcon, RocketLaunchIcon, ShieldCheckIcon, ClockIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function WhyChooseSection() {
  const features = [
    {
      icon: SparklesIcon,
      title: "Creative Excellence",
      description: "We transform ordinary ideas into extraordinary outdoor advertising campaigns that capture attention and drive results.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Fast Execution",
      description: "From concept to installation, we deliver high-impact billboard campaigns quickly without compromising quality.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Premium Locations",
      description: "Strategic placement in high-traffic areas ensures maximum visibility and reach for your brand message.",
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Our dedicated team is always available to support your campaign needs, anytime you need us.",
    },
    {
      icon: UsersIcon,
      title: "Expert Team",
      description: "Experienced designers and advertising specialists work together to bring your vision to life.",
    },
    {
      icon: CheckCircleIcon,
      title: "Proven Results",
      description: "Trusted by leading brands with a track record of successful campaigns that deliver measurable impact.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text, text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver outstanding outdoor advertising solutions that help your brand stand out in a crowded world.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}