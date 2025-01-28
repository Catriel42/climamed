import { useState } from "react";
import { WhatsAppOutlined, FacebookOutlined, InstagramOutlined, MailOutlined } from '@ant-design/icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: '',
    subject: '',
    message: '',
  });

  const departments = [
    'Chuquisaca',
    'Cochabamba',
    'La Paz',
    'Santa Cruz',
    'Oruro',
    'Potosí',
    'Tarija',
    'Beni',
    'Pando',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, /* email, */ department, subject, message } = formData;

    const formattedMessage = `Climamed:\n\nSoy ${name}\nDel departamento de ${department}.\nAsunto: ${subject}\n ${message}.\nMi numero es: ${phone}`;

    // WhatsApp Link (to open the chat with formatted message)
    const whatsappUrl = `https://wa.me/59175961315?text=${encodeURIComponent(formattedMessage)}`;

    /* // Send email (assuming an API is used to send emails)
    const emailBody = `mailto:admin@tusitio.com?subject=Nuevo mensaje de contacto&body=${encodeURIComponent(formattedMessage)}`;
 */
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    /* // Open email client
    window.open(emailBody, '_blank'); */
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-light rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Celular</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tu celular"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tu correo electrónico"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Departamento</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          >
            <option value="">Selecciona un departamento</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Asunto</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Asunto"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-secondary font-semibold">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-light rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
            rows="4"
            placeholder="Tu mensaje"
            required
          />
        </div>

        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-light font-bold rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-light"
          >
            Enviar
          </button>
        </div>
      </form>
      {/* Redes sociales */}
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://wa.me/59160775958" target="_blank" rel="noopener noreferrer">
          <WhatsAppOutlined className="text-2xl text-primary hover:text-accent" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61572377169715" target="_blank" rel="noopener noreferrer">
          <FacebookOutlined className="text-2xl text-primary hover:text-accent" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <InstagramOutlined className="text-2xl text-primary hover:text-accent" />
        </a>
        <a href="mailto:climamedbolivia@gmail.com" target="_blank" rel="noopener noreferrer">
          <MailOutlined className="text-2xl text-primary hover:text-accent" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
