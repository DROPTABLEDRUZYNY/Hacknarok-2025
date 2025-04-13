import { Project } from './types';

// Load reference data
const referenceData = {
  SPECIALIZATIONS: [
    { id: 1, name: "Software Developer", icon: "code-bracket" },
    { id: 2, name: "Medical Doctor", icon: "heart" },
    { id: 3, name: "Biomedical Engineer", icon: "beaker" },
    { id: 4, name: "Biologist", icon: "bug" },
    { id: 5, name: "Materials Scientist", icon: "cube-transparent" },
    { id: 6, name: "Chemist", icon: "sparkles" },
    { id: 7, name: "Data Analyst", icon: "chart-bar" },
    { id: 8, name: "Marketer", icon: "megaphone" },
    { id: 9, name: "QA Tester", icon: "magnifying-glass" }
  ],
  SKILLS: [
    { id: 1, name: "Embedded Systems" },
    { id: 2, name: "React" },
    { id: 3, name: "C++" },
    { id: 4, name: "Rehabilitation Medicine" },
    { id: 5, name: "Testing Automation" },
    { id: 6, name: "Statistics" },
    { id: 7, name: "Data Visualization" },
    { id: 8, name: "Machine Learning" },
    { id: 9, name: "Python" },
    { id: 10, name: "Medical Imaging" },
    { id: 11, name: "3D Printing" },
    { id: 12, name: "Lab Safety" },
    { id: 13, name: "SEO" },
    { id: 14, name: "Social Media Marketing" },
    { id: 15, name: "Public Speaking" }
  ]
};

