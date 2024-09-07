import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <h1>Website Privacy Policy</h1>
      <h2>Information We Collect</h2>
      <p>
        When you visit our Website or submit an RSVP, we may collect the
        following types of information:
      </p>
      <ul>
        <li>
          <strong>Personal Information:</strong> This includes your name, email
          address, and any other details you provide when submitting an RSVP.
        </li>
        <li>
          <strong>Usage Data:</strong> We may collect information on how you
          interact with the Website, such as pages viewed, time spent on the
          site, and IP address.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect for the following purposes:</p>
      <ul>
        <li>To manage and update our guest list.</li>
        <li>
          To communicate with you about wedding-related updates or
          confirmations.
        </li>
        <li>To improve the functionality and performance of the Website.</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We will not share your personal information with third parties except:
      </p>
      <ul>
        <li>When required by law.</li>
        <li>With your explicit consent.</li>
        <li>
          To protect the rights or safety of [Your Name] or users of the
          Website.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect the personal information you submit
        via the Website. However, no method of transmission over the internet is
        100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Cookies</h2>
      <p>
        Our Website may use cookies to enhance your experience. Cookies are
        small data files stored on your device that help improve the
        website&apos;s performance. You can choose to disable cookies through
        your browser settings, though some features of the Website may not
        function properly.
      </p>

      <h2>Your Data Rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct,
        delete, or restrict the processing of your personal information. To make
        a request, contact us at [Your Email Address].
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our Website is not directed toward individuals under the age of 13, and
        we do not knowingly collect personal information from children.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated date. Continued use of the Website
        constitutes acceptance of the updated Privacy Policy.
      </p>

      <h2>Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <Link href="mailto:ruthieandloz@gmail.com">ruthieandloz@gmail.com</Link>
        .
      </p>
    </div>
  );
}
