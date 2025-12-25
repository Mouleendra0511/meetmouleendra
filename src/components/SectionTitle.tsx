import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ title, subtitle, className, align = "center" }: SectionTitleProps) => {
  return (
    <div className={cn(
      "mb-12 md:mb-16",
      align === "center" ? "text-center" : "text-left",
      className
    )}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
