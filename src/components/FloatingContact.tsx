import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '918285927937'; // Your phone number
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your services.');

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              className="mb-2 flex flex-col gap-3"
            >
              {/* WhatsApp Button */}
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg shadow-green-500/40 transition-all hover:bg-green-600 hover:shadow-green-600/50"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-bold text-sm whitespace-nowrap">Chat on WhatsApp</span>
              </motion.button>

              {/* Call Button */}
              <motion.button
                onClick={handleCall}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-full bg-brand-primary px-5 py-3 text-white shadow-lg shadow-brand-primary/40 transition-all hover:bg-brand-primary/90 hover:shadow-brand-primary/50"
              >
                <Phone className="h-5 w-5" />
                <span className="font-bold text-sm whitespace-nowrap">Call Now</span>
              </motion.button>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                className="self-center rounded-full bg-slate-200 p-2 text-slate-700 shadow-md transition-all hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
          className={`relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-2xl transition-all ${
            isOpen
              ? 'bg-slate-700 shadow-slate-700/40 dark:bg-slate-600'
              : 'bg-gradient-to-br from-brand-primary to-brand-accent shadow-brand-primary/40'
          }`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-7 w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-7 w-7" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse Animation */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-primary/30" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
              </span>
            </>
          )}
        </motion.button>
      </div>
    </>
  );
}
