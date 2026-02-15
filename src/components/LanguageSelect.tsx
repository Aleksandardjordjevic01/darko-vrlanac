'use client';

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
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
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-md text-xs transition-colors outline-none border-0 bg-transparent",
          isLight ? "text-foreground hover:opacity-70" : "text-primary-foreground hover:opacity-70",
          className
        )}
      >
        <Globe className="w-4 h-4" />
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="relative z-[100] min-w-[140px] overflow-hidden rounded-lg border bg-popover shadow-lg"
          position="popper"
          sideOffset={4}
          align="end"
        >
          <SelectPrimitive.Viewport className="p-1">
            {languages.map((lang) => (
              <SelectPrimitive.Item
                key={lang.value}
                value={lang.value}
                className="relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <SelectPrimitive.ItemIndicator>
                    <Check className="h-4 w-4" />
                  </SelectPrimitive.ItemIndicator>
                </span>
                <SelectPrimitive.ItemText>{lang.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};
