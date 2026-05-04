import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const LOGO_URL = "https://media.base44.com/images/public/user_69b18e558b14ccaa06b413c4/8c30f1a7c_logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="PANACEA" className="h-10 w-auto mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium botanicals and artful culture in the heart of Corpus Christi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Navigate</h4>
            <div className="flex flex-col gap-3">
              {['/', '/products', '/events', '/merch', '/about', '/contact'].map(path => (
                <Link key={path} to={path} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Visit</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary/70" />
                <span>4914 Everhart Rd<br/>Corpus Christi, TX 78411</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary/70" />
                <span>(361) 261-3880</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-primary/70" />
                <span>Mon–Sat: 10 AM – 10 PM<br/>Sunday: Closed</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Legal</h4>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Must be 21 or older to purchase. Products are intended for adult use only. PANACEA HASH GARDEN does not ship products. All sales are final and in-store only.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-xs text-muted-foreground/40">
              © {new Date().getFullYear()} PANACEA HASH GARDEN. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-muted-foreground/60">
              <button
                onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                  modal.innerHTML = `
                    <div class="bg-card rounded-2xl max-w-2xl max-h-96 overflow-y-auto p-8">
                      <h3 class="text-xl font-semibold mb-4 text-foreground">Terms of Service</h3>
                      <div class="text-sm text-muted-foreground space-y-3">
                        <p>By using this website, you agree to the following terms:</p>
                        <ul class="list-disc list-inside space-y-1">
                          <li>You must be 21 years or older to use this site.</li>
                          <li>All products are intended for legal use only.</li>
                          <li>Panacea does not promote illegal activity.</li>
                          <li>Information provided is not medical advice.</li>
                          <li>Product availability and pricing may change without notice.</li>
                          <li>Panacea is not liable for misuse of products.</li>
                          <li>All website content is owned by Panacea and may not be reused without permission.</li>
                        </ul>
                      </div>
                      <button onclick="this.closest('.fixed').remove()" class="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Close</button>
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => {
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4';
                  modal.innerHTML = `
                    <div class="bg-card rounded-2xl max-w-2xl max-h-96 overflow-y-auto p-8">
                      <h3 class="text-xl font-semibold mb-4 text-foreground">Privacy Policy</h3>
                      <div class="text-sm text-muted-foreground space-y-3">
                        <p>Panacea respects your privacy.</p>
                        <p>We may collect basic information such as your name, phone number, email, and any messages you submit.</p>
                        <p>This information is used to respond to inquiries, provide updates (if opted in), and improve our services.</p>
                        <p>We do not sell your personal information.</p>
                        <p>By submitting your information, you agree to receive text messages or emails from Panacea. You can opt out at any time.</p>
                        <p>If you have questions, contact us directly.</p>
                      </div>
                      <button onclick="this.closest('.fixed').remove()" class="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Close</button>
                    </div>
                  `;
                  document.body.appendChild(modal);
                }}
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </button>
            </div>
            <p className="text-xs text-muted-foreground/40 tracking-widest">
              21+ ONLY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}