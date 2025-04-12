import Link from "next/link";
import NavLinks from "@/app/ui/nav_bar/navLinks";
import SomeLogo from "@/app/ui/someLogo";
import { PowerIcon } from "@heroicons/react/24/outline";
import LogoutButton from "../LogoutButton";
import NavButton from "./navButton";
import { HomeIcon, SparklesIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ProjectDetailsPopUp } from "../popups/ProjectDetailsPopUp";

const project = {
  "id": 1,
  "owner": {
      "id": 2,
      "email": "123@123.pl",
      "first_name": "Johnnnn",
      "last_name": "Doe"
  },
  "positions": [
      {
          "id": 1,
          "project": 1,
          "title": "Embeded systems developer",
          "specialization_detail": {
              "id": 1,
              "name": "Software Developer"
          },
          "required_skills": [
              {
                  "id": 1,
                  "name": "Embedded Systems"
              },
              {
                  "id": 3,
                  "name": "C++"
              }
          ],
          "people_required_min": 3,
          "people_required_max": 3,
          "description": "We are developing a next-generation smart prosthetic leg with real-time adaptive control. We're looking for an embedded systems developer to join our interdisciplinary team of engineers, biomedical experts, and designers. You'll help design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
          "current_interested": 0
      }
  ],
  "name": "Creating leg prosthesis",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  "image": "http://localhost:8000/media/images/project_images/leg1_4cOTirU.png",
  "created_at": "2025-04-12T15:01:01.250781+02:00",
  "is_active": true,
  "location": "Cracow"
}

export default function MainNav() {
  return (
    <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-20 justify-around py-4 flex items-start">
      <div className="width-[80%] border-black border p-1 rounded-md">
        <Image src="/logo.svg" alt="logo" width={160} height={160} />
      </div>

      <div className="flex items-center">
        <NavButton text="projects" icon={<SparklesIcon className="w-4 h-4 text-black" />} link="/" />
        <NavButton text="network" icon={<HomeIcon className="w-4 h-4 text-black" />} link="/" />
<<<<<<< Updated upstream
        <NavButton text="jobs" icon={<BriefcaseIcon className="w-4 h-4 text-black" />} link="/" />
=======
        <NavButton text="jobs" icon={<HomeIcon className="w-4 h-4 text-black" />} link="/" />
        <ProjectDetailsPopUp project={project}></ProjectDetailsPopUp>
>>>>>>> Stashed changes
      </div>

      <div className="flex items-start">
        <span className="text-black font-medium border-black border p-1 rounded-md">
          Yehor Kharchenko
        </span>
        <div className="border-black border p-1 rounded-md">
          <div className="rounded-full bg-black w-10 h-10 ">
            ,
          </div>
        </div>
        
      </div>
    </nav>
  );
}
