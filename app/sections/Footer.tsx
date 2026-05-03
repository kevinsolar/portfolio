import { LocalizedText } from "@/app/components/localized-text";
import { footer } from "@/app/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy;{new Date().getFullYear()} Kevin Solar.</p>
        <p>
          <LocalizedText value={footer.builtWith} />
        </p>
      </div>
    </footer>
  );
}
