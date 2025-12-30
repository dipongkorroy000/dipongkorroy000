import {ExternalLink, Github} from "lucide-react";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-20 max-md:py-10 max-w-5xl mx-auto text-foreground">
      <h2 className="text-2xl font-bold text-center mb-10 max-md:mb-2 max-md:text-xl max-md:text-start px-8">3. Featured Projects</h2>

      <div className="space-y-10 px-4 max-md:space-y-5">
        {/* project 1 */}
        <div className="flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.1 Local Guide Platform</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              This project is a Local Guide Platform where anyone can create a guide account by fulfilling certain requirements. Tourists can then browse
              available guides and book them for their tours, making it easier to connect travelers with trusted local experts.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Next.js", "Express", "Prisma", "PostgreSQL", "Stripe"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src="https://i.ibb.co.com/pjG1zdpN/Screenshot-from-2025-12-22-12-32-05.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            {/* Icons always visible at bottom-left */}
            <div className="absolute bottom-3 right-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l2-project-008" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-black hover:text-chart-3" />
              </a>
              <a href="https://l2-assignment-008-frontend-577l.vercel.app" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-black hover:text-chart-3" />
              </a>
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="flex flex-col-reverse md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-2 md:space-y-0">
          <div className="relative flex-1 max-md:mt-5">
            <Image
              src="https://i.ibb.co.com/h1ymJjZ0/Screenshot-from-2025-12-22-14-04-22.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            {/* Icons always visible at bottom-left */}
            <div className="absolute bottom-3 left-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l2-project-006" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-black hover:text-chart-3" />
              </a>
              <a href="https://l2-assignment-006.vercel.app/" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-black hover:text-primary" />
              </a>
            </div>
          </div>

          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.2 Parcel Delivery Web Application</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              This project is a Parcel Delivery Application where users can create accounts to send and receive parcels. Delivery agents must meet certain
              requirements to register, and customers can book them for secure and timely deliveries. The system manages parcel tracking, pickup requests, and
              delivery confirmations, making the process smooth and reliable for both senders and receivers.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "Redux", "Express", "MongoDB", "SSLCommerz"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="flex flex-col md:flex-row p-5 max-md:p-3 items-center md:space-x-6 space-y-6 md:space-y-0">
          <div className="space-y-5 flex-1 max-md:space-y-2">
            <h2 className="text-3xl max-md:text-xl font-bold">3.3 TaskNet Web Application</h2>
            <p className="text-justify leading-relaxed tracking-wide max-md:text-sm">
              A freelancing-style web app built with Node.js, Firebase, Stripe, and MongoDB. Supports three roles — Admin, Buyer, and Worker — with secure
              authentication, task management, and payment integration.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "Firebase", "Node.js", "MongoDB", "Stripe"].map((tech) => (
                <span key={tech} className="text-sm font-medium text-primary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <Image
              src="https://i.ibb.co.com/84LnsZdr/Screenshot-from-2025-12-22-14-00-43.png"
              alt="Project"
              width={1200}
              height={800}
              className="rounded-md object-cover w-full h-auto"
            />

            {/* Icons always visible at bottom-left */}
            <div className="absolute bottom-3 right-5 flex gap-5">
              <a href="https://github.com/dipongkorroy000/l1-project-012" target="_blank" rel="noopener noreferrer" className="transition-colors">
                <Github className="text-black hover:text-chart-3" />
              </a>
              <a href="https://project-012-client.vercel.app" target="_blank" rel="noopener noreferrer" className=" transition-colors">
                <ExternalLink className="text-black hover:text-chart-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
