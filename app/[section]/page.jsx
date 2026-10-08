import { notFound } from "next/navigation";
import Home from "../page";

const sections = ["about", "experience", "projects", "skills", "education", "contact"];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default async function SectionPage({ params }) {
  const { section } = await params;

  if (!sections.includes(section)) {
    notFound();
  }

  return <Home initialSection={section} />;
}
