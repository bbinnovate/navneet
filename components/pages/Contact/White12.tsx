'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import toast from 'react-hot-toast';

export default function White12() {
  const offices = [
    {
      city: "Mumbai",
      address: "1B, Benefice Business House, Mumbai",
    },
    {
      city: "Bengaluru",
      address: "30/A 14th Cross, HSR Layout, 560102",
    },
    {
      city: "Delhi",
      address: "B-36, Pusa Road, Old Rajinder Nagar, 110005",
    },
    {
      city: "Chennai",
      address: "C.P. Ramaswamy Road, Alwarpet, 600018",
    },
    {
      city: "Hyderabad",
      address: "Kalki Plaza, West Maredpalley, 500026",
    },
    {
      city: "Nashik",
      address: "Nirman Inspire, 2nd Floor, Nashik 422001",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    board: '',
    schoolName: '',
    city: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Comprehensive validation
    if (
      !formData.name || 
      !formData.phone || 
      !formData.email || 
      !formData.role || 
      !formData.board || 
      !formData.schoolName || 
      !formData.city || 
      !formData.interest || 
      !formData.message
    ) {
      toast.error('Please fill in all fields before submitting.');
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, 'contactEnquiries'), {
        ...formData,
        status: 'New',
        createdAt: serverTimestamp()
      });
      toast.success('Your demo request has been submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        role: '',
        board: '',
        schoolName: '',
        city: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sec sec-white">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div>
          <p className="tag green-text">Find Us</p>
          <h2 className="heading blue-text mb-3">Across India.</h2>

          <p
            className="subtitle dark-text mb-3"
            style={{ marginBottom: "1.5rem" }}
          >
            Six offices. One mission.
          </p>

          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "20px" }}>📞</span>

              <div>
                <div className="subtitle blue-text">Toll Free</div>

                <a
                  href="tel:18002666676"
                  className="subtitle dark-text"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  1800 266 6676
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <span style={{ fontSize: "20px" }}>✉️</span>

              <div>
                <div className="subtitle blue-text">Email</div>

                <a
                  href="mailto:info@navneettoptech.com"
                  className="subtitle dark-text"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  info@navneettoptech.com
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
            }}
          >
            {offices.map((office, index) => (
              <div className="office-card" key={index}>
                <div className="title blue-text mb-3">
                  🏙️ {office.city}
                </div>

                <div className="subtitle dark-text">
                  {office.address}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-box">
          <h2 className="heading blue-text mb-3">Book a Free Demo</h2>

         <p
            className="subtitle dark-text" >
            Our team will reach out within 24 hours to schedule your
            personalised walkthrough.
          </p>

          <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Priya Sharma"
                  required
                />
              </div>

              <div className="form-group">
                <label>Mobile Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your WhatsApp number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>School Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="principal@school.com"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Your Role</label>
                <select name="role" value={formData.role} onChange={handleChange} required>
                  <option value="">Select Role</option>
                  <option value="School Owner">School Owner</option>
                  <option value="Principal">Principal</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Coordinator">Coordinator</option>
                </select>
              </div>

              <div className="form-group">
                <label>Board *</label>
                <select name="board" value={formData.board} onChange={handleChange} required>
                  <option value="">Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="CBSE Pattern">CBSE Pattern</option>
                  <option value="Maharashtra State Board">Maharashtra State Board</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>School Name *</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="Full school name"
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>I'm interested in *</label>
              <select name="interest" value={formData.interest} onChange={handleChange} required>
                <option value="">Select Product</option>
                <option value="TopSchool LMS">TopSchool LMS</option>
                <option value="TopClass">TopClass</option>
                <option value="TopAssess">TopAssess</option>
                <option value="TopSeries">TopSeries</option>
                <option value="Hardware & IFP">Hardware & IFP</option>
                <option value="All Products">All Products</option>
              </select>
            </div>

            <div className="form-group">
              <label>Anything else? *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Optional — number of students, current setup, goals"
                required
              ></textarea>
            </div>

            <div className="flex w-full gap-3 mt-4">
              <button type="submit" disabled={loading} className="btn-gold w-full flex justify-center items-center">
                {loading ? 'Submitting...' : 'Book My Free Demo →'}
              </button>
            </div>
            
            <p
              className="subtitle dark-text mb-3" 
              style={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              By submitting, you agree to receive communications from NAVNEET TOPTECH.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}