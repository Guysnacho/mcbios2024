"use client";

import CareerDev from "@/public/images/banners/career-development.jpg";
import { Divider, Image, Tab, Tabs } from "@nextui-org/react";

const events = () => {
  return (
    <div className="container space-y-10 mx-auto">
      <h3 className="text-center my-10">Events</h3>
      <Tabs
        aria-label="Options"
        size="lg"
        className="mx-auto justify-center align-middle w-full items-center self-center mt-16 mb-8"
        classNames={{
          base: ["justify-around", "items-middle", "align-middle"],
          tabList: ["mx-auto", "w-2/3"],
        }}
      >
        <Tab key="upcoming" title="Upcoming Events">
          <Divider className="w-1/2 mx-auto mb-10" />
          <section>
            <div className="w-3/4 xl:w-1/2 mx-auto space-y-5">
              <h5 className="text-center text-primary">
                Check in with us later for updates
              </h5>
            </div>
          </section>
        </Tab>
        <Tab key="career" title="Career Development">
          <Image
            src={CareerDev.src}
            alt="Career Development Series"
            className="mx-auto px-5 md:px-10 lg:px-20"
            removeWrapper
          />
          <Divider className="w-1/2 mx-auto mb-10" />
          <section>
            <div className="w-11/12 mx-auto gap-8 items-center space-y-6 md:space-y-5">
              <Divider className="w-1/2 mx-auto mb-10" />
              <p className="justify-center">
                Career Development Seminars are workshops and presentations free
                and open to all MCBIOS members, especially for trainees and
                junior faculty on professional development, mentoring from
                academia and industry leaders, grant and manuscript writing,
                best practices and resources pertaining to build an impactful
                career in biomedical data sciences. Seminars are offered monthly
                as virtual seminar and an in-person session during the MCBIOS
                Annual Conference.
              </p>
              <Divider className="w-1/2 mx-auto mb-10" />
              <h5 className="text-center text-primary">
                Check in with us later for updates
              </h5>
            </div>
          </section>
        </Tab>
        <Tab key="groups" title="Working Groups">
          <Divider className="w-1/2 mx-auto mb-10" />
          <section>
            <div className="w-11/12 mx-auto gap-8 items-center space-y-6 md:space-y-5">
              <p className="text-lg">
                MCBIOS encourages the formation of working groups. Groups
                require:
              </p>

              <ul className="list-disc list-inside">
                <li>At least three members</li>
                <li>An elected chairman</li>
                <li>
                  A regular meeting schedule, with a minimum of two meetings per
                  year
                </li>
                <li>A purpose for organizing</li>
              </ul>
              <p className="text-lg">
                To apply for recognition as a MCBIOS working group, please
                contact any Board Member or send us a message and provide the
                information above, along with a copy of your bylaws, if
                applicable.
              </p>
              <Divider className="w-1/2 mx-auto mb-10" />
              <h5 className="text-center text-primary">
                Check in with us later for updates
              </h5>
            </div>
          </section>
        </Tab>
      </Tabs>
    </div>
  );
};

export default events;
