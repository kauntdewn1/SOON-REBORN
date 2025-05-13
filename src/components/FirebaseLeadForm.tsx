'use client';

import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/lib/firebase';

const FirebaseLeadForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [debtValue, setDebtValue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setMessage('');
    
        try {
          // Limpa e converte o valor da dívida formatado para número
          const cleanedDebtValue = debtValue.replace(/[R$\s.]/g, '').replace(',', '.');
          const numericDebtValue = parseFloat(cleanedDebtValue);
    
          // Verifica se a conversão foi bem-sucedida (opcional, mas recomendado)
          if (isNaN(numericDebtValue)) {
              setMessage('❌ Valor da dívida inválido.');
              setSubmitting(false);
              return; // Interrompe a submissão se o valor for inválido
          }
    
    
          await addDoc(collection(db, "leads"), {
            name,
            email,
            whatsapp,
            debtValue: numericDebtValue, // Salva o valor numérico
            timestamp: new Date(),
          });
          setMessage('✅ Cadastro confirmado. Bem-vindo ao caos.');
          setName('');
          setEmail('');
          setWhatsapp('');
          setDebtValue(''); // Limpa o campo formatado
        } catch (e) {
          console.error("Erro ao salvar lead:", e);
          setMessage('❌ Erro ao enviar. Tente novamente.');
          // Não limpar campos aqui se quiser que o usuário veja o que digitou
        } finally {
          setSubmitting(false);
        }
      };    
      await addDoc(collection(db, "leads"), {
        name,
        email,
        whatsapp,
        debtValue,
        timestamp: new Date(),
      });
      setMessage('✅ Cadastro confirmado. Bem-vindo ao caos.');
      setName('');
      setEmail('');
    } catch (e) {
      console.error("Erro ao salvar lead:", e);
      setMessage('❌ Erro ao enviar. Tente novamente.');
      setWhatsapp('');
      setDebtValue('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl p-6 space-y-5 font-mono relative"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 text-center">
        ENTRAR PARA A TRIAGEM
        </h2>

        {message && (
          <div className={`text-center text-sm font-semibold ${message.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
            {message}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-zinc-400 mb-1">🧠 Codinome:</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Digite seu codinome"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-zinc-400 mb-1">📡 Canal de contato:</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Seu e-mail mais usado"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-zinc-400 mb-1">📞 WhatsApp:</label>
          <input
            type="text"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Ex: (99) 99999-9999"
          />
        </div>

        <div>
          <label htmlFor="debtValue" className="block text-zinc-400 mb-1">💰 Valor da Dívida Atual:</label>
          <input
            type="text"
            id="debtValue"
            value={debtValue}
            onChange={handleDebtValueChange}
            className="w-full px-4 py-2 bg-black border border-zinc-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 placeholder-zinc-500"
            placeholder="Ex: R$ 10.000,00"
          />
        </div>

        {/* Note: Consider adding validation and potentially a number type input
             for debtValue if appropriate, depending on how you plan to use this data.
             For simplicity, keeping it as text for now based on instruction. */}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold py-2 px-4 rounded-md shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {submitting ? 'ENVIANDO...' : 'CONFIRMAR SENTENÇA'}
        </button>

        <p className="text-xs text-center text-zinc-500 pt-4">
          Sigilo absoluto. Só quem tiver a chave certa, abre esse cofre.
        </p>
      </form>
    </div>
  );
};

export default FirebaseLeadForm;
