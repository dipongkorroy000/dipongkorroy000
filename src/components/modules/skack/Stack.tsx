import Image from "next/image";
import {STACK_DATA} from "./stack";

export default function Stack() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-5 max-md:py-10 text-foreground">
      <h2 className="text-2xl font-bold text-center mb-16 max-md:mb-8 max-md:text-xl max-md:text-start px-8">2. My Stack</h2>

      <div className="md:space-y-16 px-4 space-y-10">
        {STACK_DATA.map((category) => (
          <div key={category.title} className="grid grid-cols-1 md:grid-cols-[200px_1fr] md:gap-8 gap-4 pb-2">
            {/* Left title */}
            <h2 className="md:text-2xl text-gray-500 tracking-wide text-lg font-bold">{category.title}</h2>

            {/* Right items */}
            <div className="flex flex-wrap gap-6 md:justify-end">
              {category.items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                  <div className="w-8 h-8 relative">
                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
