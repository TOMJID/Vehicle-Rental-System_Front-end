import { cn } from "@/lib/utils";

function ExampleWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="bg-background flex h-screen w-full items-center justify-center">
      <div
        className={cn(
          "mx-auto flex min-h-screen w-full max-w-5xl min-w-0 flex-col items-center justify-center gap-2",

          className,
        )}
        {...props}
      />
    </div>
  );
}

export { ExampleWrapper };
