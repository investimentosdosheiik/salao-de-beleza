import React, { useState } from 'react';
import { X, Phone, Check, ShieldCheck, HelpCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

interface WhatsAppSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (newNumber: string) => void;
}

export const WhatsAppSettingsModal: React.FC<WhatsAppSettingsModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [inputVal, setInputVal] = useState(currentNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = inputVal.replace(/\D/g, '');
    if (digitsOnly.length >= 10) {
      onSaveNumber(digitsOnly);
      setSavedSuccess(true);
      setTimeout(() => {
        setSavedSuccess(false);
        onClose();
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-stone-200 space-y-5 animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-display text-lg sm:text-xl font-bold text-stone-900">
                Número do WhatsApp
              </h3>
              <p className="text-xs text-stone-500">
                Personalize o número que receberá os agendamentos
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 p-1 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              WhatsApp com DDD (Ex: 5591981234567)
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="5591981234567"
                className="w-full text-sm rounded-lg border border-stone-300 px-3.5 py-2.5 text-stone-900 font-mono focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
            <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
              <HelpCircle className="w-3 h-3 text-stone-400" />
              Inclua o DDI (55 para Brasil) + DDD de Belém (91) + 9 dígitos
            </p>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-600 space-y-1">
            <p className="font-semibold text-stone-800">
              Vinculado ao estabelecimento:
            </p>
            <p className="text-[11px]">
              {SALON_DATA.fullName} · {SALON_DATA.address}
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold px-4 py-2 text-stone-600 hover:text-stone-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#1B8049] hover:bg-[#15693C] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-200" />
                  <span>Salvo com Sucesso!</span>
                </>
              ) : (
                <span>Salvar Número</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
