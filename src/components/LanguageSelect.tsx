'use client';

import * as React from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Language {
  label: string;
  value: string;
}

interface LanguageSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  languages: Language[];
  className?: string;
  isLight?: boolean;
}

export const LanguageSelect: React.FC<LanguageSelectProps> = ({
  value,
  onValueChange,
  languages,
  className,
  isLight = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedLanguage = languages.find(lang => lang.value === value);

  const handleSelect = (langValue: string) => {
    onValueChange(langValue);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-colors outline-none border-0 bg-transparent",
          isLight ? "text-foreground hover:opacity-70" : "text-primary-foreground hover:opacity-70"
        )}
      >
        <Globe className="w-4 h-4" />
        <span>{selectedLanguage?.label}</span>
        <ChevronDown className={cn("h-3 w-3 opacity-50 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-max overflow-hidden rounded-lg border bg-popover shadow-lg z-[100]">
          <div className="p-1">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => handleSelect(lang.value)}
                className="relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-7 pr-3 text-sm outline-none hover:bg-accent hover:text-accent-foreground text-left whitespace-nowrap"
              >
                {lang.value === value && (
                  <span className="absolute left-1.5 flex h-3.5 w-3.5 items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                )}
                <span>{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
