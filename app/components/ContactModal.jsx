'use client';
import { useState } from "react";

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', education: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or show success message)
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-md w-full relative">
        <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>×</button>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full border p-2 rounded" required />
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-2 rounded" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" className="w-full border p-2 rounded" required />
          <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="w-full border p-2 rounded" required />
          <input name="education" value={form.education} onChange={handleChange} placeholder="Education" className="w-full border p-2 rounded" required />
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}