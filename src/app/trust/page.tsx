"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
const AutoSubmitForm = () => {
  const router = useRouter();

  useEffect(() => {
    if(typeof window === 'undefined' ) return;
    const scheme = `https://`;
    const host = `jakov.rs/`;
    const cert = 'MRgPAASQ2jb7YPXOCo4y62XhLKW0Of0qY77nxQ5p06nOMateonDlg';

    // Create a form element
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://verify.etrustmark.rs/cert/cert.php';

    // Create hidden input elements
    const certInput = document.createElement('input');
    certInput.type = 'hidden';
    certInput.name = 'cert';
    certInput.value = cert;
    form.appendChild(certInput);

    const schemeInput = document.createElement('input');
    schemeInput.type = 'hidden';
    schemeInput.name = 'http';
    schemeInput.value = scheme;
    form.appendChild(schemeInput);

    const hostInput = document.createElement('input');
    hostInput.type = 'hidden';
    hostInput.name = 'host';
    hostInput.value = host;
    form.appendChild(hostInput);

    const submitInput = document.createElement('input');
    submitInput.type = 'submit';
    submitInput.name = 'btnCert';
    submitInput.style.display = 'none'; // Hide the submit button
    form.appendChild(submitInput);

    // Append the form to the document body
    document.body.appendChild(form);

    // Submit the form automatically
    form.submit();

    // Cleanup: remove the form after submission
    // return () => {
    //   document.body.removeChild(form);
    // };
  }, []);

  return (
    <div className='w-full flex justify-center items-center'>
      <h1>Auto Submit Form</h1>
      <p>This page will automatically submit a form when loaded.</p>
    </div>
  );
};

export default AutoSubmitForm;