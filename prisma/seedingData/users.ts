import { Role } from "@prisma/client";

export const users = [
  {
    email: "bobek@gumuil.com",
    acceptTerms: true,
    firstName: "Bobek",
    lastName: "Bobkowski",
    password: "$2b$12$eWDYbaFUpzIlEgnW9GiP.ON0U9u07XH2eObefVukgT0mFK1LUSU3e",
    role: Role.PARENT,
  },
  {
    email: "bobina@gumuil.com",
    acceptTerms: true,
    firstName: "Balbina",
    lastName: "Bobkowska",
    password: "$2b$12$eWDYbaFUpzIlEgnW9GiP.ON0U9u07XH2eObefVukgT0mFK1LUSU3e",
    role: Role.PARENT,
  },
  {
    email: "bambosz@gumuil.com",
    acceptTerms: true,
    firstName: "Bartosz",
    lastName: "Bambosz",
    password: "$2b$12$eWDYbaFUpzIlEgnW9GiP.ON0U9u07XH2eObefVukgT0mFK1LUSU3e",
    role: Role.PARENT,
  },
  {
    email: "barbara@gumuil.com",
    acceptTerms: true,
    firstName: "Barbara",
    lastName: "Barburka",
    password: "$2b$12$eWDYbaFUpzIlEgnW9GiP.ON0U9u07XH2eObefVukgT0mFK1LUSU3e",
    role: Role.TEACHER,
  },
  {
    email: "aneta@gumuil.com",
    acceptTerms: true,
    firstName: "Aneta",
    lastName: "Burka",
    password: "$2b$12$eWDYbaFUpzIlEgnW9GiP.ON0U9u07XH2eObefVukgT0mFK1LUSU3e",
    role: Role.TEACHER,
  },
];
