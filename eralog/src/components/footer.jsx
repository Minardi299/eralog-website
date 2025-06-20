
export function Footer(){
    const qrCodeUrl = 'https://youtube.com';
    const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeUrl}&format=svg`;


    return(
    <footer className=" w-full py-16 mt-8">
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="">Download for free</h2>
        <div className="bg-card mt-4 p-6   flex flex-col items-center gap-4">
          <img 
            loading="lazy"
            src={qrCodeImageUrl} 
            alt="Scan to download the app" 
            className="w-80 h-80  p-2" 
            // Fallback for the QR code image
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/ffffff/000000?text=QR+Code'; }}
          />
          <p className="">Scan to download</p>
        </div>
      </div>
    </footer>
    );
}