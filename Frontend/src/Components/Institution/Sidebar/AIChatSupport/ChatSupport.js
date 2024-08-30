import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const predefinedResponses = {
    'paracetamol': 'Paracetamol is used as a pain reliever and a fever reducer. Typical dosage is 500mg every 4-6 hours.',
    'ibuprofen': 'Ibuprofen is used for pain relief, reducing inflammation, and lowering fever. Typical dosage is 400mg every 4-6 hours.',
    'amoxicillin': 'Amoxicillin is an antibiotic used to treat a variety of bacterial infections. Typical dosage is 500mg every 8 hours.',
    'cetirizine': 'Cetirizine is an antihistamine used to relieve allergy symptoms. Typical dosage is 10mg once daily.',
    'ranitidine': 'Ranitidine is used to reduce stomach acid production. Typical dosage is 150mg twice daily.',
    'metformin': 'Metformin is used to control blood sugar levels in people with type 2 diabetes. Typical dosage is 500mg twice daily.',
    'azithromycin': 'Azithromycin is an antibiotic used to treat bacterial infections. Typical dosage is 250mg once daily for 3-5 days.',
    'amlodipine': 'Amlodipine is used to treat high blood pressure and chest pain (angina). Typical dosage is 5mg once daily.',
    'aspirin': 'Aspirin is used to reduce pain, fever, or inflammation. It is also used to reduce the risk of heart attack. Typical dosage is 75mg once daily.',
    'atorvastatin': 'Atorvastatin is used to lower cholesterol and reduce the risk of heart disease. Typical dosage is 10mg once daily.',
    'omeprazole': 'Omeprazole is used to treat heartburn, stomach ulcers, and acid reflux. Typical dosage is 20mg once daily before a meal.',
    'losartan': 'Losartan is used to treat high blood pressure and to protect the kidneys from damage due to diabetes. Typical dosage is 50mg once daily.',
    'furosemide': 'Furosemide is a diuretic used to treat fluid retention (edema) and high blood pressure. Typical dosage is 40mg once daily.',
    'clopidogrel': 'Clopidogrel is used to prevent blood clots in patients with heart disease. Typical dosage is 75mg once daily.',
    'levothyroxine': 'Levothyroxine is used to treat hypothyroidism. Typical dosage varies; it is usually taken once daily before breakfast.',
    'simvastatin': 'Simvastatin is used to lower cholesterol and triglycerides in the blood. Typical dosage is 20-40mg once daily in the evening.',
    'lisinopril': 'Lisinopril is used to treat high blood pressure and heart failure. Typical dosage is 10-20mg once daily.',
    'glimepiride': 'Glimepiride is used to control blood sugar levels in people with type 2 diabetes. Typical dosage is 1-2mg once daily with breakfast.',
    'warfarin': 'Warfarin is used to prevent blood clots. Dosage varies; it is typically taken once daily, with regular monitoring of blood levels.',
    'hydrochlorothiazide': 'Hydrochlorothiazide is used to treat high blood pressure and fluid retention. Typical dosage is 12.5-25mg once daily.',
    'metoprolol': 'Metoprolol is used to treat high blood pressure, chest pain (angina), and heart failure. Typical dosage is 50-100mg once daily.',
    'salbutamol': 'Salbutamol is used to relieve symptoms of asthma and chronic obstructive pulmonary disease (COPD). Typical dosage is 2 puffs from an inhaler as needed.',
    'prednisone': 'Prednisone is a corticosteroid used to treat inflammation and immune system disorders. Typical dosage varies; it is usually taken once daily in the morning.',
    'gabapentin': 'Gabapentin is used to treat nerve pain and seizures. Typical dosage starts at 300mg once daily and may be increased as needed.',
    'tramadol': 'Tramadol is used to treat moderate to severe pain. Typical dosage is 50-100mg every 4-6 hours as needed.',
    'sertraline': 'Sertraline is used to treat depression, anxiety, and OCD. Typical dosage is 50mg once daily.',
    'alprazolam': 'Alprazolam is used to treat anxiety and panic disorders. Typical dosage is 0.25-0.5mg three times daily.',
    'zolpidem': 'Zolpidem is used to treat insomnia. Typical dosage is 5-10mg once daily at bedtime.',
    'insulin glargine': 'Insulin glargine is used to control blood sugar in people with diabetes. Dosage varies and is typically injected once daily.',
    'tamsulosin': 'Tamsulosin is used to treat the symptoms of an enlarged prostate (BPH). Typical dosage is 0.4mg once daily after a meal.',
    'meloxicam': 'Meloxicam is used to treat pain and inflammation caused by arthritis. Typical dosage is 7.5-15mg once daily.',
    'allopurinol': 'Allopurinol is used to prevent gout attacks by reducing uric acid levels. Typical dosage is 100-300mg once daily.',
    'montelukast': 'Montelukast is used to prevent asthma attacks and to treat allergies. Typical dosage is 10mg once daily in the evening.',
    'doxycycline': 'Doxycycline is an antibiotic used to treat a variety of infections. Typical dosage is 100mg twice daily.',
    'escarpoles': 'Escarpoles are used to treat various conditions like blood clotting disorders and hypertension. Dosage and usage depend on the specific formulation and should be consulted with a healthcare provider.',
    'default': 'Sorry, I do not have information on that drug. Please consult a healthcare professional.',
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage = {
      type: 'user',
      text: inputMessage,
    };

    setMessages([...messages, userMessage]);

    const drugKey = inputMessage.trim().toLowerCase();
    const botResponse = predefinedResponses[drugKey] || predefinedResponses['default'];

    const botMessage = {
      type: 'bot',
      text: botResponse,
    };

    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000); // simulate delay

    setInputMessage('');
  };

  return (
    <div className="p-5 w-full  mx-auto">
        <h1 className='text-center text-4xl font-bold mb-3'>Chat with  me </h1>
      <div className="h-96 bg-gray-100 border rounded-lg p-4 overflow-y-scroll mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-3 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Ask about a drug..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow border border-gray-300 p-2 rounded-lg mr-2"
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSupport;
