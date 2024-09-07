import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col gap-4 py-8">
      <h1 className="text-3xl">Website Terms of Service</h1>
      <h2 className="text-lg">Acceptance of Terms</h2>
      <p>
        By accessing or using ruthieandloz.com (“the Website”), you agree to
        comply with and be bound by these terms of service (“Terms”). If you do
        not agree to these Terms, you should not use the Website.
      </p>
      <h2 className="text-lg">Description of Service</h2>
      <p>
        The Website allows users to view wedding-related content and submit
        RSVPs. We may update, change, or discontinue any part of the Website at
        any time without notice.
      </p>
      <h2 className="text-lg">User Responsibilities</h2>
      <p>
        You agree to provide accurate and truthful information when submitting
        RSVPs or other data through the Website. You must not use the Website
        for unlawful purposes or in ways that could damage or impair its
        functionality.
      </p>
      <h2 className="text-lg">Intellectual Property</h2>
      All content on the Website, including text, images, logos, and designs, is
      the intellectual property of Ruthie and Loz unless otherwise specified.
      You may not copy, reproduce, or distribute any content without our express
      written permission.
      <h2 className="text-lg">Links to Third-Party Websites</h2>
      <p>
        The Website may contain links to external websites. We are not
        responsible for the content or practices of third-party websites and do
        not endorse any linked sites.
      </p>
      <h2 className="text-lg">Privacy</h2>
      <p>
        Your use of the Website is also governed by our Privacy Policy, which
        outlines how we handle your personal data.
      </p>
      <h2 className="text-lg">Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Ruthie and Loz are not liable
        for any direct, indirect, incidental, or consequential damages arising
        from the use of the Website or the submission of RSVPs.
      </p>
      <h2 className="text-lg">Changes to the Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Any changes will
        be posted on this page with the updated date. Continued use of the
        Website constitutes acceptance of the updated Terms.
      </p>
      <h2 className="text-lg">Contact Information</h2>
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <Link href="mailto:ruthieandloz@gmail.com">ruthieandloz@gmail.com</Link>
        .
      </p>
    </div>
  );
}
