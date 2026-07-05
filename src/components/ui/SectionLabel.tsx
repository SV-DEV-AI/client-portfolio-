import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center space-x-4 mb-8", className)}>
      <span className="w-12 h-px bg-accent-primary block" />
      <span className="text-sm font-bold uppercase tracking-widest text-accent-primary">
        {children}
      </span>
    </div>
  );
}
