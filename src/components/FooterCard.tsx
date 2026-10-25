import { contact } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export default function FooterCard() {
  const { dark } = useTheme();

  const cardCls = dark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-white';
  const labelCls = 'text-xs font-medium text-neutral-400 mb-3';

  return (
    <div id="contact" className={`rounded-2xl border p-6 grid grid-cols-2 gap-10 mt-4 transition-all duration-300 ${cardCls}`}>

      {/* Open To */}
      <div>
        <p className={labelCls}>Open To</p>
        <p className={`text-sm leading-relaxed ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Work-from-home Virtual Assistant and administrative, finance, or billing support roles.
          Comfortable working independently and leading a small team.
        </p>
      </div>

      {/* Contact */}
      <div>
        <p className={labelCls}>Contact</p>
        <div className="flex flex-col">
          {[
            { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
            { label: 'Phone', value: contact.phone, href: `tel:${contact.phone}` },
          ].map((item) => (
            <a key={item.label} href={item.href}
              className={`group flex items-center justify-between py-2.5 border-b transition-all duration-200
                ${dark ? 'border-neutral-800 hover:border-neutral-600' : 'border-neutral-100 hover:border-neutral-300'}`}>
              <div>
                <div className={`text-xs mb-0.5 ${dark ? 'text-neutral-500' : 'text-neutral-400'}`}>{item.label}</div>
                <div className={`text-sm font-medium transition-colors duration-200
                  ${dark ? 'text-neutral-200 group-hover:text-white' : 'text-neutral-700 group-hover:text-neutral-900'}`}>
                  {item.value}
                </div>
              </div>
              <span className={`text-sm transition-all duration-200 group-hover:translate-x-0.5
                ${dark ? 'text-neutral-600 group-hover:text-neutral-400' : 'text-neutral-300 group-hover:text-neutral-500'}`}>›</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
