import { isValidLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import type { Metadata } from "next";
import { translations } from "@/lib/translations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : 'en';
  const trans = translations[validLocale];

  return {
    title: `${trans.termsTitle} | Holo Fridge`,
    description: 'Terms of Service for Holo Fridge',
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : 'en';

  return (
    <>
      <Navbar locale={locale} />
      <main className="relative pt-32 pb-20">
        <SectionWrapper>
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
              {t(locale, 'termsTitle')}
            </h1>
            <p className="mt-4 text-bodyGray dark:text-white/70">
              {t(locale, 'termsLastUpdated')}
            </p>

            <div className="legal mt-12 max-w-none text-bodyGray dark:text-white/70">
              <p>These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and:</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">BML BIG, MB</p>
                <p>A small partnership (mažoji bendrija) registered in the Republic of Lithuania</p>
                <p>Company code: 305706222</p>
                <p>Registered address: Liepų g. 8, Ketvergių k., Klaipėdos r., Lithuania</p>
                <p>(&ldquo;the Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;)</p>
              </div>
              <p>&ldquo;Holo Fridge,&rdquo; &ldquo;HoloFridge,&rdquo; and &ldquo;Holo&rdquo; refer to the mobile application and related services operated by the Company (the &ldquo;Service&rdquo;).</p>
              <p><strong>By using the Service, you agree to these Terms. If you do not agree, do not use the Service.</strong></p>

              <h2>1. Eligibility and age requirements</h2>
              <p>You must be at least the minimum age required to consent to data processing and to form a binding contract in your jurisdiction to use the Service. If you are not old enough, a parent or legal guardian must consent and may need to use the Service on your behalf where required by law.</p>

              <h2>2. Account registration and security</h2>
              <ul>
                <li>You may need an account to use certain features. Registration requires a valid email address, which must be confirmed.</li>
                <li>You agree to provide accurate information and keep it up to date.</li>
                <li>Nicknames are unique. We may reclaim or require a change of a nickname that violates these Terms or third-party rights.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</li>
                <li>We may suspend or terminate accounts that we believe are compromised or used in violation of these Terms.</li>
              </ul>

              <h2>3. The Service</h2>
              <p>Holo Fridge helps users organize food information and generate recommendations such as recipes, food usage suggestions, shopping ideas, and related features. Features may vary by region and may change over time.</p>
              <p>We may offer free and paid plans. Plan features, pricing, and availability may change, subject to applicable laws.</p>

              <h2>4. Subscriptions, payments, and trials</h2>
              <p>If you purchase a subscription:</p>
              <ul>
                <li>Payments are processed by third-party payment platforms (such as Apple App Store or Google Play).</li>
                <li>Billing, renewal, cancellation, and refunds are governed by the applicable store policies.</li>
                <li>We may change subscription offerings and prices prospectively. Where required by law, we will notify you of price changes before they apply to you.</li>
                <li>If you are a consumer in the EU, statutory withdrawal and refund rights may apply as provided by the store platform and applicable law.</li>
              </ul>
              <p>Subscriptions renew automatically for the same period and price unless cancelled at least 24 hours before the end of the current period. You can manage or cancel a subscription at any time in your App Store or Google Play account settings.</p>

              <h2>5. Shared family groups</h2>
              <p>The Service may allow you to create or join a shared group (for example, a household).</p>
              <ul>
                <li>Content you add to shared features (such as shared lists, shared inventory, and activity attribution) is visible to other members of your group.</li>
                <li>You are responsible for the content you share into a group. Only invite people you trust.</li>
                <li>You can leave a group at any time. The group owner may also remove members.</li>
                <li>Content that belongs to the group (for example, items on a shared list) may remain visible to the group after you leave, as part of the group&apos;s data.</li>
              </ul>

              <h2>6. User content and license</h2>
              <p>&ldquo;User Content&rdquo; means any content you submit to the Service, including text entries, lists, photos, voice input, and other materials.</p>
              <p>You represent and warrant that:</p>
              <ul>
                <li>You own or have the necessary rights to submit User Content.</li>
                <li>Your User Content does not violate law or third-party rights.</li>
              </ul>
              <p>You grant the Company a worldwide, non-exclusive, royalty-free license to host, store, reproduce, process, adapt, and display your User Content solely for providing and operating the Service.</p>
              <p>This license ends when you delete your User Content or account, except where retention is required by law or technically necessary (for example, rolling backups).</p>
              <p><strong>We do not use your User Content to train AI models, and our AI providers are contractually restricted from doing so.</strong></p>

              <h2>7. Acceptable use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for unlawful, harmful, fraudulent, or abusive purposes.</li>
                <li>Interfere with or disrupt the Service.</li>
                <li>Reverse engineer or extract source code except where permitted by law.</li>
                <li>Upload malicious code, spyware, or harmful content.</li>
                <li>Attempt to exploit, scrape, or abuse AI features, or use them to generate unlawful or harmful content.</li>
                <li>Circumvent plan limits, access controls, or security measures.</li>
              </ul>
              <p>We may investigate and take action, including suspending or terminating accounts, to enforce these Terms.</p>

              <h2>8. AI features — important disclaimers</h2>
              <div className="glass-strong rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">AI-generated outputs may be inaccurate.</p>
                <p>The Service may provide AI-generated recommendations, including recipe ideas, substitutions, food usage suggestions, or nutrition estimates (&ldquo;AI Outputs&rdquo;). AI Outputs may be incorrect, incomplete, outdated, misleading, or unsuitable for your situation.</p>
                <p className="font-semibold text-charcoal dark:text-white mt-4">YOU ARE RESPONSIBLE FOR VERIFYING AI OUTPUTS BEFORE RELYING ON THEM.</p>
                <p className="mt-4"><strong>Not medical, nutrition, or allergy advice.</strong> The Service and AI Outputs are for general informational purposes only. Always check ingredient labels and allergens, follow food safety practices, and consult qualified professionals for medical or dietary decisions.</p>
                <p className="mt-4"><strong>No guarantee of results.</strong> We do not guarantee that AI Outputs, recipes, or suggestions will meet your needs, be safe, be accurate, or produce any outcome.</p>
              </div>

              <h2>9. Third-party services</h2>
              <p>The Service may integrate with or link to third-party services. We are not responsible for third-party services, content, or practices.</p>

              <h2>10. Intellectual property</h2>
              <p>The Service, including software, design, branding, logos, the Holo character, and non-user content, is owned by the Company or its licensors and is protected by applicable intellectual property laws.</p>
              <p>You may not copy, modify, distribute, or create derivative works except as explicitly permitted.</p>

              <h2>11. Disclaimer of warranties</h2>
              <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo;</strong></p>
              <p>We disclaim all warranties, express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free, or that content (including AI Outputs) will be accurate or reliable.</p>
              <p>Nothing in these Terms limits warranties or guarantees that cannot be excluded under mandatory consumer protection law in your country of residence.</p>

              <h2>12. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, the Company will not be liable for indirect, incidental, special, consequential, or punitive damages.</p>
              <p>The Company&apos;s total liability will not exceed the greater of: (a) the amount you paid for the Service in the 12 months before the claim, or (b) EUR 100.</p>
              <p>Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law (including liability for intent or gross negligence where such exclusion is not permitted).</p>

              <h2>13. Termination and account deletion</h2>
              <p>You may stop using the Service at any time.</p>
              <p>You can delete your account at any time in the app (Profile → Account → Delete Account). Deletion removes your personal data as described in our Privacy Policy, subject to legal retention requirements and backup cycles.</p>
              <p>We may suspend or terminate your access if we reasonably believe you violated these Terms. Where required by law, we will provide notice and a reason. Upon termination, sections that by their nature should survive (including Sections 6, 8, 10, 11, 12, and 15) will survive.</p>

              <h2>14. Changes to the Service and Terms</h2>
              <p>We may modify the Service and these Terms. If changes are material, we will provide notice as required by law (for example, in-app notice or email) before they take effect. Continued use after the effective date means you accept the updated Terms. If you do not agree, stop using the Service and delete your account.</p>

              <h2>15. Governing law and disputes</h2>
              <p>These Terms are governed by the laws of the Republic of Lithuania, without prejudice to any mandatory consumer protection laws of your country of residence that apply to you.</p>
              
              <h3>Dispute resolution</h3>
              <ul>
                <li><strong>Informal resolution first:</strong> contact <a href="mailto:support@holofridge.com" className="text-deepTurquoise hover:underline">support@holofridge.com</a> and allow 30 days to attempt resolution.</li>
                <li>If you are a consumer in the EU, you may also use the alternative dispute resolution mechanisms available in your country. In Lithuania, the competent authority for consumer disputes is the State Consumer Rights Protection Authority (Valstybinė vartotojų teisių apsaugos tarnyba, vvtat.lt).</li>
                <li>Courts of the Republic of Lithuania have jurisdiction, except where mandatory law gives you the right to bring or defend claims in your country of residence.</li>
              </ul>

              <h2>16. Language</h2>
              <p>These Terms are drafted in English. Translations are provided for convenience only. In case of any discrepancy, the English version prevails, except where mandatory local law requires otherwise.</p>

              <h2>17. Contact</h2>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">BML BIG, MB</p>
                <p>Liepų g. 8, Ketvergių k., Klaipėdos r., Lithuania</p>
                <p className="mt-4">Support: <a href="mailto:support@holofridge.com" className="text-deepTurquoise hover:underline">support@holofridge.com</a></p>
                <p>Legal and privacy: <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
