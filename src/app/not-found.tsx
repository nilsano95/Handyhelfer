import Link from "next/link";
import { CircleHelp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/section";
import { SearchBox } from "@/components/search/search-box";

export default function NotFound() {
  return (
    <PageContainer className="text-center">
      <span className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
        <CircleHelp className="size-10" aria-hidden="true" />
      </span>
      <h1 className="mt-6 text-3xl sm:text-4xl">Diese Seite gibt es leider nicht</h1>
      <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
        Vielleicht hat sich ein Tippfehler in die Adresse eingeschlichen. Suchen Sie einfach nach dem, was Sie brauchen:
      </p>
      <SearchBox className="mx-auto mt-8 max-w-2xl text-left" />
      <Button asChild size="lg" variant="outline" className="mt-8">
        <Link href="/">Zur Startseite</Link>
      </Button>
    </PageContainer>
  );
}
