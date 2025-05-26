import { Typography } from "@/components/typography";

export const metadata = {
  title: "Terms of Service",
  description: "Please review the terms of service for our website.",
};

export default function TermsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Typography>
      <main className="max-w-3xl w-full px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>
        <p className="text-sm mb-8">Last updated: May 26, 2025</p>

        <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using this service ("Service") provided by [Your Company Name] ("we", "us", "our"), you
              agree to be bound by these Terms of Service ("Terms"). If you do not agree, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">2. Service Use</h2>
            <p>
              You agree to comply with all applicable laws and platform policies. You may not use the Service for any
              fraudulent, unlawful, or harmful activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">3. Data Collection</h2>
            <p>
              We collect data as described in our Privacy Policy, including user inputs, identifiers, and configuration
              settings. All data is retained unless you request deletion per the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
            <p>
              You are responsible for the content you submit and for maintaining the confidentiality of your account
              credentials. You agree not to misuse the Service or its features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">5. Availability and Changes</h2>
            <p>
              We strive to maintain reliable access but do not guarantee uninterrupted service. We may modify or
              discontinue features at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to the Service for violations of these Terms or at our
              discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, S7 Technologies will not be liable for any indirect,
              incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Michigan, without regard to conflict of laws
              principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes indicates
              acceptance of the revised Terms.
            </p>
          </section>

      </main>
    </Typography>
    </div>
  );
}