export const projects: Project[] = [
  {
    "id": 1,
    "name": "Creating leg prosthesis",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "image": "http://localhost:8000/media/images/project_images/leg1_jgQ54Tb.png",
    "owner": {
        "id": 2,
        "email": "123@123.pl",
        "first_name": "Johnnnn",
        "last_name": "Doe",
        "avatar": "http://localhost:8000/media/avatars/avatar2.png"
    },
    "created_at": "2025-04-12T15:01:01.250781+02:00",
    "is_active": true,
    "location": "Cracow",
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
            "current_interested": 14,
            "application_status": "pending"
        }
    ],
    "applications": [
        {
            "id": 1,
            "user": {
                "id": 1,
                "email": "admin@admin.pl",
                "first_name": "John",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T20:05:35.034397+02:00",
            "status": "pending"
        },
        {
            "id": 9,
            "user": {
                "id": 2,
                "email": "123@123.pl",
                "first_name": "Johnnnn",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.688811+02:00",
            "status": "pending"
        },
        {
            "id": 13,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.702485+02:00",
            "status": "pending"
        },
        {
            "id": 20,
            "user": {
                "id": 4,
                "email": "kaja.klimko@example.com",
                "first_name": "Kaja",
                "last_name": "Klimko",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.736230+02:00",
            "status": "pending"
        },
        {
            "id": 26,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.754601+02:00",
            "status": "accepted"
        },
        {
            "id": 30,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.765721+02:00",
            "status": "accepted"
        },
        {
            "id": 35,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.784470+02:00",
            "status": "pending"
        },
        {
            "id": 41,
            "user": {
                "id": 8,
                "email": "leon.kuza@example.com",
                "first_name": "Leon",
                "last_name": "Kuza",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.807007+02:00",
            "status": "pending"
        },
        {
            "id": 50,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.838442+02:00",
            "status": "pending"
        },
        {
            "id": 61,
            "user": {
                "id": 12,
                "email": "anna maria.cader@example.com",
                "first_name": "Anna maria",
                "last_name": "Cader",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.872385+02:00",
            "status": "pending"
        },
        {
            "id": 68,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.892361+02:00",
            "status": "pending"
        },
        {
            "id": 71,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.902600+02:00",
            "status": "accepted"
        },
        {
            "id": 80,
            "user": {
                "id": 15,
                "email": "dorota.burczak@example.com",
                "first_name": "Dorota",
                "last_name": "Burczak",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.934461+02:00",
            "status": "pending"
        },
        {
            "id": 83,
            "user": {
                "id": 16,
                "email": "marcelina.bubak@example.com",
                "first_name": "Marcelina",
                "last_name": "Bubak",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
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
                "current_interested": 14,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.943881+02:00",
            "status": "pending"
        }
    ]
},
{
    "id": 2,
    "name": "Creating hand prosthesis",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "image": null,
    "owner": {
        "id": 3,
        "email": "abc@abc.pl",
        "first_name": "John",
        "last_name": "Abc",
        "avatar": "http://localhost:8000/media/avatars/avatar3.png"
    },
    "created_at": "2025-04-12T15:01:21.376945+02:00",
    "is_active": true,
    "location": "Cracow",
    "positions": [],
    "applications": []
},
{
    "id": 3,
    "name": "Creating brand new hand prosthesis",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "image": "http://localhost:8000/media/images/project_images/hand2.png",
    "owner": {
        "id": 1,
        "email": "admin@admin.pl",
        "first_name": "John",
        "last_name": "Doe",
        "avatar": "http://localhost:8000/media/avatars/avatar1.png"
    },
    "created_at": "2025-04-12T15:02:49.902067+02:00",
    "is_active": true,
    "location": "Cracow",
    "positions": [],
    "applications": []
},
{
    "id": 4,
    "name": "Advanced Leg Prosthesis",
    "description": "Development of next-generation smart prosthetic leg with real-time adaptive control and AI-powered movement prediction.",
    "image": null,
    "owner": {
        "id": 1,
        "email": "admin@admin.pl",
        "first_name": "John",
        "last_name": "Doe",
        "avatar": "http://localhost:8000/media/avatars/avatar1.png"
    },
    "created_at": "2025-04-12T16:45:43.422854+02:00",
    "is_active": true,
    "location": "Cracow",
    "positions": [
        {
            "id": 2,
            "project": 4,
            "title": "Embedded Systems Developer",
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
                },
                {
                    "id": 16,
                    "name": "Microcontrollers"
                }
            ],
            "people_required_min": 2,
            "people_required_max": 3,
            "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
            "current_interested": 16,
            "application_status": "pending"
        },
        {
            "id": 3,
            "project": 4,
            "title": "Biomechanical Engineer",
            "specialization_detail": {
                "id": 3,
                "name": "Biomedical Engineer"
            },
            "required_skills": [
                {
                    "id": 17,
                    "name": "Biomechanics"
                },
                {
                    "id": 18,
                    "name": "CAD"
                },
                {
                    "id": 20,
                    "name": "Prosthetic Design"
                }
            ],
            "people_required_min": 1,
            "people_required_max": 2,
            "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
            "current_interested": 15,
            "application_status": "accepted"
        }
    ],
    "applications": [
        {
            "id": 2,
            "user": {
                "id": 1,
                "email": "admin@admin.pl",
                "first_name": "John",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.615177+02:00",
            "status": "accepted"
        },
        {
            "id": 6,
            "user": {
                "id": 2,
                "email": "123@123.pl",
                "first_name": "Johnnnn",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.671335+02:00",
            "status": "pending"
        },
        {
            "id": 11,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.695974+02:00",
            "status": "pending"
        },
        {
            "id": 16,
            "user": {
                "id": 4,
                "email": "kaja.klimko@example.com",
                "first_name": "Kaja",
                "last_name": "Klimko",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.716207+02:00",
            "status": "accepted"
        },
        {
            "id": 25,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.751331+02:00",
            "status": "pending"
        },
        {
            "id": 27,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.757368+02:00",
            "status": "pending"
        },
        {
            "id": 36,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.787973+02:00",
            "status": "accepted"
        },
        {
            "id": 39,
            "user": {
                "id": 8,
                "email": "leon.kuza@example.com",
                "first_name": "Leon",
                "last_name": "Kuza",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.800179+02:00",
            "status": "pending"
        },
        {
            "id": 46,
            "user": {
                "id": 9,
                "email": "monika.białk@example.com",
                "first_name": "Monika",
                "last_name": "Białk",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.823816+02:00",
            "status": "accepted"
        },
        {
            "id": 53,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.847541+02:00",
            "status": "pending"
        },
        {
            "id": 55,
            "user": {
                "id": 11,
                "email": "aleksander.semenowicz@example.com",
                "first_name": "Aleksander",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.853512+02:00",
            "status": "pending"
        },
        {
            "id": 60,
            "user": {
                "id": 12,
                "email": "anna maria.cader@example.com",
                "first_name": "Anna maria",
                "last_name": "Cader",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.868904+02:00",
            "status": "pending"
        },
        {
            "id": 69,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.895665+02:00",
            "status": "pending"
        },
        {
            "id": 73,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.909821+02:00",
            "status": "accepted"
        },
        {
            "id": 76,
            "user": {
                "id": 15,
                "email": "dorota.burczak@example.com",
                "first_name": "Dorota",
                "last_name": "Burczak",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.922043+02:00",
            "status": "pending"
        },
        {
            "id": 81,
            "user": {
                "id": 16,
                "email": "marcelina.bubak@example.com",
                "first_name": "Marcelina",
                "last_name": "Bubak",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 2,
                "project": 4,
                "title": "Embedded Systems Developer",
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
                    },
                    {
                        "id": 16,
                        "name": "Microcontrollers"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 3,
                "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.937705+02:00",
            "status": "pending"
        },
        {
            "id": 3,
            "user": {
                "id": 1,
                "email": "admin@admin.pl",
                "first_name": "John",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.656320+02:00",
            "status": "accepted"
        },
        {
            "id": 8,
            "user": {
                "id": 2,
                "email": "123@123.pl",
                "first_name": "Johnnnn",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.684981+02:00",
            "status": "pending"
        },
        {
            "id": 12,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.699279+02:00",
            "status": "accepted"
        },
        {
            "id": 17,
            "user": {
                "id": 4,
                "email": "kaja.klimko@example.com",
                "first_name": "Kaja",
                "last_name": "Klimko",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.720785+02:00",
            "status": "pending"
        },
        {
            "id": 22,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.742427+02:00",
            "status": "pending"
        },
        {
            "id": 32,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.774309+02:00",
            "status": "pending"
        },
        {
            "id": 37,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.792897+02:00",
            "status": "pending"
        },
        {
            "id": 42,
            "user": {
                "id": 8,
                "email": "leon.kuza@example.com",
                "first_name": "Leon",
                "last_name": "Kuza",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.809929+02:00",
            "status": "accepted"
        },
        {
            "id": 48,
            "user": {
                "id": 9,
                "email": "monika.białk@example.com",
                "first_name": "Monika",
                "last_name": "Białk",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.830519+02:00",
            "status": "pending"
        },
        {
            "id": 52,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.844822+02:00",
            "status": "accepted"
        },
        {
            "id": 63,
            "user": {
                "id": 12,
                "email": "anna maria.cader@example.com",
                "first_name": "Anna maria",
                "last_name": "Cader",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.878170+02:00",
            "status": "accepted"
        },
        {
            "id": 64,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.880828+02:00",
            "status": "pending"
        },
        {
            "id": 74,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.913318+02:00",
            "status": "pending"
        },
        {
            "id": 77,
            "user": {
                "id": 15,
                "email": "dorota.burczak@example.com",
                "first_name": "Dorota",
                "last_name": "Burczak",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.924598+02:00",
            "status": "accepted"
        },
        {
            "id": 84,
            "user": {
                "id": 16,
                "email": "marcelina.bubak@example.com",
                "first_name": "Marcelina",
                "last_name": "Bubak",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 3,
                "project": 4,
                "title": "Biomechanical Engineer",
                "specialization_detail": {
                    "id": 3,
                    "name": "Biomedical Engineer"
                },
                "required_skills": [
                    {
                        "id": 17,
                        "name": "Biomechanics"
                    },
                    {
                        "id": 18,
                        "name": "CAD"
                    },
                    {
                        "id": 20,
                        "name": "Prosthetic Design"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 2,
                "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg.",
                "current_interested": 15,
                "application_status": "accepted"
            },
            "applied_at": "2025-04-12T21:53:03.946612+02:00",
            "status": "accepted"
        }
    ]
},
{
    "id": 5,
    "name": "Bionic Hand Prosthesis",
    "description": "Innovative bionic hand with precise motor control and tactile feedback system.",
    "image": "http://localhost:8000/media/images/project_images/hand2_EEgv5yP.png",
    "owner": {
        "id": 1,
        "email": "admin@admin.pl",
        "first_name": "John",
        "last_name": "Doe",
        "avatar": "http://localhost:8000/media/avatars/avatar1.png"
    },
    "created_at": "2025-04-12T16:45:43.450380+02:00",
    "is_active": true,
    "location": "Warsaw",
    "positions": [
        {
            "id": 4,
            "project": 5,
            "title": "Mechatronics Engineer",
            "specialization_detail": {
                "id": 10,
                "name": "Mechanical Engineer"
            },
            "required_skills": [
                {
                    "id": 22,
                    "name": "Electronics"
                },
                {
                    "id": 23,
                    "name": "Sensors"
                },
                {
                    "id": 24,
                    "name": "Robotics"
                }
            ],
            "people_required_min": 1,
            "people_required_max": 1,
            "description": "Develop the electromechanical systems for finger movement and grip control.",
            "current_interested": 16,
            "application_status": "pending"
        },
        {
            "id": 5,
            "project": 5,
            "title": "Materials Specialist",
            "specialization_detail": {
                "id": 5,
                "name": "Materials Scientist"
            },
            "required_skills": [
                {
                    "id": 11,
                    "name": "3D Printing"
                },
                {
                    "id": 19,
                    "name": "Material Science"
                }
            ],
            "people_required_min": 1,
            "people_required_max": 1,
            "description": "Research and select advanced materials for lightweight yet durable construction.",
            "current_interested": 13,
            "application_status": "pending"
        }
    ],
    "applications": [
        {
            "id": 4,
            "user": {
                "id": 1,
                "email": "admin@admin.pl",
                "first_name": "John",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.659340+02:00",
            "status": "accepted"
        },
        {
            "id": 7,
            "user": {
                "id": 2,
                "email": "123@123.pl",
                "first_name": "Johnnnn",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.680924+02:00",
            "status": "accepted"
        },
        {
            "id": 15,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.709261+02:00",
            "status": "pending"
        },
        {
            "id": 18,
            "user": {
                "id": 4,
                "email": "kaja.klimko@example.com",
                "first_name": "Kaja",
                "last_name": "Klimko",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.730050+02:00",
            "status": "pending"
        },
        {
            "id": 21,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.739019+02:00",
            "status": "accepted"
        },
        {
            "id": 31,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.769205+02:00",
            "status": "pending"
        },
        {
            "id": 34,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.781582+02:00",
            "status": "accepted"
        },
        {
            "id": 43,
            "user": {
                "id": 8,
                "email": "leon.kuza@example.com",
                "first_name": "Leon",
                "last_name": "Kuza",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.812489+02:00",
            "status": "accepted"
        },
        {
            "id": 47,
            "user": {
                "id": 9,
                "email": "monika.białk@example.com",
                "first_name": "Monika",
                "last_name": "Białk",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.826913+02:00",
            "status": "pending"
        },
        {
            "id": 51,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.841665+02:00",
            "status": "accepted"
        },
        {
            "id": 58,
            "user": {
                "id": 11,
                "email": "aleksander.semenowicz@example.com",
                "first_name": "Aleksander",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.864008+02:00",
            "status": "accepted"
        },
        {
            "id": 59,
            "user": {
                "id": 12,
                "email": "anna maria.cader@example.com",
                "first_name": "Anna maria",
                "last_name": "Cader",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.866528+02:00",
            "status": "pending"
        },
        {
            "id": 67,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.889033+02:00",
            "status": "pending"
        },
        {
            "id": 70,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.899176+02:00",
            "status": "pending"
        },
        {
            "id": 79,
            "user": {
                "id": 15,
                "email": "dorota.burczak@example.com",
                "first_name": "Dorota",
                "last_name": "Burczak",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.930799+02:00",
            "status": "accepted"
        },
        {
            "id": 82,
            "user": {
                "id": 16,
                "email": "marcelina.bubak@example.com",
                "first_name": "Marcelina",
                "last_name": "Bubak",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 4,
                "project": 5,
                "title": "Mechatronics Engineer",
                "specialization_detail": {
                    "id": 10,
                    "name": "Mechanical Engineer"
                },
                "required_skills": [
                    {
                        "id": 22,
                        "name": "Electronics"
                    },
                    {
                        "id": 23,
                        "name": "Sensors"
                    },
                    {
                        "id": 24,
                        "name": "Robotics"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Develop the electromechanical systems for finger movement and grip control.",
                "current_interested": 16,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.940785+02:00",
            "status": "pending"
        },
        {
            "id": 5,
            "user": {
                "id": 1,
                "email": "admin@admin.pl",
                "first_name": "John",
                "last_name": "Doe",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.662901+02:00",
            "status": "accepted"
        },
        {
            "id": 14,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.705840+02:00",
            "status": "pending"
        },
        {
            "id": 24,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.748768+02:00",
            "status": "accepted"
        },
        {
            "id": 28,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.760242+02:00",
            "status": "pending"
        },
        {
            "id": 38,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.797151+02:00",
            "status": "pending"
        },
        {
            "id": 44,
            "user": {
                "id": 9,
                "email": "monika.białk@example.com",
                "first_name": "Monika",
                "last_name": "Białk",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.816135+02:00",
            "status": "accepted"
        },
        {
            "id": 54,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.850747+02:00",
            "status": "accepted"
        },
        {
            "id": 57,
            "user": {
                "id": 11,
                "email": "aleksander.semenowicz@example.com",
                "first_name": "Aleksander",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.859418+02:00",
            "status": "pending"
        },
        {
            "id": 62,
            "user": {
                "id": 12,
                "email": "anna maria.cader@example.com",
                "first_name": "Anna maria",
                "last_name": "Cader",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.875150+02:00",
            "status": "pending"
        },
        {
            "id": 66,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.886413+02:00",
            "status": "accepted"
        },
        {
            "id": 75,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.918935+02:00",
            "status": "pending"
        },
        {
            "id": 78,
            "user": {
                "id": 15,
                "email": "dorota.burczak@example.com",
                "first_name": "Dorota",
                "last_name": "Burczak",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.928221+02:00",
            "status": "pending"
        },
        {
            "id": 85,
            "user": {
                "id": 16,
                "email": "marcelina.bubak@example.com",
                "first_name": "Marcelina",
                "last_name": "Bubak",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 5,
                "project": 5,
                "title": "Materials Specialist",
                "specialization_detail": {
                    "id": 5,
                    "name": "Materials Scientist"
                },
                "required_skills": [
                    {
                        "id": 11,
                        "name": "3D Printing"
                    },
                    {
                        "id": 19,
                        "name": "Material Science"
                    }
                ],
                "people_required_min": 1,
                "people_required_max": 1,
                "description": "Research and select advanced materials for lightweight yet durable construction.",
                "current_interested": 13,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.949508+02:00",
            "status": "pending"
        }
    ]
},
{
    "id": 6,
    "name": "Neural Interface for Prosthetics",
    "description": "Developing a direct neural interface to control prosthetic limbs using brain signals.",
    "image": null,
    "owner": {
        "id": 1,
        "email": "admin@admin.pl",
        "first_name": "John",
        "last_name": "Doe",
        "avatar": "http://localhost:8000/media/avatars/avatar1.png"
    },
    "created_at": "2025-04-12T16:45:43.469842+02:00",
    "is_active": true,
    "location": "Gdańsk",
    "positions": [
        {
            "id": 6,
            "project": 6,
            "title": "Signal Processing Engineer",
            "specialization_detail": {
                "id": 1,
                "name": "Software Developer"
            },
            "required_skills": [
                {
                    "id": 8,
                    "name": "Machine Learning"
                },
                {
                    "id": 9,
                    "name": "Python"
                },
                {
                    "id": 21,
                    "name": "Signal Processing"
                }
            ],
            "people_required_min": 2,
            "people_required_max": 2,
            "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
            "current_interested": 11,
            "application_status": "pending"
        }
    ],
    "applications": [
        {
            "id": 10,
            "user": {
                "id": 3,
                "email": "abc@abc.pl",
                "first_name": "John",
                "last_name": "Abc",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.692940+02:00",
            "status": "pending"
        },
        {
            "id": 19,
            "user": {
                "id": 4,
                "email": "kaja.klimko@example.com",
                "first_name": "Kaja",
                "last_name": "Klimko",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.733585+02:00",
            "status": "accepted"
        },
        {
            "id": 23,
            "user": {
                "id": 5,
                "email": "adam.dawiec@example.com",
                "first_name": "Adam",
                "last_name": "Dawiec",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.745804+02:00",
            "status": "pending"
        },
        {
            "id": 29,
            "user": {
                "id": 6,
                "email": "róża.małocha@example.com",
                "first_name": "Róża",
                "last_name": "Małocha",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.763088+02:00",
            "status": "accepted"
        },
        {
            "id": 33,
            "user": {
                "id": 7,
                "email": "ignacy.semenowicz@example.com",
                "first_name": "Ignacy",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar2.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.777340+02:00",
            "status": "accepted"
        },
        {
            "id": 40,
            "user": {
                "id": 8,
                "email": "leon.kuza@example.com",
                "first_name": "Leon",
                "last_name": "Kuza",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.804129+02:00",
            "status": "accepted"
        },
        {
            "id": 45,
            "user": {
                "id": 9,
                "email": "monika.białk@example.com",
                "first_name": "Monika",
                "last_name": "Białk",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.820069+02:00",
            "status": "pending"
        },
        {
            "id": 49,
            "user": {
                "id": 10,
                "email": "borys.wawrzyńczyk@example.com",
                "first_name": "Borys",
                "last_name": "Wawrzyńczyk",
                "avatar": "http://localhost:8000/media/avatars/avatar5.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.834754+02:00",
            "status": "pending"
        },
        {
            "id": 56,
            "user": {
                "id": 11,
                "email": "aleksander.semenowicz@example.com",
                "first_name": "Aleksander",
                "last_name": "Semenowicz",
                "avatar": "http://localhost:8000/media/avatars/avatar1.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.855915+02:00",
            "status": "pending"
        },
        {
            "id": 65,
            "user": {
                "id": 13,
                "email": "marcelina.nagórka@example.com",
                "first_name": "Marcelina",
                "last_name": "Nagórka",
                "avatar": "http://localhost:8000/media/avatars/avatar3.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.883262+02:00",
            "status": "pending"
        },
        {
            "id": 72,
            "user": {
                "id": 14,
                "email": "daniel.andreasik@example.com",
                "first_name": "Daniel",
                "last_name": "Andreasik",
                "avatar": "http://localhost:8000/media/avatars/avatar4.png"
            },
            "position": {
                "id": 6,
                "project": 6,
                "title": "Signal Processing Engineer",
                "specialization_detail": {
                    "id": 1,
                    "name": "Software Developer"
                },
                "required_skills": [
                    {
                        "id": 8,
                        "name": "Machine Learning"
                    },
                    {
                        "id": 9,
                        "name": "Python"
                    },
                    {
                        "id": 21,
                        "name": "Signal Processing"
                    }
                ],
                "people_required_min": 2,
                "people_required_max": 2,
                "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements.",
                "current_interested": 11,
                "application_status": "pending"
            },
            "applied_at": "2025-04-12T21:53:03.906972+02:00",
            "status": "pending"
        }
    ]
}
];


export const getProject = async (idOrSlug: number | string): Promise<Project | null> => {
  const id = typeof idOrSlug === "string" ? parseInt(idOrSlug, 10) : idOrSlug;

  if (isNaN(id)) return null;

  return projects.find((project) => project.id === id) || null;
};
