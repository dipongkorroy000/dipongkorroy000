import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
          <div className="relative grid size-28 place-items-center rounded-full border border-border/70 bg-card/70 shadow-lg backdrop-blur-sm">
            <Image src="/brand-d.svg" alt="Dipongkor Roy logo" width={72} height={72} className="drop-shadow-sm" priority />
          </div>
          <div className="absolute -inset-2 animate-spin rounded-full border-2 border-primary/35 border-t-primary" />
        </div>

        <div className="w-56 max-w-[70vw] space-y-2">
          <p className="text-center text-sm font-medium text-muted-foreground">Loading website...</p>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
