import { isValidLocale, type Locale } from "@/lib/i18n";
import { t } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
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
    title: `${trans.privacyTitle} | Holo Fridge`,
    description: 'Privacy Policy for Holo Fridge',
  };
}

export default async function PrivacyPage({
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
            <Reveal y={18}>
              <h1 className="text-4xl font-semibold tracking-tightish text-charcoal dark:text-white sm:text-5xl">
                {t(locale, 'privacyTitle')}
              </h1>
            </Reveal>
            <Reveal delay={0.1} y={14}>
              <p className="mt-4 text-bodyGray dark:text-white/70">
                {t(locale, 'privacyLastUpdated')}
              </p>
            </Reveal>

            <div className="legal mt-12 max-w-none text-bodyGray dark:text-white/70">
              <div className="glass-strong rounded-3xl p-8 mb-8">
                <h2 className="!mt-0">Important summary</h2>
                <ul>
                  <li>We collect information you provide (such as food items, lists, photos, and account details) and information collected automatically (such as device and usage data).</li>
                  <li>We use information to provide the Service, personalize features, operate AI-based recommendations, secure the Service, and improve performance.</li>
                  <li>We may share data with service providers (including AI providers) that process data on our instructions to help us deliver the Service. Our AI providers are contractually restricted from using your content to train their models.</li>
                  <li>If you join a shared family group, other members of that group can see the content you add to shared features.</li>
                  <li>The Service is not directed to children under the minimum age of digital consent in their jurisdiction.</li>
                  <li>Your rights depend on where you live. We provide methods to access, delete, and control your data as required by law.</li>
                </ul>
                <p>This is a global policy. The Service is offered worldwide. Where local law provides stronger protections than this Policy, we follow local law.</p>
              </div>

              <h2>1. Who we are</h2>
              <p>The data controller responsible for your personal data is:</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">BML BIG, MB</p>
                <p>A small partnership (mažoji bendrija) registered in the Republic of Lithuania</p>
                <p>Company code: 305706222</p>
                <p>Registered address: Liepų g. 8, Ketvergių k., Klaipėdos r., Lithuania</p>
                <p className="mt-4">Email (privacy): <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
                <p>Email (support): <a href="mailto:support@holofridge.com" className="text-deepTurquoise hover:underline">support@holofridge.com</a></p>
              </div>
              <p>&ldquo;Holo Fridge,&rdquo; &ldquo;HoloFridge,&rdquo; and &ldquo;Holo&rdquo; refer to the product operated by BML BIG, MB (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Company&rdquo;).</p>

              <h2>2. Definitions</h2>
              <ul>
                <li><strong>&ldquo;Personal Data&rdquo; / &ldquo;Personal Information&rdquo;</strong> means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked to you or your household.</li>
                <li><strong>&ldquo;Sensitive Data&rdquo;</strong> includes categories treated as sensitive under applicable law (such as precise geolocation, biometrics used for identification, certain health data, children&apos;s data, or other protected categories).</li>
                <li><strong>&ldquo;Process&rdquo;</strong> means any operation performed on data (collecting, storing, using, disclosing, analyzing, deleting, etc.).</li>
                <li><strong>&ldquo;AI&rdquo;</strong> means automated systems or models that can analyze inputs and generate outputs (for example, recipe suggestions, food usage suggestions, and personalization).</li>
              </ul>

              <h2>3. Information we collect</h2>
              <p>We collect information depending on how you use the Service and what features you enable.</p>
              
              <h3>Information you provide directly</h3>
              <ul>
                <li><strong>Account information:</strong> name, nickname/username, email, phone number (optional), password (stored as a secure hash), language, region, and preferences.</li>
                <li><strong>User content:</strong> food inventory entries, shopping lists, notes, recipes you save, meal plans, and other content you enter into the Service.</li>
                <li><strong>Images and media (optional):</strong> photos/videos you upload or capture (for example, food items, fridge images, receipts, barcodes) and related metadata.</li>
                <li><strong>Voice input (optional):</strong> if you use voice features, your voice input is processed to convert it to text so the Service can act on it. Voice recordings are not used for identification and are not retained longer than needed to provide the feature.</li>
                <li><strong>Communications:</strong> messages to support, feedback, survey responses, and attachments you provide.</li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li><strong>Device and network data:</strong> device model, operating system, app version, browser type (if web), IP address, time zone, language settings, and network provider.</li>
                <li><strong>Identifiers:</strong> device identifiers, mobile advertising identifiers (if enabled by your platform settings), cookies or similar technologies (for web).</li>
                <li><strong>Usage and diagnostics:</strong> screens viewed, feature interactions, clicks/taps, performance metrics, crash reports, log data, and approximate location derived from IP.</li>
              </ul>

              <h3>Permissions-based information (only if you allow it)</h3>
              <ul>
                <li><strong>Camera/photos:</strong> to scan or upload images.</li>
                <li><strong>Microphone:</strong> for voice input features.</li>
                <li><strong>Notifications:</strong> to send you push notifications (see Section 4).</li>
                <li><strong>Location:</strong> precise location, only if a location-based feature is enabled.</li>
              </ul>
              <p>You can withdraw permissions in your device settings at any time. Some features may not work without required permissions.</p>

              <h3>Children&apos;s data</h3>
              <p>The Service is not directed to children under 13, or under the higher minimum age of digital consent in their jurisdiction. We do not knowingly collect personal data from such children. If we learn that we have collected personal data from a child without required consent, we will delete it and take reasonable steps to prevent recurrence.</p>

              <h2>4. How we use information</h2>
              
              <h3>Provide and operate the Service</h3>
              <ul>
                <li>Create and manage accounts.</li>
                <li>Provide core functionality (inventory, lists, syncing, saved recipes, shared family groups).</li>
                <li>Maintain preferences and settings.</li>
              </ul>

              <h3>Personalization and recommendations</h3>
              <p>Recommend recipes, food usage ideas, shopping suggestions, or organization tips based on your inventory and preferences.</p>

              <h3>AI features</h3>
              <p>Some features use AI to analyze user-provided information and generate recommendations. For example:</p>
              <ul>
                <li>Analyzing text you enter to suggest recipes or usage.</li>
                <li>Analyzing images you provide to help identify items and generate suggestions.</li>
              </ul>
              <p>We use third-party AI providers to power these features. When we do:</p>
              <ul>
                <li>Your inputs are shared with the provider only to generate the response for you.</li>
                <li>Our AI providers are contractually restricted from using your content to train their models.</li>
                <li>We apply contractual and technical safeguards appropriate to the data and risk.</li>
              </ul>

              <h3>Who receives data for AI features</h3>
              <p>Depending on the feature, your inputs are processed by the following providers, acting on our instructions:</p>
              <ul>
                <li><strong>OpenAI, L.L.C. (USA)</strong> — voice transcription (Whisper); text and image analysis (GPT models)</li>
                <li><strong>Google LLC (USA)</strong> — image recognition, text extraction from photos and receipts, and barcode reading (Cloud Vision); text analysis and recipe generation (Gemini models)</li>
                <li><strong>Groq, Inc. (USA)</strong> — used as a fallback for chat and voice transcription when a primary provider is unavailable</li>
              </ul>
              <p>What is sent: only the content required for the feature — the photo you scan, the voice input you record, the text you type, the relevant item names from your inventory, and any dietary preferences or allergies you have set, where the feature needs them to give you a safe answer. We do not send your account name, your email address, or your account identifiers. Anything you type into a conversation is sent as you wrote it, so if you tell Holo your name it is processed like any other message. Each provider is contractually restricted from using your content to train its models and is bound to protections equal to this Policy.</p>
              <p>You can avoid using AI features by not submitting content to those features or by disabling AI-related features in Profile → Account.</p>

              <h3>Push notifications</h3>
              <p>With your permission, we send push notifications such as expiry alerts for your food items, meal suggestions, and daily summaries. You can turn notifications off at any time in your device settings or in the app&apos;s notification settings.</p>

              <h3>Safety, security, and integrity</h3>
              <p>Detect and prevent fraud, abuse, and unauthorized access.</p>

              <h3>Communications</h3>
              <p>Service messages (security alerts, account notices, updates) and support responses.</p>

              <h3>Marketing (optional)</h3>
              <p>Send promotions or product updates where permitted by law. You can opt out at any time.</p>

              <h3>Legal compliance</h3>
              <p>Comply with laws, regulations, and lawful requests.</p>

              <h2>5. Legal bases</h2>
              <p>Depending on your location, we process personal data under one or more legal bases:</p>
              <ul>
                <li><strong>Contract necessity</strong> (to provide the Service you request).</li>
                <li><strong>Consent</strong> (for optional features like precise location, voice input, certain tracking, marketing, and some AI features).</li>
                <li><strong>Legitimate interests</strong> (to secure and improve the Service, prevent fraud), balanced against your rights.</li>
                <li><strong>Legal obligations</strong> (compliance and recordkeeping).</li>
                <li><strong>Vital interests</strong> (rare emergency situations).</li>
              </ul>

              <h2>6. How we share information</h2>
              <p><strong>Shared family groups:</strong> if you join or create a shared group, other members of that group can see the content you add to shared features — for example, items you add to shared lists, inventory in shared spaces, and attribution such as &ldquo;Added by you/[name].&rdquo; Do not join a group with people you do not want to share this information with. You can leave a group at any time in Settings.</p>
              <p><strong>Service providers:</strong> we share information with vendors that help us operate the Service (cloud hosting and database, AI providers, analytics, payment processors, email delivery, etc.). They process data on our instructions and are bound by contractual safeguards.</p>
              <p><strong>Legal and safety disclosures:</strong> we may disclose information to comply with law, enforce our agreements, or protect rights, safety, and security.</p>
              <p><strong>Corporate transactions:</strong> information may be transferred as part of a merger, acquisition, or similar transaction. We will provide notice where required by law.</p>
              <p><strong>With your direction:</strong> we share information when you ask us to (for example, exporting or sharing lists).</p>
              <p><strong>We do not sell your personal data.</strong></p>

              <h2>7. International data transfers</h2>
              <p>We may process and store information in countries other than where you live, including outside the European Economic Area. Where we do, we use safeguards required by applicable law for cross-border transfers, such as the European Commission&apos;s Standard Contractual Clauses or transfers to countries with an adequacy decision.</p>

              <h2>8. Data retention</h2>
              <p>We retain information only as long as necessary:</p>
              <ul>
                <li><strong>Account data:</strong> retained while your account is active; deleted after account deletion, subject to the exceptions below.</li>
                <li><strong>AI inputs and outputs:</strong> retained only as long as needed to provide the feature and support troubleshooting.</li>
                <li><strong>Logs and diagnostics:</strong> retained for limited periods for security and debugging.</li>
                <li><strong>Backups:</strong> retained on a rolling basis and overwritten in the normal backup cycle.</li>
              </ul>
              <p>Deletion may be delayed where technically necessary (for example, backup cycles) or where retention is required by law.</p>

              <h2>9. Security</h2>
              <p>We implement reasonable technical and organizational safeguards to protect information:</p>
              <ul>
                <li>Encryption in transit (TLS/HTTPS) and protective measures for stored data.</li>
                <li>Access controls and least-privilege policies.</li>
                <li>Monitoring, logging, and incident response procedures.</li>
              </ul>
              <p>No system is 100% secure. You are responsible for protecting your account credentials.</p>

              <h2>10. Your privacy rights</h2>
              <p>Where applicable, you may have rights to:</p>
              <ul>
                <li><strong>Access:</strong> request a copy of your personal data.</li>
                <li><strong>Correction:</strong> correct inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> delete your personal data (with legal exceptions).</li>
                <li><strong>Portability:</strong> receive your data in a structured, commonly used format.</li>
                <li><strong>Restriction and objection:</strong> restrict or object to certain processing, including processing based on legitimate interests.</li>
                <li><strong>Withdraw consent:</strong> where processing is based on consent, without affecting prior processing.</li>
                <li><strong>Opt out:</strong> of &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information where such rights apply (we do not sell personal data).</li>
              </ul>

              <h3>How to exercise rights</h3>
              <ul>
                <li><strong>In the app</strong> (deletion and withdrawing AI consent): Profile → Account</li>
                <li><strong>Email</strong> (access, correction, portability, and any other request): <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></li>
              </ul>
              <p>You can delete your account and all associated data yourself at any time — see <a href="/delete-account" className="text-deepTurquoise hover:underline">holofridge.com/delete-account</a>.</p>
              <p>We respond within the timeframes required by applicable law. We may need to verify your identity before fulfilling a request.</p>
              <p>You also have the right to lodge a complaint with a supervisory authority. In Lithuania, this is the State Data Protection Inspectorate (Valstybinė duomenų apsaugos inspekcija, vdai.lrv.lt). If you live elsewhere in the EU/EEA, you may contact your local data protection authority.</p>

              <h2>11. Language</h2>
              <p>This Policy is drafted in English. Translations are provided for convenience only. In case of any discrepancy, the English version prevails, except where mandatory local law requires otherwise.</p>

              <h2>12. Changes to this Policy</h2>
              <p>We may update this Policy from time to time. If changes are material, we will provide notice (for example, in-app notice or email) before they take effect.</p>

              <h2>13. Contact</h2>
              <p>For privacy questions, requests, or complaints:</p>
              <div className="glass rounded-2xl p-6 my-4">
                <p className="font-semibold text-charcoal dark:text-white">BML BIG, MB</p>
                <p>Liepų g. 8, Ketvergių k., Klaipėdos r., Lithuania</p>
                <p>Email: <a href="mailto:privacy@holofridge.com" className="text-deepTurquoise hover:underline">privacy@holofridge.com</a></p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer locale={locale} />
    </>
  );
}
