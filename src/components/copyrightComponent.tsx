import React from 'react';

const CopyrightComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
      <div className="pt-20 pb-4 sm:px-8 text-center">
        <p className="pb-2 p-small statement">
          &copy; {currentYear} Eleva. Todos os direitos reservados.
        </p>
      </div>
  );
};

export default CopyrightComponent;
