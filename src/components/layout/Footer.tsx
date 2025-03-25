
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold">
                K<span className="text-blue-400">Point</span>
              </h2>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              One Enterprise Video Platform. All Videos. Reimagine how you communicate with KPoint's 
              integrated video creation, engagement, and analytics solution.
            </p>
            <p className="text-slate-400 text-sm">
              Trusted by top enterprises with 1M+ video views daily.
            </p>
          </div>
          
          {/* Products & Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products & Features</h3>
            <ul className="space-y-3">
              <li><Link to="/products-features#xpresso" className="text-slate-300 hover:text-white transition-colors">XPRESSO</Link></li>
              <li><Link to="/products-features#koel" className="text-slate-300 hover:text-white transition-colors">KOEL</Link></li>
              <li><Link to="/products-features#play" className="text-slate-300 hover:text-white transition-colors">PLAY</Link></li>
              <li><Link to="/products-features#fab" className="text-slate-300 hover:text-white transition-colors">FAB</Link></li>
              <li><Link to="/products-features#tube" className="text-slate-300 hover:text-white transition-colors">TUBE</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/resources#case-studies" className="text-slate-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/resources#blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources#support" className="text-slate-300 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/resources#kpoint-now" className="text-slate-300 hover:text-white transition-colors">KPoint Now</Link></li>
              <li><Link to="/careers" className="text-slate-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li><Link to="/contact-us" className="text-slate-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/demo" className="text-slate-300 hover:text-white transition-colors">Request a Demo</Link></li>
              <li><a href="mailto:support@kpoint.com" className="text-slate-300 hover:text-white transition-colors">support@kpoint.com</a></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} KPoint Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">Terms</Link>
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link to="/cookies" className="text-slate-400 hover:text-white text-sm transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
