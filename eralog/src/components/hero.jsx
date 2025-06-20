import { Iphone15Pro} from "@/components/magicui/iphone-15-pro";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Boxes} from "@/components/background";
import { cn } from "@/lib/utils";

export function Hero(){
    const AppleLogo = (
    <svg viewBox="0 0 22.773 22.773" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  
        className="h-4 w-4 fill-current text-primary"
        aria-hidden="true" >
        <g>
            <g>
                <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                    c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
                <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                    c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                    c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                    c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                    c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                    c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
            </g>
            
        </g>
    </svg>
        
    );
    const GooglePlayLogo = (
    <svg  viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-primary"
        aria-hidden="true">
    <path  d="M2 3.65629C2 2.15127 3.59967 1.18549 4.93149 1.88645L20.7844 10.2301C22.2091 10.9799 22.2091 13.0199 20.7844 13.7698L4.9315 22.1134C3.59968 22.8144 2 21.8486 2 20.3436V3.65629ZM19.8529 11.9999L16.2682 10.1132L14.2243 11.9999L16.2682 13.8866L19.8529 11.9999ZM14.3903 14.875L12.75 13.3608L6.75782 18.8921L14.3903 14.875ZM12.75 10.639L14.3903 9.12488L6.75782 5.10777L12.75 10.639ZM4 5.28391L11.2757 11.9999L4 18.7159V5.28391Z" />
    </svg>
    );

    return (


    // <div className="min-h-screen relative overflow-hidden flex flex-col justify-center rounded-lg">
    //   <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    //   <Boxes />
    // <div className="flex flex-col md:flex-row items-center gap-4 md:gap-16 w-full px-20 sm:px-6 lg:px-8 ">
        
    //     <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 z-20">
    //        <h3 className="text-xl font-medium text-primary">Eralog</h3>
    //        <h1 className=" tracking-tight">
    //         Discover a smarter, simpler way to manage your expenses and finances.
    //        </h1>
          
    //        <div className="flex flex-col sm:flex-row gap-4 mt-4">
    //          <InteractiveHoverButton logo={AppleLogo}>
    //            Download for iOS
    //          </InteractiveHoverButton>
    //          <InteractiveHoverButton logo={GooglePlayLogo}>
    //            Download for Android
    //          </InteractiveHoverButton>
    //        </div>
    //      </div>

    //      <div className="z-20">
    //        <Iphone15Pro src="./sc1.webp" />
    //      </div>
    //    </div>
    // </div>
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center rounded-lg p-4">
      <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

     
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 z-20">

        {/* Left Column: Text and Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h3 className="text-xl font-medium text-primary">Eralog</h3>
          <h1 className=" font-bold tracking-tight">
            A simpler way to manage your expenses and finances.
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <InteractiveHoverButton logo={AppleLogo}>
              Download for iOS
            </InteractiveHoverButton>
            <InteractiveHoverButton logo={GooglePlayLogo}>
              Download for Android
            </InteractiveHoverButton>
          </div>
        </div>

        {/* Right Column: iPhone Image */}
        <div className="flex-shrink-0">
          <Iphone15Pro src="./sc1.webp" />
        </div>
      </div>
    </div>
    );
}