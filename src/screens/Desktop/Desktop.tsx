import React, { useRef } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Desktop = (): JSX.Element => {
  // Refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const privacyRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Pricing plan data
  const pricingPlans = [
    {
      title: "April Promo",
      price: "$35",
      period: "/week",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles"
      ]
    },
    {
      title: "Starter",
      price: "$50",
      period: "/week",
      popular: true,
      features: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)"
      ]
    },
    {
      title: "Plus",
      price: "$100",
      period: "/week",
      features: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours"
      ]
    }
  ];

  // Testimonial data
  const testimonials = [
    {
      content: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
    },
    {
      content: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
    },
    {
      content: "Holly is a senior executive who got over 10 job interviews and an offer she accepted"
    }
  ];

  // Why Choose Us data
  const whyChooseUs = [
    {
      title: "Tried, Tested, Trusted",
      description: "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
      icon: "/group.png"
    },
    {
      title: "Real People, Real Help",
      description: "A hands-on team that actually cares — guiding you through every twist in your career path.",
      icon: "/profile-1.svg"
    },
    {
      title: "Beat the Line",
      description: "We search, shortlist, and apply for you, so your name shows up first — every single day.",
      icon: "/star-1.svg"
    }
  ];

  // How we work steps
  const workSteps = [
    {
      number: "1",
      title: "Submit Intake Form"
    },
    {
      number: "2",
      title: "We do the search and curation for list of jobs"
    },
    {
      number: "3",
      title: "You approve, we do the tedious part (applying)"
    },
    {
      number: "4",
      title: "You get the interviews"
    }
  ];

  // Resume & Coaching services
  const coachingServices = [
    {
      title: "Resume Rebuild",
      price: "$1000",
      period: "one time",
      description: "Crafted for senior to VP-level professionals ready for their next big step.",
      features: [
        "3× 30-min coaching",
        "Focused on storytelling, not just formatting",
        "Analyst + full application team on Pacific hours",
        "Tailored to your target industry, company, or role",
        "Direct work with our co-founder (ex-Google, JP Morgan)",
        "Executive coaching from UC Berkeley alum with 10+ yrs experience",
        "Resume Rebuild portfolio available upon request"
      ]
    },
    {
      title: "Interview Prep",
      price: "$500",
      period: "one time",
      description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
      features: [
        "2× 45-min live coaching with our co-founder",
        "Real-time, practical feedback",
        "Build clarity, empathy & executive presence",
        "For senior and leadership roles — technical & non-technical"
      ]
    }
  ];

  // Navigation items with click handlers
  const navItems = [
    { name: "Home", onClick: () => scrollToSection(homeRef) },
    { name: "About Us", onClick: () => scrollToSection(aboutRef) },
    { name: "Plans", onClick: () => scrollToSection(plansRef) },
    { name: "Testimonials", onClick: () => scrollToSection(testimonialsRef) },
    { name: "Privacy Policy", onClick: () => scrollToSection(privacyRef) },
    { name: "More" }
  ];

  return (
    <div className="bg-[#fefefe] flex flex-row justify-center w-full">
      <div className="bg-[#fefefe] overflow-hidden w-full relative">
        {/* Hero Section with homeRef */}
        <header ref={homeRef} className="w-full h-[858px] relative bg-[url(/gradient.png)] bg-cover">
          <nav className="flex justify-between items-center px-20 py-10">
            <div className="flex items-center gap-4">
              <img
                className="w-[76px] h-[50px]"
                alt="Logo"
                src="/group-21.png"
              />
              <span className="font-semibold text-[#fefefe] text-[26px] tracking-[-1.82px]">
                MobuisEngine
              </span>
            </div>
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="font-medium text-[#fefefe] text-[25px] tracking-[-1.25px] cursor-pointer hover:underline"
                  onClick={item.onClick}
                >
                  {item.name}
                  {item.name === "More" && (
                    <img
                      className="inline-block ml-2 w-[11px] h-[5px]"
                      alt="Dropdown"
                      src="/polygon-1.svg"
                    />
                  )}
                </div>
              ))}
            </div>
            <Button className="bg-[#fefefe] text-[#022183] rounded-[31.5px] h-[62px] w-[220px] text-[25px] font-medium">
              Get Started
            </Button>
          </nav>
          <div className="flex justify-between px-[300px] mt-20">
            <div className="max-w-[780px]">
              <h1 className="font-semibold text-[80px] tracking-[-1.60px] leading-[83.2px]">
                <span className="text-[#fefefe]">Land job interviews<br /></span>
                <span className="text-[#0649e7]">10x</span>
                <span className="text-[#fefefe]"> faster</span>
              </h1>
              <p className="text-[#fefefe] text-xl mt-10 max-w-[613px]">
                Custom-built resumes that match your goals, keywords, and recruiter expectations.
              </p>
              <Button className="mt-10 bg-[#fefefe] text-[#022183] rounded-[33.86px] h-[68px] w-[216px] text-[21.1px] font-medium">
                Get Started →
              </Button>
            </div>
            <div className="relative w-[354px] h-[445px]">
              <img
                className="absolute w-[301px] h-[390px] top-0 left-0 object-cover"
                alt="Image"
                src="/image-1.png"
              />
              <div className="absolute w-[121px] h-[121px] top-[303px] left-[227px] bg-[#d9d9d94c] rounded-[60.27px] border-[0.97px] border-solid border-[#fefefe] backdrop-blur-[6.8px]" />
              <div className="absolute top-[333px] left-[257px] font-medium text-black text-[61.2px]">
                📖
              </div>
              <div className="absolute w-[25px] h-[25px] top-[402px] left-[246px] bg-[#fefefe] rounded-[12.64px]" />
              <div className="absolute top-[410px] left-[255px] font-medium text-[#0649e7] text-[11.6px]">
                ↙
              </div>
              <p className="absolute top-[428px] left-[75px] font-medium text-white text-[17.5px]">
                Download Free E-Book
              </p>
            </div>
          </div>
        </header>
        
        {/* How we work section */}
        <section className="mt-16 px-[310px]">
          <h2 className="font-medium text-[#0649e7] text-[40px] tracking-[-1.60px]">
            How we work?
          </h2>
          <div className="flex justify-between mt-10">
            {workSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative w-[82px] h-[82px] rounded-[40.82px] border-[1.51px] border-solid border-[#022183] flex items-center justify-center">
                  <div className="font-normal text-black text-[56px]">{step.number}</div>
                </div>
                <img
                  className="w-[213px] h-0.5 mt-5"
                  alt="Line"
                  src="/line-1.svg"
                />
                <p className="mt-5 font-medium text-[#0649e7] text-[26px] tracking-[-0.52px] max-w-[280px]">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* About Us section with aboutRef */}
        <section ref={aboutRef} className="mt-16 relative w-full h-[1140px]">
          <img
            className="absolute w-full h-full object-cover"
            alt="Background"
            src="/clip-path-group.png"
          />
          <div className="relative z-10 pt-[133px] px-[316px]">
            <h2 className="font-medium text-[#fefefe] text-[40px] tracking-[-1.60px]">
              About Us
            </h2>
            <div className="flex mt-[134px] gap-10">
              <div className="relative h-[275px] w-[262px]">
                <div className="absolute w-[262px] h-[262px] top-0 left-0 bg-[#fefefe] rounded-[131.17px] bg-[url(/mask-group.png)] bg-cover" />
                <div className="absolute w-20 h-20 top-[195px] left-[173px] bg-[#d9d9d94c] rounded-[39.8px] border-[1.06px] border-solid border-[#fefefe] backdrop-blur-[7.45px]" />
                <img
                  className="absolute w-[31px] h-[30px] top-[220px] left-[197px]"
                  alt="Shape"
                  src="/shape.svg"
                />
              </div>
              <div className="max-w-[537px] text-[#fefefe] text-lg">
                <p>
                  <span className="font-bold">Ashwin</span> is the founder of mobiusengine.ai. He is an accomplished senior
                  executive with over 20 years of experience in cloud
                  infrastructure and financial services. With over 2 decades of
                  experience at Google and JP Morgan, Ashwin held various product
                  and GTM roles. Ashwin is an MBA holder from Yale University.
                  <br />�<br />
                  Ashwin's vision with Mobius is to give job seekers a
                  significant advantage in securing the roles of their dreams.
                </p>
              </div>
            </div>
            <div className="flex mt-[80px] gap-10">
              <div className="relative h-[279px] w-[266px]">
                <div className="absolute w-[266px] h-[266px] top-0 left-0 bg-[#fefefe] rounded-[133.08px] bg-[url(/image-3.png)] bg-cover" />
                <div className="absolute w-[81px] h-[81px] top-[198px] left-[175px] bg-[#d9d9d94c] rounded-[40.38px] border-[1.06px] border-solid border-[#fefefe] backdrop-blur-[7.45px]" />
                <img
                  className="absolute w-8 h-[30px] top-56 left-[199px]"
                  alt="Shape"
                  src="/shape-1.svg"
                />
              </div>
              <div className="max-w-[537px] text-[#fefefe] text-lg">
                <p>
                  <span className="font-bold">Nicole</span> is an Executive coach at Mobius specializing in resume builds
                  and career advisory. 
                  <br /> <br />
                  With a B.S. in Business Administration from UC Berkeley and 7+
                  years of experience in AI-driven product strategy, she has seen
                  firsthand how the proper positioning opens doors. She takes a
                  targeted, results-driven approach to help clients confidently
                  stand out and land roles that truly match their skills and
                  potential.
                </p>
              </div>
            </div>
            <div className="mt-[200px] text-center">
              <p className="text-white text-lg">
                Learn more about our Board of Advisors� ↗
              </p>
              <p className="text-white text-lg mt-5">
                Follow us on our Linkedin page ↗
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials section with testimonialsRef */}
        <section ref={testimonialsRef} className="mt-16 px-[310px]">
          <h2 className="font-medium text-[#0649e7] text-[40px] tracking-[-1.60px]">
            What our clients have to say
          </h2>
          <div className="flex gap-6 mt-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="w-[650px] h-[480px] rounded-[35px] bg-[#0649e7] overflow-hidden">
                <div className="w-full h-[263px] bg-[#fefefe] rounded-[35px] border-2 border-solid border-[#0649e7] relative">
                  <div className="absolute w-[47px] h-[47px] top-[108px] left-[174px] bg-[#0649e7] rounded-[23.5px] flex items-center justify-center">
                    <img
                      className="w-3 h-3.5"
                      alt="Play"
                      src="/polygon-2.svg"
                    />
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-[#fefefe] text-xl">
                    {testimonial.content.split(" ").map((word, i) =>
                      word === "senior" || word === "executive" || word === "10" ? 
                        <span key={i} className="font-bold">{word} </span> : 
                        <span key={i}>{word} </span>
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <div className="w-[57px] h-[57px] bg-[#fefefe] rounded-[28.5px] flex items-center justify-center">
                    <span className="text-[#0649e7] text-[26px]">↗</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-16">
            <Button variant="outline" className="h-[62px] w-[350px] rounded-[36px] border-2 border-[#0649e7] text-[#0649e7] text-xl">
              More customer testimonials ↗
            </Button>
            <Button className="h-[62px] w-[211px] rounded-[36px] bg-[#0649e7] text-[#fefefe] text-xl font-semibold">
              Get Started →
            </Button>
          </div>
        </section>
        
        {/* Why Choose Us section */}
        <section className="mt-16 px-[254px]">
          <Card className="w-full rounded-[35px] bg-[#f8faff] border-none">
            <CardHeader>
              <CardTitle className="text-[#022183] text-[40px] font-medium tracking-[-1.60px]">
                Why Choose Us?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="w-[359px] h-[316px] rounded-[35px] border-[1.51px] border-solid border-[#022183] bg-transparent">
                    <CardContent className="p-0">
                      <div className="h-[146px] flex items-center justify-center">
                        {index === 0 ? (
                          <div className="w-[65px] h-14 bg-[url(/group.png)] bg-cover" />
                        ) : index === 1 ? (
                          <img className="w-[51px] h-14" alt="Profile" src="/profile-1.svg" />
                        ) : (
                          <img className="w-[58px] h-14" alt="Star" src="/star-1.svg" />
                        )}
                      </div>
                      <div className="px-[30px]">
                        <h3 className="font-semibold text-[#022183] text-2xl tracking-[-0.96px]">
                          {item.title}
                        </h3>
                        <p className="mt-5 font-normal text-[#022183] text-lg tracking-[-0.36px]">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Job Application Service Plans with plansRef */}
        <section ref={plansRef} className="mt-16 px-[310px]">
          <h2 className="font-semibold text-[#0649e7] text-[40px] tracking-[-1.60px]">
            Job Application Service Plans
          </h2>
          <div className="flex gap-6 mt-10">
            {pricingPlans.slice(0, 2).map((plan, index) => (
              <Card key={index} className="w-[398px] h-[900px] rounded-[35px] border-2 border-solid border-[#0649e7] bg-transparent">
                <CardHeader className="pt-[27px] pb-0 px-[37px]">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-semibold text-[#0649e7] text-[32px] tracking-[-1.28px]">
                      {plan.title}
                    </CardTitle>
                    {plan.popular && (
                      <Badge className="bg-[#eaf0ff] text-[#0649e7] border border-[#0649e7] rounded-[35px] h-9 px-4 font-medium">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="mt-10 font-normal text-[#0649e7] text-[56px] tracking-[-2.24px]">
                    <span className="font-bold">{plan.price}</span>
                    <span className="font-bold text-[26px]">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 px-[37px]">
                  <Separator className="mb-6 bg-[#0649e7]" />
                  <ul className="space-y-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-[31px]">
                        <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                          <img
                            className="w-[11px] h-2.5"
                            alt="Check"
                            src="/vector-2.svg"
                          />
                        </div>
                        <span className="font-medium text-[#0649e7] text-lg tracking-[-0.72px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-[33px]">
                  <Button className="w-[211px] h-[62px] bg-[#0649e7] text-[#fefefe] rounded-[36px] text-xl font-semibold">
                    Get Started →
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="w-[398px] h-[682px] rounded-[35px] border-2 border-solid border-[#0649e7] bg-transparent">
              <CardHeader className="pt-[27px] pb-0 px-[37px]">
                <CardTitle className="font-semibold text-[#0649e7] text-[32px] tracking-[-1.28px]">
                  {pricingPlans[2].title}
                </CardTitle>
                <div className="mt-10 font-normal text-[#0649e7] text-[56px] tracking-[-2.24px]">
                  <span className="font-bold">{pricingPlans[2].price}</span>
                  <span className="font-bold text-[26px]">{pricingPlans[2].period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6 px-[37px]">
                <Separator className="mb-6 bg-[#0649e7]" />
                <ul className="space-y-5">
                  {pricingPlans[2].features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-[31px]">
                      <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                        <img
                          className="w-[11px] h-2.5"
                          alt="Check"
                          src="/vector-2.svg"
                        />
                      </div>
                      <span className="font-medium text-[#0649e7] text-lg tracking-[-0.72px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-[33px]">
                <Button className="w-[211px] h-[62px] bg-[#0649e7] text-[#fefefe] rounded-[36px] text-xl font-semibold">
                  Get Started →
                </Button>
              </CardFooter>
            </Card>
          </div>
          {/* Advance plan */}
          <Card className="w-full h-[390px] bg-[#0649e7] rounded-[35px] mt-10 border-none">
            <CardContent className="flex justify-between p-0">
              <div className="p-[39px]">
                <h3 className="font-semibold text-[#fefefe] text-[32px] tracking-[-1.28px]">
                  Advance
                </h3>
                <p className="mt-3 font-semibold text-[#fefefe] text-lg tracking-[-0.72px]">
                  Top-tier support for serious job hunters:
                </p>
                <Separator className="my-6 bg-[#fefefe]" />
                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                  <div className="flex items-start gap-[31px]">
                    <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                      <img
                        className="w-[11px] h-2.5"
                        alt="Check"
                        src="/vector-2.svg"
                      />
                    </div>
                    <span className="font-medium text-[#fefefe] text-lg tracking-[-0.72px]">
                      Everything in Plus
                    </span>
                  </div>
                  <div className="flex items-start gap-[31px]">
                    <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                      <img
                        className="w-[11px] h-2.5"
                        alt="Check"
                        src="/vector-2.svg"
                      />
                    </div>
                    <span className="font-medium text-[#fefefe] text-lg tracking-[-0.72px]">
                      Custom Resumes & Cover Letters
                    </span>
                  </div>
                  <div className="flex items-start gap-[31px]">
                    <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                      <img
                        className="w-[11px] h-2.5"
                        alt="Check"
                        src="/vector-2.svg"
                      />
                    </div>
                    <span className="font-medium text-[#fefefe] text-lg tracking-[-0.72px]">
                      Up to 75 apps/week
                    </span>
                  </div>
                  <div className="flex items-start gap-[31px]">
                    <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                      <img
                        className="w-[11px] h-2.5"
                        alt="Check"
                        src="/vector-2.svg"
                      />
                    </div>
                    <span className="font-medium text-[#fefefe] text-lg tracking-[-0.72px]">
                      Analyst + full application team on Pacific hours
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between p-12">
                <div className="font-normal text-[#fefefe] text-[56px] tracking-[-2.24px] text-right">
                  <span className="font-bold">$150</span>
                  <span className="font-bold text-[26px]">/week</span>
                </div>
                <Button className="w-[211px] h-[62px] bg-[#fefefe] text-[#0649e7] rounded-[36px] text-xl font-semibold self-end">
                  Get Started →
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Resume Building & Coaching */}
        <section className="mt-16 px-[310px]">
          <h2 className="font-semibold text-[#0649e7] text-[40px] tracking-[-1.60px]">
            Resume Building & Coaching
          </h2>
          <Separator className="my-6 bg-[#0649e7]" />
          <p className="font-medium text-[#0649e7] text-lg tracking-[-0.72px]">
            Let's talk about where you're headed — and how your resume can get you there.{" "}
            <span className="font-bold">Schedule a call to get started.</span>
          </p>
          <div className="flex justify-center gap-10 mt-10">
            {coachingServices.map((service, index) => (
              <Card key={index} className="w-[450px] h-[826px] rounded-[35px] border-2 border-solid border-[#0649e7] bg-transparent">
                <CardHeader className="pt-7 pb-0 px-[37px]">
                  <CardTitle className="font-semibold text-[#0649e7] text-[32px] tracking-[-1.28px]">
                    {service.title}
                  </CardTitle>
                  <p className="mt-4 font-medium text-[#0649e7] text-lg tracking-[-0.72px]">
                    {service.description}
                  </p>
                  <div className="mt-10 font-normal text-[#0649e7] text-[56px] tracking-[-2.24px]">
                    <span className="font-bold">{service.price}</span>
                    <span className="font-bold text-[26px]"> {service.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 px-[37px]">
                  <Separator className="mb-6 bg-[#0649e7]" />
                  <ul className="space-y-5">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-[31px]">
                        <div className="w-5 h-5 bg-[#49d157] rounded-[10px] flex items-center justify-center mt-0.5">
                          <img
                            className="w-[11px] h-2.5"
                            alt="Check"
                            src="/vector-2.svg"
                          />
                        </div>
                        <span className="font-medium text-[#0649e7] text-lg tracking-[-0.72px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-[33px]">
                  <Button className="w-[211px] h-[62px] bg-[#0649e7] text-[#fefefe] rounded-[36px] text-xl font-semibold">
                    Get Started →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mt-32 bg-[#0649e7] rounded-[35px] mx-[310px] p-16 flex justify-between items-center">
          <div>
            <h2 className="text-[#fefefe] text-[32px] font-semibold mb-2">STILL HAVE DOUBTS?</h2>
            <h3 className="text-[#fefefe] text-[56px] font-semibold">Contact us</h3>
          </div>
          <Button className="w-[62px] h-[62px] rounded-full bg-[#fefefe] flex items-center justify-center">
            <span className="text-[#0649e7] text-2xl">→</span>
          </Button>
        </section>
        
        {/* Footer with privacyRef */}
        <div ref={privacyRef} className="mt-32 w-full bg-[#fefefe]">
          <div className="max-w-[1320px] mx-auto px-4">
            <div className="flex justify-between items-start mb-16">
              <div>
                <div className="flex items-center gap-4 mb-16">
                  <img
                    className="w-[76px] h-[50px]"
                    alt="Logo"
                    src="/group-21.png"
                  />
                  <span className="font-semibold text-[#0649e7] text-[26px] tracking-[-1.82px]">
                    MobiusEngine
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-[#0649e7] text-lg mb-4">Address</h3>
                  <p className="text-[#0649e7] text-base leading-relaxed">
                    16/b Mission St Ste 103 #450<br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
              <div className="flex gap-32">
                <div>
                  <h3 className="font-medium text-[#0649e7] text-lg mb-4">Email</h3>
                  <a href="mailto:finance@mobiusengine.ai" className="text-[#0649e7] text-base hover:underline">
                    finance@mobiusengine.ai
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-[#0649e7] text-lg mb-4">Telephone</h3>
                  <a href="tel:650-889-6026" className="text-[#0649e7] text-base hover:underline">
                    650-889-6026
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-[#0649e7] text-lg mb-4">Socials</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-8 h-8 rounded-full border border-[#0649e7] flex items-center justify-center">
                      <span className="text-[#0649e7] text-sm">in</span>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full border border-[#0649e7] flex items-center justify-center">
                      <span className="text-[#0649e7] text-sm">in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="bg-[#0649e7] opacity-20 mb-8" />
            <div className="flex justify-between items-center pb-8">
              <p className="text-[#0649e7] text-sm opacity-50">
                © 2023 Mobiuservices LLC
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-[#0649e7] text-sm opacity-50 hover:opacity-100">Terms & Conditions</a>
                <a href="#" className="text-[#0649e7] text-sm opacity-50 hover:opacity-100">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
