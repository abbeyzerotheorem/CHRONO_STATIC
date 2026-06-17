import { motion } from 'framer-motion';
import { PageTransition } from '../components/layout/PageTransition';
import { Breadcrumb } from '../components/ui/Breadcrumb';

interface LegalPageProps {
  title: string;
  label: string;
  breadcrumb: string;
  sections: { title: string; content: string }[];
}

export function LegalPage({ title, label, breadcrumb, sections }: LegalPageProps) {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: breadcrumb }]} className="mb-8" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-mono-xs text-sky-400 font-bold tracking-[0.2em] uppercase">// {label}</span>
            <h1 className="text-display text-white mt-2">{title}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-10 space-y-8"
          >
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-lg font-display font-bold text-white mb-3">{section.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export const privacySections = [
  { title: 'Information We Collect', content: 'We collect information you provide directly, such as your name, email address, shipping address, and payment information when you make a purchase. We also automatically collect certain information about your device and how you interact with our website.' },
  { title: 'How We Use Your Information', content: 'We use your information to process orders, communicate with you about your purchases, improve our products and services, and send you marketing communications if you have opted in. We never sell your personal data to third parties.' },
  { title: 'Data Security', content: 'We implement industry-standard security measures including 256-bit SSL encryption, secure payment processing through PCI-compliant partners, and regular security audits. Your data is stored on secure servers with restricted access.' },
  { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal data at any time through your account settings. You may also opt out of marketing communications and request a copy of your data.' },
  { title: 'Cookies', content: 'We use essential cookies for website functionality and analytics cookies to improve your experience. You can manage cookie preferences in your browser settings.' },
  { title: 'Contact', content: 'For privacy-related inquiries, contact our Data Protection Officer at privacy@chronostatic.com.' },
];

export const termsSections = [
  { title: 'General', content: 'By accessing and using CHRONO STATIC\'s website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
  { title: 'Products & Pricing', content: 'All prices are listed in USD and are subject to change without notice. We reserve the right to modify or discontinue products at any time. Product images are for illustration purposes and may vary from actual products.' },
  { title: 'Orders', content: 'We reserve the right to refuse or cancel any order. In the event of a pricing error, we will notify you and provide the option to confirm at the correct price or cancel.' },
  { title: 'Intellectual Property', content: 'All content on this website, including designs, text, images, and logos, is the intellectual property of CHRONO STATIC and is protected by applicable copyright and trademark laws.' },
  { title: 'Limitation of Liability', content: 'CHRONO STATIC shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or services.' },
  { title: 'Governing Law', content: 'These terms shall be governed by the laws of Norway, with any disputes resolved in the courts of Oslo.' },
];

export const shippingSections = [
  { title: 'Shipping Methods', content: 'We offer two shipping methods: Arctic Priority Express (2-3 business days) and Standard Tactical Delivery (5-7 business days). Free Arctic Priority shipping on all orders over $500 USD.' },
  { title: 'International Shipping', content: 'We ship to all countries worldwide. International delivery takes 7-14 business days depending on destination. Customs duties and taxes may apply and are the responsibility of the recipient.' },
  { title: 'Order Processing', content: 'Orders are processed within 1-2 business days. During peak seasons or new releases, processing may take up to 3-4 business days. You will receive a confirmation email with tracking information once your order ships.' },
  { title: 'Tracking', content: 'All orders include real-time tracking. You can monitor your shipment through your account dashboard or our Track Order page.' },
];

export const returnsSections = [
  { title: 'Return Policy', content: 'We offer a 30-day no-questions-asked return policy from the date of delivery. Items must be unused, in original condition, and with all tags attached. We provide a prepaid return label for your convenience.' },
  { title: 'Refund Process', content: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. Refunds are issued to the original payment method. You will receive an email confirmation once your refund has been processed.' },
  { title: 'Warranty', content: 'All CHRONO STATIC products come with a 5-year tactical warranty covering manufacturing defects and material failures. This warranty does not cover damage from misuse, unauthorized modifications, or normal wear and tear.' },
  { title: 'Exchanges', content: 'For size exchanges, please initiate a return and place a new order for the correct size. This ensures the fastest possible processing time.' },
];