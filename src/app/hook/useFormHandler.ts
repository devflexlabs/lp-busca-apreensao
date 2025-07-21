import { useState, useEffect } from 'react';

export function useFormHandler() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    banco: '',
    parcelas: '',
    parcelasPagas: '',
  });

  const [progress, setProgress] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/9dc1319c-c730-4058-90a9-043a9a9775c6-loader.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const firstGroupComplete = formData.nome && formData.email && formData.telefone && formData.banco;
    const secondGroupComplete = formData.parcelas && formData.parcelasPagas;

    if (isSubmitted) {
      setProgress(3);
    } else if (firstGroupComplete && secondGroupComplete) {
      setProgress(2);
    } else if (firstGroupComplete) {
      setProgress(1);
    } else {
      setProgress(0);
    }
  }, [formData, isSubmitted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      banco: '',
      parcelas: '',
      parcelasPagas: '',
    });
    setIsSubmitted(false);
    setProgress(0);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(true);
    setProgress(3);
  };

  const getStepStyle = (step: number) =>
    step <= progress
      ? 'w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center'
      : 'w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center';

  const getIconStyle = (step: number) =>
    step <= progress ? 'w-6 h-6 text-white' : 'w-6 h-6 text-gray-500';

  return {
    formData,
    handleInputChange,
    handleSubmit,
    handleBack,
    progress,
    isSubmitted,
    error,
    setError,
    getStepStyle,
    getIconStyle,
  };
}
