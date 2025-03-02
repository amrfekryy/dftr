import fs from "fs";
import { NextResponse } from "next/server";

const FILE_PATH = "nav.json";

// Simulated default navigation data
const DEFAULT_NAV = [
  { id: 1, title: "Dashboard", target: "/" },
  {
    id: 2,
    title: "Job Applications",
    target: "/applications",
    children: [
      { id: 7, title: "John Doe", target: "/applications/john-doe" },
      { id: 10, title: "James Bond", target: "/applications/james-bond" },
      { id: 20, title: "Scarlett Johansson", target: "/applications/scarlett-johansson", visible: false },
    ],
  },
  {
    id: 3,
    title: "Companies",
    target: "/companies",
    visible: false,
    children: [
      { id: 8, title: "Tanqeeb", target: "/companies/1" },
      { id: 9, title: "Daftra", target: "/companies/2" },
      { id: 11, title: "TBD", target: "/companies/14" },
    ],
  },
  {
    id: 4,
    title: "Qualifications",
    children: [
      { id: 14, title: "Q1", target: "/q1" },
      { id: 15, title: "Q2", target: "/q2" },
    ],
  },
  { id: 5, title: "About", target: "/about" },
  { id: 6, title: "Contact", target: "/contact" },
];

export async function GET() {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf8");
      return NextResponse.json(JSON.parse(data));
    } else {
      return NextResponse.json(DEFAULT_NAV);
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to read navigation data" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const items = await req.json();

    if (!Array.isArray(items)) {
      return NextResponse.json({ error: "Bad Request" }, { status: 400 });
    }

    fs.writeFileSync(FILE_PATH, JSON.stringify(items, null, 2));

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save navigation data" }, { status: 500 });
  }
}
