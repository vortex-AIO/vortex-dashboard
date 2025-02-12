const Terms = () => {
    return (
        <div className="flex flex-col mx-[10vw] mt-5 sm:mx-[25vw]">
            <span className="font-bold text-5xl text-white">Terms of Service</span>
            <span className="text-kazu-main italic text-sm mt-5">
                Last updated And Effective Since: 02-11-2025
            </span>
            <span className="text-neutral-400 text-sm mt-5 pb-5">
                By visiting (&apos;heresy&apos;) or inviting (&apos;heresy Bot&apos;) to your
                Discord or logging into our website (&apos;heresy.cc&apos;), you agree and consent
                to the terms displayed on this page including our policies (Privacy Policy). When we
                state &apos;heresy&apos;, &apos;we&apos;, &apos;us&apos;, and &apos;our&apos; in
                these terms, we mean heresy. &apos;Services&apos; mean heresy&apos;s services that
                we offer to users.
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                If any information stated here seems misleading, please contact us @{" "}
                <span className="text-white font-semibold">heresy@playfairs.cc</span>
            </span>
            <span className="font-bold text-2xl text-white pt-10">Disclaimer</span>
            <span className="text-neutral-400 text-sm mt-5">
                You may not use heresy to violate any applicable laws or regulations as well as
                Discord&apos;s Terms of Service and Community Guidelines. If you encounter
                individuals or communities doing so, please send an email to{" "}
                <span className="text-white font-semibold">heresy@playfairs.cc</span>. If you are
                refunded under any circumstances, your Discord account may be subject to blacklist
                and a ban from all of our services.
            </span>
            <span className="font-bold text-2xl text-white pt-10">Heresy Website Usage</span>
            <span className="text-neutral-400 text-sm mt-5">
                You are required to be compliant with the terms shown on this page. You are not to
                do any of the following:
            </span>
            <div className="flex flex-col gap-4 text-[17px] pl-5 pt-5">
                <li className="text-neutral-400 marker:text-kazu-main">
                    Malicious attempts of exploiting the website
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Malicious use of the website
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Scraping content on this website for malicious use
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Framing a portion or all of the website
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Copy heresy&apos;s website and claiming it as your own work
                </li>
            </div>
            <span className="font-bold text-2xl text-white pt-10">Heresy Bot Usage</span>
            <span className="text-neutral-400 text-sm mt-5">
                You are not to do any of the following:
            </span>
            <div className="flex flex-col gap-4 text-[17px] pl-5 pt-5">
                <li className="text-neutral-400 marker:text-kazu-main">
                    Violate the Discord Terms of Service
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Copy heresy&apos;s services or features
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Assist anyone in copying heresy&apos;s services or features
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Abuse or exploit heresy or any of our services.
                </li>
                <li className="text-neutral-400 marker:text-kazu-main">
                    Run a Discord Server that has been terminated repeatedly
                </li>
            </div>
            <span className="font-bold text-2xl text-white pt-10">Termination</span>
            <span className="text-neutral-400 text-sm mt-5">
                We reserve the right to terminate your access to our services immediately (under our
                sole discretion) without prior notice or liability for any reason (including, but
                not limited to, a breach of the terms).
            </span>
            <span className="font-bold text-2xl text-white pt-10">Indemnity</span>
            <span className="text-neutral-400 text-sm mt-5">
                You shall indemnify us against all liabilities, costs, expenses, damages and losses
                (including any direct, indirect or consequential losses, loss of profit, loss of
                reputation and all interest, penalties and legal and other reasonable professional
                costs and expenses) suffered or incurred by you arising out of or in connection with
                your use of the service, or a breach of the terms.
            </span>
            <span className="font-bold text-2xl text-white pt-10">
                Changes to the Terms of Service
            </span>
            <span className="text-neutral-400 text-sm mt-5">
                We can update these terms at any time without notice. Continuing to use our services
                after any changes will mean that you agree with these terms and violation of our
                terms of service could result in a permanent ban across all of our services.
            </span>
        </div>
    )
}

export default Terms
