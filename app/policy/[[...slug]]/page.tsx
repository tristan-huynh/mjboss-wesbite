import { Typography } from "@/components/typography";

export const metadata = {
  title: "Privacy Policy",
  description: "Please review the privacy policy for our website.",
};

export default function TermsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Typography>
      <main className="max-w-3xl w-full px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 border-b pb-2">Privacy Policy</h1>
        <p className="text-sm mb-8">Last updated: May 26, 2025</p>

        <section className="mb-10">
          <p>
            Thank you for using our Discord bot service (the “Service”) hosted at <strong>mjboss.s7technologies.com</strong> (the
            “Website”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you interact with our Discord bot (“Bot”) and our Website. By using the Service, you agree to the collection
            and use of information as described here.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>User Prompts</strong>: When the bot is pinged, we collect your user ID, timestamp, and prompt
              content for response generation.
            </li>
            <li>
              <strong>Trigger Word Usage</strong>: We log specific trigger word usage by user ID and timestamp to enable
              features like moderation or alerts.
            </li>
            <li>
              <strong>Guild Intent Toggles</strong>: Guild ID is stored when feature toggles are used.
            </li>
            <li>
              <strong>Moderation Logging</strong>: User ID and warning information is stored when feature toggles are used.
            </li>
            <li>
              <strong>Guild Autoroles</strong>: We store guild ID and role ID for managing autorole configurations.
            </li>
            <li>
              <strong>Message History Access</strong>: The bot reads the 10 prior messages (content, user ID, and
              timestamps) to provide context-aware replies.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside">
            <li>To operate and respond with the Bot’s core features.</li>
            <li>To analyze usage and improve Bot accuracy and performance.</li>
            <li>To enforce terms and maintain system security.</li>
            <li>To provide user support when requested.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">3. Data Sharing and Disclosure</h2>
          <ul className="list-disc list-inside">
            <li><strong>With Consent</strong>: If you explicitly agree to share.</li>
            <li><strong>Service Providers</strong>: Under confidentiality agreements for hosting and maintenance.</li>
            <li><strong>Legal Requirements</strong>: If required to comply with laws or regulations.</li>
            <li><strong>Protection of Rights</strong>: To protect against fraud, misuse, or violations.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
          <p>
            All data collected by the Bot is stored permanently unless you explicitly request deletion. To request deletion of your personal data or any stored information, please contact us at <strong>contact@s7technologies.com</strong>. We will honor deletion requests in accordance with applicable laws and remove your data from storage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">5. Children's Privacy</h2>
          <p>
            This website does not knowingly target or collect personal information from children. As a parent/guardian, please contact us if you believe your child is participating in an activity involving personal information on our website, and you have not received a notification or request for consent. We do not use your supplied contact details for marketing or promotional purposes. 
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">6. Third-Party Links and Integrations</h2>
          <p>
            Our Bot uses the <a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Discord API</a>.
            Please refer to Discord's privacy policy. External integrations (e.g., Twitch) are governed by their respective policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
          <p>
            You are entitled to restrict or object to our use of your data, while retaining the right to use your personal information for your own purposes. You have the right to opt out of data about you being used in decisions based solely on automated processing. 

            Feel free to contact us if you have any concerns or questions about how we handle your data and personal information at <strong>contact@s7technologies.com</strong>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
          <p>
            At our discretion, we may update this policy to reflect current acceptable practices. We will take reasonable steps to let users know about changes via our website. Your continued use of this site after any changes to this policy will be regarded as acceptance of our practices around data and personal information. 
          </p>
        </section>

        <p>
          By using our Service, you acknowledge and agree to this Privacy Policy.
        </p>
      </main>
    </Typography>
    </div>
  );
}
