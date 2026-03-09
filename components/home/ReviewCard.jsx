// app/home/Testimonials.jsx
"use client";
// const userImages = [
//   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
// ];
// === রিভিউ কার্ড ===
export const ReviewCard = ({ review }) => (
  <div className="mx-2 w-[85vw] max-w-[450px] flex-shrink-0 rounded-2xl border border-white/10 bg-[#151515] p-5 transition-colors duration-300 hover:border-blue-500/30 group sm:mx-4 sm:p-8">

    <div className="flex gap-1 mb-4 text-yellow-500">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ))}
    </div>

    <p className="mb-6 text-base italic leading-relaxed text-gray-300 transition-colors group-hover:text-white sm:text-lg">
      &ldquo;{review.comment}&rdquo;
    </p>

    <div className="flex items-center gap-4">

      <div>
        <h4 className="font-bold text-white text-base">{review.name}</h4>
        <p className="text-gray-500 text-sm">{review.role}</p>
      </div>
    </div>
  </div>
);
