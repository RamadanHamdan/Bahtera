import { Button, Form, Input, Image as HeroImage } from "@heroui/react";
import * as React from "react";

export default function SubmitSection() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
        setErrorMsg(result.error ?? 'Pengiriman gagal, coba lagi.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Terjadi kesalahan jaringan, coba lagi.');
    }
  };

  return (
    <div className="w-full flex justify-center mt-12!">
      <Form ref={formRef} className="w-full max-w-sm flex flex-col items-center gap-8" onSubmit={onSubmit}>
        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          type="email"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid name"
          label="Name"
          labelPlacement="outside"
          name="name"
          type="text"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid phone number"
          label="Phone Number"
          labelPlacement="outside"
          name="phone"
          type="tel"
        />
        <Input
          isRequired
          errorMessage="Please enter a valid message"
          label="Message"
          labelPlacement="outside"
          name="message"
        />
        <Button
          type="submit"
          variant="bordered"
          className="w-full mt-1"
          isLoading={status === 'loading'}
          isDisabled={status === 'loading'}
        >
          {status === 'loading' ? 'Mengirim...' : 'Submit'}
        </Button>

        {status === 'success' && (
          <div className="w-full text-center px-4 py-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
            ✅ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.
          </div>
        )}
        {status === 'error' && (
          <div className="w-full text-center px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            ❌ {errorMsg}
          </div>
        )}
      </Form>
    </div>
  );
}