
import { ArrowRight, BarChart, DollarSign, Package, TrendingUp, Wallet } from 'lucide-react';
// --- UTILITY FUNCTION (from shadcn/ui) ---
// This is a helper function to merge Tailwind CSS classes conditionally.
// You would typically import this from `lib/utils` in a shadcn project.
import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}


/**
 * BentoGrid is the main container that lays out the grid.
 * It uses CSS Grid and accepts a className to allow for further customization.
 */
const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        // The core grid layout:
        // - `grid` enables CSS Grid
        // - `md:auto-rows-[18rem]` sets a fixed row height on medium screens and up
        // - `grid-cols-1 md:grid-cols-3` sets 1 column on mobile and 3 on desktop
        // - `gap-4` adds space between grid items
        // - `max-w-7xl mx-auto` centers the grid and gives it a max-width
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * BentoGridItem represents a single cell within the grid.
 */
const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-card text-card-foreground justify-between flex flex-col space-y-4 relative",
        className
      )}
    >
      {href && (
        <a 
          href={href} 
          className="absolute inset-0 z-10"
          aria-label={title}
          target="_blank" 
        >
        </a>
      )}

      <div className="relative z-20 flex flex-col justify-between h-full pointer-events-none">
        {header}
        
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-xs">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};


export  function Bento() {
  return (
    <div className="bg-background min-h-screen w-full py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Features</h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            href={item.href}
            className={cn(
              item.className, 
              
            )}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ className }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-[6rem]  bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900",
      className
    )}
  ></div>
);

const ImageHeader = ({ src }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] overflow-hidden">
        <img 
            src={src} 
            alt="Feature Image"
            className="object-cover w-full h-full"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/27272a/ffffff?text=Image+Not+Found'; }}
        />
    </div>
);



const items = [
    {
      title: "Budgeting Made Easy",
      description: "Create and manage your budgets effortlessly. Stay on top of your financial goals.",
      header: <ImageHeader src="/sc2.webp" />,
      icon: <Wallet  />,
      // This item will span 1 column on medium screens and up
      className: "md:row-span-2",
    },
  {
    title: "Simplified Expense Tracking",
    description: "Log your daily expenses in seconds with our intuitive interface.",
    header: <ImageHeader src="/sc2.webp" />,
    icon: <DollarSign  />,
    // This item will span 2 columns on medium screens and up
    className: "md:col-span-2",
  },
  {
    title: "AI-Powered Insights",
    description: "Let our AI analyze your spending and provide actionable insights.",
    header: (<div className="flex flex-1 w-full h-full min-h-[6rem]  bg-gradient-to-br from-primary via-primary/80 to-primary/60 items-center justify-center">
            <h3 className="text-4xl font-bold text-primary-foreground tracking-tighter">Text</h3>
        </div>),
    icon: <BarChart  />,
    className: "md:col-span-1 bg-primary ",
  },
  {
    title: "AI-Powered Insights",
    description: "Let our AI analyze your spending and provide actionable insights.",
    header: <Skeleton />,
    icon: <BarChart />,
    className: "md:col-span-1",
  },
 {
    title: "Join Eralog Today",
    description: "Start your journey towards financial freedom.",
    header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem]  bg-gradient-to-br from-primary via-primary/80 to-primary/60 items-center justify-center">
            <h3 className="text-4xl font-bold text-primary-foreground tracking-tighter">Get Started</h3>
        </div>
    ),
    icon: <ArrowRight />,
    className: "md:col-span-1 bg-primary",
    href: "https://apps.apple.com"
  },
  {
    title: "All Your Accounts",
    description: "Connect bank accounts, credit cards, and more.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] bg-accent items-center justify-center">
          <Package className="h-16 w-16 text-accent-foreground/70" />
      </div>
    ),
    icon: <Package className="h-4 w-4 text-accent-foreground" />,
    className: "md:col-span-2 bg-accent text-accent-foreground ",
  },
];
