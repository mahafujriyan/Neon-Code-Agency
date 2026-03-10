
"use client";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const { t } = useLanguage();
  const formRef = useRef(null);

  if (!t) return null;

  // ======== EMAIL SEND FUNCTION =====
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };
 

  return (
    <main className="bg-black text-white min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">

        {/* === ১. হেডার সেকশন === */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Lets{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </motion.h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.contact.desc}
          </p>
        </div>

        {/* === ২. মেইন কন্টেন্ট === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

         
          <div className="space-y-8">
            <ContactCard
              icon={<MapIcon />}
              title={t.contact.info.address_title}
              value={t.contact.info.address}
              color="text-blue-400"
              bgColor="bg-blue-500/10"
              borderColor="hover:border-blue-500/50"
            />

            <ContactCard
              icon={<PhoneIcon />}
              title={t.contact.info.phone_title}
              value={t.contact.info.phone}
              color="text-green-400"
              bgColor="bg-green-500/10"
              borderColor="hover:border-green-500/50"
            />

            <ContactCard
              icon={<MailIcon />}
              title={t.contact.info.email_title}
              value={t.contact.info.email}
              color="text-purple-400"
              bgColor="bg-purple-500/10"
              borderColor="hover:border-purple-500/50"
            />
          </div>

          {/* --- ডান পাশ: কন্টাক্ট ফর্ম --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#101010] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>

            {/* ===== FORM ===== */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-400 ml-1">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  {t.contact.form.subject}
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-400 ml-1">
                  {t.contact.form.message}
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#050505] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:-translate-y-1"
              >
                {t.contact.form.btn}
              </button>
            </form>
          </motion.div>
        </div>

        {/* === ৩. ম্যাপ সেকশন === */}
        <div className="mt-24 rounded-3xl overflow-hidden border border-white/10 h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.0190847164113!2d89.5360206!3d22.8219352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9b214e642ef5%3A0x342c3a896af0f9e0!2sNeonCode.co!5e0!3m2!1sen!2sbd!4v1737040000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ContactCard({ icon, title, value, color, bgColor, borderColor }) {
  return (
    <div className={`flex items-center gap-5 p-6 border border-white/10 rounded-2xl bg-[#101010] transition-colors duration-300 ${borderColor}`}>
      <div className={`w-14 h-14 ${bgColor} ${color} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <p className="text-gray-400">{value}</p>
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11a3 3 0 100-6 3 3 0 000 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);
