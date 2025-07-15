// app/announcement/details/page.jsx
export default function AnnouncementDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c2e2c] to-[#173824] text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Announcement Details</h1>
      <p className="text-lg text-gray-300 mb-6">
        Here's more information about our latest announcement and offer. Stay tuned!
      </p>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Special Offer</h2>
        <p>🎉 Enroll now and get exclusive access to premium content.</p>
      </div>
    </div>
  );
}
