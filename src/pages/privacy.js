import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-white py-5 px-10 md:px-20">
        <h3 className="text-2xl font-bold">PRIVACY POLICY</h3>
        <p>
          Thank you for choosing to be part of our community. We take your
          privacy seriously and do our best to protect it. We are required by
          law to ask for certain information in order to perform our services
          for you, but we are committed to protecting your personal and
          financial information. Below are basic privacy principles or privacy
          policy "bill of rights" that we adhere to. This Bill of Rights
          includes the following list of policies:
        </p>
        <ol className="list-decimal">
          <li>
            We don't share your personal information with anyone except to
            comply with the law, develop our products, or protect our rights.
          </li>
          <li>
            We aim to make it as simple as possible for you to control what's
            visible to the public, seen by search engines, kept private, and
            permanently deleted.
          </li>
          <li>
            We will maintain appropriate security standards and procedures to
            protect your information.
          </li>
        </ol>
        <br />
        <p>
          In this privacy notice, we describe our privacy policy. We seek to
          explain to you in the clearest way possible what information we
          collect, how we use it and what rights you have in relation to it. We
          hope you take some time to read through it carefully, as it is
          important.
        </p>
        <p>
          BY USING THE SERVICES, YOU AGREE TO BE BOUND BY THE TERMS OF THIS
          PRIVACY POLICY. IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT
          USE THE SERVICES.
        </p>
        <p>
          This privacy policy applies to all information collected through our
          website, our mobile app, and/or any related services, sales, marketing
          or events (we refer to them collectively in this privacy policy as the
          "Sites"). Please read this privacy policy carefully as it will help
          you make informed decisions about sharing your personal information
          with us.
        </p>
        <br />
        <br />
        <h3 className="text-2xl font-bold">Table Of Contents</h3>
        <ul className="list-disc">
          <li>What Information Do We Collect?</li>
          <li>How Do We Use Your Information?</li>
          <li>Will Your Information Be Shared With Anyone?</li>
          <li>Do We Use Cookies And Other Tracking Technologies?</li>
          <li>How Long Do We Keep Your Information?</li>
          <li>How Do We Keep Your Information Safe? </li>
          <li>What Are Your Privacy Rights?</li>
        </ul>
        <h3 className="text-2xl font-bold pt-4">
          1. What Information Do We Collect?
        </h3>
        <p>
          Personal information you disclose to us In Short: Information that you
          provide to us such as name, date of birth , and passwords . <br />
          We collect personal information that you voluntarily provide to us
          when registering at the Sites expressing an interest in obtaining
          information about us or our products and services, when participating
          in activities on the Sites or otherwise contacting us. The personal
          information that we collect depend s on the context of your
          interactions with us and the Sites , the choices you make and the
          products and features you use.
          <br />
          All personal information that you provide to us must be true, complete
          and accurate, and you must notify us of any changes to such personal
          information.
          <br />
          We automatically collect certain information when you visit, use or
          navigate the Sites. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics like browser type and browser version,
          operating system, language preferences, referring URLs, device name,
          country, location, information about how and when you use our Sites
          and other technical information. This information is primarily needed
          to maintain the security and operation of our Sites, and for our
          internal analytics and reporting purposes.
          <br />
          When you access our services by or through a mobile device, the
          information we automatically collect may include the type of mobile
          device you use, your mobile device unique ID, the IP address of your
          mobile device, your mobile operating system, the type of mobile
          Internet browser you use, unique device identifiers and other
          diagnostic data.
          <br />
          You can enable and disable communicating certain information which
          would be automatically collected by us by adjusting your device
          security and privacy settings.
          <br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
          <br />
          We may collect information about your location if you give us
          permission to do so or information that may disclose the location of
          your device when you access our website.
          <br />
          We may use and store information about your location if you give us
          permission to do so. We use this information to provide features of
          our services, to improve and customize our services. We also collect
          your computer or mobile device’s source IP address, which may disclose
          the location of your computer or mobile device at the time you access
          our website. While you can always decide not to share information
          about your location with us, You must agree to provide certain types
          of location information if you want to use our services.
          <br />
          Information collected from other sources
          <br />
          We may collect limited data from public databases, marketing partners,
          and other outside sources.
          <br />
          We may obtain information about you from other sources, such as public
          databases, joint marketing partners, as well as from other third
          parties. Examples of the information we receive from other sources
          include: social media profile information like your user name or
          handle, date of birth, and pictures, marketing leads and search
          results and links, including paid listings (such as sponsored links).
          We do not have access to your third-party account passwords. The data
          we receive from other sources is dependent upon your privacy settings
          with these third parties. You should always review, and if necessary,
          adjust your privacy settings on those Accounts before linking or
          connecting them to our sites. We use information obtained from other
          sources to operate, maintain, and provide to you the features and
          functionality of our services, to process orders, to provide customer
          services, and to communicate directly with you, such as to send you
          information about your orders, product sales, special offers, and new
          site features.
          <br />
          The following is a list of current third party analytics tools that
          may either directly or indirectly collect information from you. Please
          review the relevant privacy policies (links current as of the date of
          publication of this Privacy Policy) for further information on how
          each third party handles your personal information
          <br />
        </p>
        <h3 className="text-2xl font-bold pt-4">
          2. How Do We Use Your Information?
        </h3>
        <p>
          {" "}
          We process your information for purposes based on legitimate business
          interests, the fulfillment of our contract with you, compliance with
          our legal obligations, and/or your consent.
          <br />
          We use personal information collected via our Sites for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations. We
          indicate the specific processing grounds we rely on next to each
          purpose listed below.
          <br />
          We use the information we collect or receive:
        </p>
        <ul className="list-disc">
          <li>
            To facilitate account creation and logon process. If you choose to
            link your account with us to a third party account (such as your
            Google or Facebook account), we use the information you allowed us
            to collect from those third parties to facilitate account creation
            and logon process.
          </li>
          <li>
            To send you marketing and promotional communications. We participate
            in interest-based advertising and use third-party advertising
            companies. We permit third-party online advertising networks, social
            media companies and other third-party services, to collect
            information about your use of our website over time. We may share a
            common account identifier (such as an email address or user ID) or
            hashed data with our third-party advertising partners to help
            identify you across devices. We and/or our third party marketing
            partners may use the personal information you send to us for our
            marketing purposes, if this is in accordance with your marketing
            preferences. You can opt-out of our marketing emails at any time
            (see the "What Are Your Privacy Rights" below).
          </li>
          <li>
            To send administrative information to you. We may use your personal
            information to send you product, service and new feature information
            and/or information about changes to our terms, conditions, and
            policies.
          </li>
          <li>
            Fulfill and manage your orders. We may use your information to
            fulfill and manage your orders and payments made through the Sites.
          </li>
          <li>
            To protect our Sites. We may use your information as part of our
            efforts to keep our Sites safe and secure (for example, for fraud
            monitoring and prevention).
          </li>
          <li>To enforce our terms, conditions and policies.</li>
          <li>
            To respond to legal requests and prevent harm. If we receive a
            subpoena or other legal request, we may need to inspect the data we
            hold to determine how to respond.
          </li>
          <li>
            For other Business Purposes. We may use your information for other
            Business Purposes, such as data analysis, identifying usage trends,
            determining the effectiveness of our promotional campaigns and to
            evaluate and improve our Sites , products, services, marketing and
            your experience.
          </li>
        </ul>
        <p>
          We engage in these activities to comply with a legal obligation or
          because we have a legitimate interest. To the extent that we process
          your information based on your consent, you may withdraw your consent
          at any time.
        </p>
        <h3 className="text-2xl font-bold pt-4">
          3. Will Your Information Be Shared With Anyone?
        </h3>
        <p>
          {" "}
          We only share information with your consent, to comply with laws, to
          protect your rights, or to fulfill business obligations. We may
          process or share data based on the following legal basis:
        </p>
        <ul className="list-disc">
          <li>
            Consent: We may process your data if you have given us specific
            consent to use your personal information in a specific purpose.
          </li>
          <li>
            Legitimate Interests: We may process your data when it is reasonably
            necessary to achieve our legitimate business interests.
          </li>
          <li>
            Performance of a Contract: Where we have entered into a contract
            with you, we may process your personal information to fulfill the
            terms of our contract.
          </li>
          <li>
            Legal Obligations: We may disclose your information where we are
            legally required to do so in order to comply with applicable law,
            governmental requests, a judicial proceeding, court order, or legal
            process, such as in response to a court order or a subpoena
            (including in response to public authorities to meet national
            security or law enforcement requirements).
          </li>
          <li>
            Vital Interests: We may disclose your information where we believe
            it is necessary to investigate, prevent, or take action regarding
            potential violations of our policies, suspected fraud, situations
            involving potential threats to the safety of any person and illegal
            activities, or as evidence in litigation in which we are involved.
          </li>
        </ul>
        <p>
          More specifically, we may need to process your data or share your
          personal information in the following situations:
        </p>
        <ul className="list-disc">
          <li>
            Vendors, Consultants and Other Third-Party Service Providers. We may
            share your data with third party vendors, service providers, payment
            facilitators, contractors or agents who perform services for us or
            on our behalf and require access to such information to do that
            work. Examples include: facilitating payments, data analysis, email
            delivery, hosting services, customer service and marketing efforts.
            We may allow selected third parties to use tracking technology on
            the Sites , which will enable them to collect data about how you
            interact with the Sites over time. This information may be used to,
            among other things, analyze and track data, determine the popularity
            of certain content and better understand online activity. Unless
            described in this Policy, we do not share, sell, rent or trade any
            of your information with third parties for their promotional
            purposes.
          </li>
        </ul>
        <h3 className="text-2xl font-bold pt-4">Unidentified Parties.</h3>
        <p>
          We disclose your information with the third party in the following
          circumstances:
        </p>
        <ul className="list-disc">
          <li>
            Business Transaction. If we are involved in a merger, acquisition or
            asset sale, your personal information may be shared. We will provide
            notice before your personal information is transferred and becomes
            subject to a different Privacy Policy.
          </li>
          <li>
            Disclosure for Law Enforcement. We may be required to disclose your
            personal information if required to do so by law or in response to
            valid requests by public authorities (e.g. a court or a government
            agency).
          </li>
          <li>
            Legal Requirements. We may be required to disclose your personal
            information in the good faith belief that such action is necessary
            to comply with a legal obligation, to protect and defend our rights
            or property, to prevent or investigate possible wrongdoing in
            connection with our services, to protect the personal safety of our
            users or the public, or to protect against legal liability.
          </li>
        </ul>
        <p>
          This Privacy Policy does not address, and we are not responsible for,
          the privacy, information or other practices of any third parties. The
          inclusion of a link does not imply endorsement of the linked site or
          Services by us.
          <br />
          Please note that we are not responsible for the collection, usage and
          disclosure policies and practices (including the data security
          practices) of other organizations, such as Facebook, Apple, Google,
          Microsoft, RIM or any other application developer, application
          provider, social media platform provider, operating system provider,
          wireless services provider or device manufacturer, including any
          personal information you disclose to other organizations through or in
          connection with our services.
        </p>

        <h3 className="text-2xl font-bold pt-4">
          4. Do We Use Cookies And Other Tracking Technologies?
        </h3>
        <p>
          We may use cookies and other tracking technologies to collect and
          store your information.
          <br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information.
          <br />
          Cookies are small text files that are sent to or accessed from your
          web browser or your computer’s hard drive. A cookie typically contains
          the name of the domain (internet location) from which the cookie
          originated, the “lifetime” of the cookie (i.e., when it expires) and a
          randomly generated unique number or similar identifier. A cookie also
          may contain information about the device, such as: user settings,
          browsing history, and activities conducted while using our services.
          <br />
          Our Services use the following cookies:
        </p>
        <ul className="list-disc">
          <li>
            Strictly necessary cookies, which are required for the operation of
            our services. Without them, for example, you would not be able to
            use your account.
          </li>
          <li>
            Analytical/performance cookies, which allow us to recognize and
            count the number of visitors, learn how visitors navigate the
            services, and improve the services.
          </li>
          <li>
            Functionality cookies, which we use to recognize you when you return
            to the Services.
          </li>
        </ul>
        <p>
          Specific information about how we use such technologies and how you
          can refuse certain cookies is set out in our Cookie Policy.
        </p>
        <h3 className="text-2xl font-bold pt-4">
          5. How Long Do We Keep Your Information?
        </h3>
        <p>
          In Short: We keep your information for as long as necessary to fulfill
          the purposes outlined in this privacy policy unless otherwise required
          by law.
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy policy, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this policy
          will require us keeping your personal information for longer than 90
          days past the termination of the user's account.
          <br />
          We also retain your information for internal analysis purposes.
          Information retained for such purposes is generally kept for a shorter
          period of time, except when this data is used to strengthen the
          security or to improve the functionality of our services, or we are
          legally obligated to retain this data for longer time periods.
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize it, or, if
          this is not possible (for example, because your personal information
          has been stored in backup archives), then we will securely store your
          personal information and isolate it from any further processing until
          deletion is possible.
          <br />
        </p>
        <h3 className="text-2xl font-bold pt-4">
          6. How Do We Keep Your Information
        </h3>
        <p>
          We aim to protect your personal information through a system of
          organizational and technical security measures.
          <br />
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. We will protect the privacy and security of your personal
          information according to this Privacy Policy, regardless of where it
          is processed or stored. However, please also remember that we cannot
          guarantee that the internet itself is 100% secure. Although we will do
          our best to protect your personal information, transmission of
          personal information to and from our Sites is at your own risk. You
          should only access the services within a secure environment.
          <br />
          In the event that any information under our control is compromised as
          a result of a breach of security, we will take reasonable steps to
          investigate the situation and where appropriate, notify those
          individuals whose information may have been compromised and take other
          steps, in accordance with any applicable laws and regulations. <br />
        </p>
        <h3 className="text-2xl font-bold pt-4">
          7. What Are Your Privacy Rights?
        </h3>
        <p>
          You may review, change, or terminate your account at any time.
          <br />
          If you are resident in the European Economic Area and you believe we
          are unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here.
          <br />
          Account Information
          <br />
          We aim to take reasonable steps to allow you to correct, amend,
          delete, or limit the use of your personal information.
          <br />
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
          <br />
        </p>
        <ul className="list-disc">
          <li>Log into your account settings and update your user account.</li>
          <li>Contact us using the contact information provided.</li>
          <p>In certain circumstances, you have the right:</p>
          <li>
            To access and receive a copy of the personal information we hold
            about you;
          </li>
          <li>
            To rectify any personal information held about you that is
            inaccurate; and
          </li>
          <li>
            To request the deletion of personal information held about you
          </li>
        </ul>
        <p>
          If you wish to enforce your rights above, please also contact us using
          the contact information provided.
          <br />
          Although You cannot opt-out of all data collection when You use Our
          Services, You can limit the collection, use and sharing of your
          personally identifiable information.
          <br />
          You have the right to data portability. You can request to obtain a
          copy of your personal information in a commonly used electronic format
          so that You can manage and move it. Be advised that we may not be able
          to delete your information without also deleting your user account.
          You will not be permitted to examine the personal information of any
          other person or entity and may be required to provide us with personal
          information to verify your identity prior to accessing any records
          containing information about you. We may not accommodate a request to
          change or delete personal information if we believe doing so would
          violate any law or legal requirement or result in incorrect
          information.
          <br />
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, some information may be retained in our files to prevent
          fraud, troubleshoot problems, assist with any investigations, enforce
          our Terms of Use and/or comply with legal requirements.
          <br />
          If you do not want us to collect your personal information, please do
          not provide it to us. Please understand that if you choose not to
          provide certain personal information to us, your choice will restrict
          your ability to access some content and use some of the functionality
          of our services.
          <br />
          For your protection, we may only implement requests with respect to
          the personal information associated with the particular email address
          that you use to send us your request, and we may need to verify your
          identity before implementing your request. We will try to comply with
          your request as soon as reasonably practicable.
          <br />
          Cookies and similar technologies: Most Web browsers are set to accept
          cookies by default. If you prefer, you can usually choose to set your
          browser to remove cookies and to reject cookies. If you choose to
          remove cookies or reject cookies, this could affect certain features
          or services of our Sites. <br />
          Opting out of email marketing: You can unsubscribe from our marketing
          email list at any time by clicking on the unsubscribe link in the
          emails that we send or by contacting us using the details provided
          below. You will then be removed from the marketing email list –
          however, we will still need to send you service-related emails that
          are necessary for the administration and use of your account. To
          otherwise opt-out, you may:
          <br />
        </p>
        <ul className="list-disc">
          <li>
            Note your preferences when you register an account with the site.
          </li>
          <li>Access your account settings and update preferences.</li>
          <li>Contact us using the contact information provided.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
