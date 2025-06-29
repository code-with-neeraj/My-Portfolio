import  { useRef } from 'react';
import './about.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';



const SocialSidebar = () => {
  const rippleRefs = useRef([]);

  const handleRipple = (index) => {
    const icon = rippleRefs.current[index];
    if (!icon) return;
    icon.classList.remove('clicked');
    void icon.offsetWidth;
    icon.classList.add('clicked');
  };

  const icons = [
    { icon: 'fa-facebook-f', label: 'Facebook', link: 'https://www.facebook.com/me/' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn', link: 'https://www.linkedin.com/in/neerajkumar9844?' },
    { icon: 'fa-instagram', label: 'Instagram', link: 'https://www.instagram.com/neeraj_kumar_2002/' },
    { icon: 'fa-github', label: 'GitHub', link: 'https://github.com/code-with-neeraj' },
  ];

  return (
    <div className="about">

   
    <div className="sidebar-a">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-icon ripple"
          ref={(el) => (rippleRefs.current[index] = el)}
          onClick={() => handleRipple(index)}
        >
          <i className={`fab ${item.icon}`}></i>
          <span className="label">{item.label}</span>
        </a>
      ))}
    </div>
    <div className="date">
      <p>Copyright © 2024</p>

      <p className="name">Neeraj kumar</p>
      </div>
    </div>
  );
};



export default SocialSidebar;
