"use client"

import type React from "react"

import { useState } from "react"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"
import AnimatedSection from "./animated-section"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<{
    status: "idle" | "submitting" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: "submitting", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e7c24c82-13a4-4e29-9dc4-34450223982a", // replace with yours if different
          name: formData.name,
          email: formData.email,
          subject: "Message from website" + formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          status: "success",
          message: "Your message has been sent successfully! Thank you",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFormStatus({
          status: "error",
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        status: "error",
        message: "Failed to send message. Please check your network.",
      });
    }
  };


  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900/20 to-black"
    >
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection type="fade-slide" direction="up">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400 rounded mb-8"></div>
            <p className="text-gray-300 text-center max-w-2xl font-poppins font-light">
              Have a project in mind or want to discuss a collaboration? Feel
              free to reach out using the form below or through my contact
              information.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection type="fade-slide" direction="right" delay={0.2}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <MapPin className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Location</h4>
                      <p className="text-gray-400 text-sm">
                        Chicago, Illinois, USA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <Mail className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-gray-400 text-sm">
                        paritoshnvaghasiya@gmail.com
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <Phone className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div> */}
                  {/* <div className="flex items-start">
                    <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                      <Clock className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Working Hours
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Monday - Friday: 9AM - 5PM PST
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </AnimatedSection>

            {/* Map */}
            {/* <AnimatedSection type="fade-slide" direction="right" delay={0.3}>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 h-64">
                <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-400 mr-2" size={24} />
                  <span className="text-gray-400">Map Location</span>
                </div>
              </div>
            </AnimatedSection> */}
          </div>

          {/* Contact Form */}
          <AnimatedSection
            type="fade-slide"
            direction="left"
            delay={0.2}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <input
                  type="text"
                  name="botcheck"
                  style={{ display: "none" }}
                />
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    disabled={formStatus.status === "submitting"}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors flex items-center justify-center w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus.status === "submitting" ? (
                      <>
                        <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                {formStatus.status === "success" && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-md text-sm animate-fadeIn">
                    {formStatus.message}
                  </div>
                )}
                {formStatus.status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-md text-sm animate-fadeIn">
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
