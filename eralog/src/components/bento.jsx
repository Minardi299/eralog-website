
import { ArrowRight, BarChart, DollarSign, Package, TrendingUp, Wallet } from 'lucide-react';

// --- UTILITY FUNCTION (from shadcn/ui) ---
// This is a helper function to merge Tailwind CSS classes conditionally.
// You would typically import this from `lib/utils` in a shadcn project.
import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// --- CORE BENTO GRID COMPONENTS ---

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
 * It's designed to be flexible and composable.
 */
const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        // Base styling for each grid item:
        // - `row-span-1` is the default span
        // - `rounded-xl` for curved corners
        // - `group/bento` for hover effects
        // - `transition` for smooth animations
        // - `shadow-input` is a custom shadow class you might define
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-card text-card-foreground border border-transparent justify-between flex flex-col space-y-4",
        className // Allows for overriding styles, like background colors or spanning multiple rows/cols
      )}
    >
      {/* The header is typically an image or a visual element */}
      {header}
      
      {/* The main content of the grid item */}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-xs text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// --- DEMO COMPONENT & DATA ---

/**
 * This is the main component that showcases the Bento Grid.
 * The `items` array is where you define the content and layout for each grid item.
 * To add, remove, or change an item, you just need to modify this array.
 */
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
            // The className is crucial for layout and styling
            className={cn(
              item.className, 
              // Add a subtle border to all items, unless they have their own border style
              !item.className?.includes("border-none") && "border-border"
            )}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

// A placeholder component for the header of a grid item
const Skeleton = ({ className }) => (
  <div
    className={cn(
      "flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900",
      className
    )}
  ></div>
);

// Another placeholder, this one specifically for images
const ImageHeader = ({ src }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
        <img 
            src={src} 
            alt="Feature Image"
            className="object-cover w-full h-full"
            // Fallback in case the image fails to load
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/27272a/ffffff?text=Image+Not+Found'; }}
        />
    </div>
);



const items = [
    {
      title: "Budgeting Made Easy",
      description: "Create and manage your budgets effortlessly. Stay on top of your financial goals.",
      header: <ImageHeader src="https://placehold.co/600x400/7c3aed/ffffff?text=Budgeting" />,
      icon: <Wallet className="h-4 w-4 text-neutral-500" />,
      // This item will span 1 column on medium screens and up
      className: "md:col-span-1",
    },
  {
    title: "Simplified Expense Tracking",
    description: "Log your daily expenses in seconds with our intuitive interface.",
    header: <ImageHeader src="https://placehold.co/600x400/27272a/7c3aed?text=Expenses" />,
    icon: <DollarSign className="h-4 w-4 text-neutral-500" />,
    // This item will span 2 columns on medium screens and up
    className: "md:col-span-2",
  },
  {
    title: "Join Eralog Today",
    description: "Start your journey towards financial freedom.",
    header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 items-center justify-center">
            <h3 className="text-4xl font-bold text-primary-foreground tracking-tighter">Get Started</h3>
        </div>
    ),
    icon: <ArrowRight className="h-4 w-4 text-primary-foreground/80" />,
    className: "md:row-span-2 bg-primary text-primary-foreground border-none",
  },
  {
    title: "AI-Powered Insights",
    description: "Let our AI analyze your spending and provide actionable insights.",
    header: <Skeleton />,
    icon: <BarChart className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-1",
  },
 {
    title: "AI-Powered Insights",
    description: "Let our AI analyze your spending and provide actionable insights.",
    header: (<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary via-primary/80 to-primary/60 items-center justify-center">
            <h3 className="text-4xl font-bold text-primary-foreground tracking-tighter">Text</h3>
        </div>),
    icon: <BarChart  />,
    className: "md:col-span-1 bg-primary text-primary-foreground border-none",
  },
  {
    title: "All Your Accounts",
    description: "Connect bank accounts, credit cards, and more.",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-accent items-center justify-center">
          <Package className="h-16 w-16 text-accent-foreground/70" />
      </div>
    ),
    icon: <Package className="h-4 w-4 text-accent-foreground" />,
    className: "md:col-span-2 bg-accent text-accent-foreground border-none",
  },
];
