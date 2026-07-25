"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTAForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const requiredComplete = useMemo(
    () =>
      form.fullName.trim() &&
      form.email.trim() &&
      form.whatsapp.trim() &&
      form.businessName.trim(),
    [form]
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your active email.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.whatsapp.trim()) nextErrors.whatsapp = "Please enter your WhatsApp number.";
    if (!form.businessName.trim()) nextErrors.businessName = "Please enter your business name.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    window.sessionStorage.setItem("sumexsa-consultation-requested", "true");
    router.push("/thank-you");
  }

  return (
    <section id="consultation-form" className="px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[32px] bg-darkText px-6 py-8 text-white shadow-soft sm:px-8 sm:py-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-secondary">
            Book the Call
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl">
            One-to-One Consultation
          </h2>
          <p className="mt-5 text-base leading-7 text-white/76">
            Customized Strategy for Your Business
          </p>
          <p className="mt-5 text-base leading-7 text-white/76">
            Fill out the form below to reserve your free consultation.
          </p>
          <div className="mt-8 rounded-3xl bg-white/10 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-6 w-6 flex-none text-softBlue" aria-hidden="true" />
              <p className="text-sm leading-6 text-white/80">
                We respect your privacy. No spam.
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[32px] border border-primary/10 bg-white p-5 shadow-soft sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="fullName"
              label="Full Name"
              placeholder="Your full name"
              value={form.fullName}
              error={submitted ? errors.fullName : undefined}
              onChange={(value) => updateField("fullName", value)}
              required
            />
            <Field
              id="email"
              label="Active Email"
              placeholder="you@example.com"
              type="email"
              value={form.email}
              error={submitted ? errors.email : undefined}
              onChange={(value) => updateField("email", value)}
              required
            />
            <Field
              id="whatsapp"
              label="WhatsApp Number"
              placeholder="Your WhatsApp number"
              value={form.whatsapp}
              error={submitted ? errors.whatsapp : undefined}
              onChange={(value) => updateField("whatsapp", value)}
              required
            />
            <Field
              id="businessName"
              label="Business Name"
              placeholder="Your business name"
              value={form.businessName}
              error={submitted ? errors.businessName : undefined}
              onChange={(value) => updateField("businessName", value)}
              required
            />
          </div>

          <div className="mt-5">
            <Field
              id="website"
              label="Website or Facebook URL"
              placeholder="https://..."
              value={form.website}
              error={submitted ? errors.website : undefined}
              onChange={(value) => updateField("website", value)}
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm font-extrabold text-darkText">
              Anything You Want to Say
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Share anything helpful before the consultation"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-2 w-full resize-y rounded-2xl border border-darkText/10 bg-white px-4 py-4 text-base text-darkText outline-none transition placeholder:text-darkText/36 focus:border-primary focus:ring-4 focus:ring-lightPink"
            />
          </div>

          <button
            type="submit"
            aria-disabled={!requiredComplete}
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-lightPink px-7 py-4 text-base font-extrabold text-darkText shadow-soft transition duration-300 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-softBlue/60"
          >
            Book Free Consultation
          </button>
          <p className="mt-4 text-center text-sm leading-6 text-darkText/60">
            We respect your privacy. No spam.
          </p>
        </form>
      </div>
    </section>
  );
}

type FieldProps = {
  id: keyof FormState;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
};

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  required = false
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-extrabold text-darkText">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-14 w-full rounded-2xl border border-darkText/10 bg-white px-4 text-base text-darkText outline-none transition placeholder:text-darkText/36 focus:border-primary focus:ring-4 focus:ring-lightPink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-primary">
          {error}
        </p>
      ) : null}
    </div>
  );
}
