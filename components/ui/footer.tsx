import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="DegenPlays">
               <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg"  viewBox="-40 -160 2200 1200"><g ><defs id="1688062954149-207408_defs28"><linearGradient id="1688062954149-207408_linearGradient6460"><stop offset="0" id="1688062954149-207408_stop6456" stopColor="#90603e" stopOpacity="1"></stop><stop offset=".472" id="1688062954149-207408_stop6458" stopColor="#d6a27a" stopOpacity="1"></stop><stop offset=".989" id="1688062954149-207408_stop6468" stopColor="#90603e" stopOpacity="1"></stop></linearGradient><linearGradient id="1688062954149-207408_linearGradient6450"><stop offset="0" id="1688062954149-207408_stop6446" stopColor="#90603e" stopOpacity="1"></stop><stop offset=".504" id="1688062954149-207408_stop6466" stopColor="#b3815c" stopOpacity="1"></stop><stop offset="1" id="1688062954149-207408_stop6448" stopColor="#90603e" stopOpacity="1"></stop></linearGradient><linearGradient id="1688062954149-207408_linearGradient6412"><stop offset="0" id="1688062954149-207408_stop6408" stopColor="#f7f7f7" stopOpacity="1"></stop><stop offset="1" id="1688062954149-207408_stop6410" stopColor="#f7f7f7" stopOpacity="0"></stop></linearGradient><path id="1688062954149-207408_rect311" d="M2.493 55.525h161.028v36.206H2.493z"></path><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6414" x1=".001" y1="367.066" x2="733.6" y2="367.066" gradientUnits="userSpaceOnUse"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6450" id="1688062954149-207408_linearGradient6462" gradientUnits="userSpaceOnUse" x1="3.752" y1="70.281" x2="147.552" y2="70.281" spreadMethod="reflect"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6464" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6624" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6626" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6628" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6630" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6632" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6634" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6636" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6638" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6640" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6642" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6644" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6646" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6648" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6650" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6652" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6654" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6656" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6658" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6460" id="1688062954149-207408_linearGradient6660" gradientUnits="userSpaceOnUse" x1="-.499" y1="367.066" x2="734.098" y2="367.066"></linearGradient><linearGradient xlinkHref="#1688062954149-207408_linearGradient6412" id="1688062954149-207408_linearGradient6662" gradientUnits="userSpaceOnUse" x1=".001" y1="367.066" x2="733.6" y2="367.066"></linearGradient></defs><g id="1688062954149-207408_layer1"><text transform="translate(-96.736 -25.206) scale(12.8125)" id="1688062954149-207408_text309" fontSize="29.333" white-space="pre" fill="url(#1688062954149-207408_linearGradient6462)" fillOpacity="1" stroke="none" strokeOpacity="1"><tspan x="2.492" y="82.287" id="1688062954149-207408_tspan8199"><tspan  id="1688062954149-207408_tspan8197" fontFamily="Helvetica LT Narrow">DEGENPLAYS</tspan></tspan></text><g strokeLinecap="round" fill="url(#1688062954149-207408_linearGradient6464)" stroke="url(#1688062954149-207408_linearGradient6414)" strokeLinejoin="round" id="1688062954149-207408_g22" transform="translate(599.494 -39.5)" fillOpacity="1"><path fill="url(#1688062954149-207408_linearGradient6624)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6626)" d="M675.927 332.574c9.776 1.288 13.053 9.67 17.575 16.26 12.688 18.491 24.898 37.312 37.197 56.068 2.528 3.854 4.284 7.768 1.437 12.638-2.647 4.527-6.107 6.328-11.102 5.791-.494-.053-1-.007-1.5-.007-10.804 0-11.13 1.067-12.056 11.674a171.767 171.767 0 0 1-5.399 30.22c-4.607 16.843-9.413 33.719-15.643 50.003-5.437 14.211-12.925 27.64-19.556 41.39-8.248 17.1-18.992 32.655-31.24 47-12.469 14.603-25.327 29.02-39.298 42.155-14.906 14.013-31.621 25.909-49.114 36.792-20.343 12.657-41.658 23.24-64.019 31.392-16.416 5.986-33.549 10.202-50.602 14.175-10.363 2.414-21.148 3.363-31.804 4.083-16.36 1.107-32.781 2.124-49.158 1.89-11.798-.17-23.664-1.873-35.321-3.912-15.882-2.779-31.816-5.733-47.327-10.052-22.318-6.214-43.693-15.215-64.108-26.207-17.426-9.383-34.327-19.747-49.498-32.531-12.843-10.822-25.813-21.644-37.486-33.67-16.566-17.068-31.176-35.89-43.168-56.534-6.372-10.97-12.57-22.088-18.032-33.528-5.299-11.1-9.703-22.641-14.208-34.104-2.43-6.181-1.21-7.892 5.064-9.262 3.949-.862 7.81-2.178 11.787-2.826.955-.156 2.753 1.295 3.247 2.413 6.727 15.21 12.667 30.801 20.063 45.672 8.37 16.83 17.795 33.187 30.266 47.462 10.944 12.527 21.483 25.506 33.36 37.098 16.78 16.378 35.761 30.16 55.931 42.196 18.889 11.272 38.857 20.372 59.622 27.428 13.066 4.439 26.613 7.71 40.162 10.409a295.26 295.26 0 0 0 37.904 5.007c15.481 1.035 31.102 1.829 46.56.948 27.438-1.562 54.346-6.474 80.52-15.429 24.565-8.404 47.963-18.919 69.9-32.897 15.638-9.965 30.423-20.866 44.248-33.244 14.395-12.887 27.198-27.073 39.223-42.174 15.508-19.475 28.055-40.7 38.106-63.266 7.383-16.573 13.599-33.789 18.772-51.183 3.795-12.758 5.158-26.253 7.405-39.453 1.227-7.214 2.116-14.489 3.015-21.753.672-5.422 4.376-7.998 8.976-9.277 3.231-.899 3.585-1.334 1.528-4.305-6.415-9.262-12.335-18.867-18.503-28.301-2.25-3.442-3.812-3.338-6.227.255-6.133 9.125-12.01 18.436-18.515 27.288-2.394 3.259-.589 4.607 1.344 5.895 6.92 4.611 8.802 8.592 7.422 16.82-1.333 7.948-2.419 15.947-4.06 23.83-2.258 10.848-4.156 21.867-7.623 32.344-4.784 14.455-10.466 28.656-16.53 42.634-8.294 19.123-19.5 36.762-32.316 53.02-11.552 14.655-24.39 28.539-38.124 41.173-21.154 19.461-45.054 35.325-71.191 47.564-20.523 9.61-41.57 17.793-64.026 21.629-13.291 2.27-26.61 4.702-40.02 5.866-13.456 1.167-27.085 1.689-40.557.97-16.587-.887-32.933-4-49.245-7.563-21.493-4.695-42.007-12.133-61.608-21.52-19.576-9.374-38.623-20.25-55.102-34.728-13.184-11.582-26.508-23.128-38.552-35.843-9.02-9.524-16.436-20.651-23.945-31.495-6.563-9.48-12.713-19.314-18.199-29.45-4.678-8.643-7.985-18.019-12.248-26.902-1.524-3.176.38-4.4 2.299-5.191 4.128-1.703 8.628-2.54 12.68-4.38 3.483-1.582 5.051-.355 6.378 2.586 3.103 6.882 5.637 14.118 9.522 20.531 9.156 15.115 18.532 30.137 28.64 44.623 9.26 13.272 20.37 25.093 33.074 35.224 11.6 9.25 23.078 18.73 35.293 27.113 13.272 9.109 27.431 16.888 42.762 22.198 14.287 4.948 28.438 10.394 42.964 14.504 9.084 2.57 18.717 3.422 28.169 4.42 12.716 1.344 25.507 2.998 38.243 2.83 12.796-.17 25.561-2.448 38.346-3.735 16.911-1.701 33.052-6.524 49.023-12.02 18.643-6.415 36.236-14.965 52.984-25.413 15.097-9.418 28.948-20.29 42.243-32.112 14.97-13.313 27.157-28.745 38.883-44.836 10.175-13.962 18.534-28.891 25.65-44.431 7.07-15.437 13.222-31.351 16.264-48.27 1.601-8.91 4.032-17.668 5.772-26.557.177-.904-1.65-2.923-2.855-3.234-2.92-.753-6.039-.693-9.047-1.158-7.364-1.136-11.438-10.245-6.792-17.43 9.74-15.057 20.184-29.657 30.27-44.49 4.94-7.266 9.837-14.564 14.535-21.986 2.418-3.82 5.657-5.97 10.296-6.822z" id="1688062954149-207408_path2" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6628)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6630)" d="M417.677 73.324c-6.418-1-12.303-2.49-18.262-2.902-14.035-.972-28.155-2.473-42.148-1.81-14.405.685-28.779 3.247-43.019 5.807-11.014 1.98-22.005 4.591-32.65 8.027-28.126 9.08-54.336 22.167-77.744 40.34-11.096 8.616-22.226 17.386-32.13 27.295-17.293 17.3-32.187 36.605-44.096 58.134-9.823 17.759-18.797 35.866-23.884 55.598-3.352 12.999-6.131 26.148-9.033 39.259-1.083 4.89.909 6.75 6.093 6.37 6.063-.447 12.577 2.864 12.997 9.693.199 3.233-.681 7.105-2.439 9.795-14.506 22.21-29.242 44.27-44.112 66.24-5.12 7.565-15.398 7.338-20.501-.364-10.549-15.918-20.732-32.078-31.196-48.052-3.804-5.807-8.004-11.352-11.981-17.046-4.393-6.29-4.832-10.31-.764-15.54 1.46-1.877 4.383-2.648 6.698-3.804.533-.266 1.313-.039 1.98-.039 13.166-.005 12.385-.129 14.39-12.825 2.512-15.914 5.688-31.816 9.981-47.335 6.8-24.583 16.127-48.334 28.931-70.468 8.057-13.925 16.797-27.497 25.926-40.75 12.766-18.533 28.423-34.655 44.887-49.872 16.262-15.03 33.868-28.47 53.017-39.694 10.55-6.184 21.204-12.277 32.22-17.56 19.793-9.493 40.42-17.135 61.73-22.247a372.904 372.904 0 0 1 42.49-7.63c23.957-2.88 47.875-1.904 71.7-1.186 18.297.55 36.477 4.62 54.439 9.31 27.08 7.072 53.006 16.76 77.61 29.963 17.887 9.6 34.978 20.488 50.61 33.533 8.05 6.718 16.4 13.114 24.065 20.244 7.218 6.715 13.816 14.112 20.474 21.402 2.241 2.453 2.806 5.292-.468 7.879-3.192 2.522-6.205 5.291-9.14 8.114-3.023 2.908-5.417 1.944-7.993-.66-9.355-9.459-18.313-19.389-28.33-28.095-11.18-9.717-22.904-18.96-35.192-27.22-21.116-14.195-43.834-25.63-67.966-33.744-15.417-5.184-31.234-9.349-47.1-12.971-10.219-2.333-20.826-3.131-31.306-4.1-8.321-.77-16.712-.9-25.077-1.05-9.386-.167-18.835-.682-28.154.13-10.871.947-21.587 3.596-32.45 4.733-16.94 1.772-33.036 6.854-48.97 12.233-28.5 9.621-55.132 23.236-79.51 40.906-10.771 7.808-21.02 16.385-31.122 25.06-20.71 17.783-38.157 38.453-52.616 61.588-6.508 10.415-13.365 20.739-18.58 31.803-7.276 15.44-13.99 31.258-19.386 47.434-4.475 13.413-7.076 27.504-9.791 41.434-1.98 10.154-2.506 20.584-4.244 30.796-.907 5.327-2.146 10.777-9.334 12.015-4.097.706-2.766 4.22-1.193 6.617 5.431 8.276 11.04 16.435 16.565 24.65.428.636.66 1.406 1.09 2.042 2.557 3.79 3.736 3.61 6.316-.25 6.38-9.549 12.801-19.076 19.502-28.4 1.62-2.253 1.11-2.898-.915-3.84-9.52-4.43-9.781-9.903-8.052-18.998 1.934-10.166 2.085-20.694 4.323-30.774 2.715-12.225 6.52-24.235 10.356-36.177 7.227-22.503 17.982-43.445 30.647-63.252 7.782-12.17 17.065-23.448 26.321-34.589 6.845-8.238 14.485-15.868 22.212-23.311 15.205-14.647 32.2-27.018 50.284-37.867 20.745-12.446 42.536-22.69 65.859-29.254 12.307-3.464 24.893-5.95 37.382-8.751 22.552-5.057 45.507-4.669 68.324-3.75 13.063.527 26.09 3.363 39 5.848 11 2.117 22.002 4.618 32.666 8.009 23.666 7.524 46.011 17.889 67.025 31.37 14.573 9.35 28.08 19.824 41.087 31.18 13.701 11.96 25.536 25.503 36.635 39.791 1.74 2.242 1.722 3.861-.87 5.592-3.699 2.471-7.227 5.223-10.664 8.054-2.918 2.404-5.2 2.148-7.463-.844a231.17 231.17 0 0 0-37.273-38.933c-9.83-8.118-19.715-16.314-30.369-23.259-24.926-16.248-51.774-28.412-80.93-35.08-5.647-1.291-11.276-2.66-17.414-3.994z" id="1688062954149-207408_path4" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6632)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6634)" d="M633.427 214.074c-7.085 8.751-13.862 17.3-20.77 25.74-6.641 8.114-13.51 16.04-20.11 24.185-7.763 9.576-15.307 19.33-23.02 28.945-3.436 4.283-6.682 8.833-10.731 12.461-2.37 2.123-6.147 3.74-9.301 3.757-43.662.24-87.33.487-130.986-.095-9.412-.126-16.028 3.146-22.317 9.188a3696.21 3696.21 0 0 1-37.342 35.363c-12.947 12.098-26.034 24.046-39.04 36.08-9.404 8.702-18.77 17.444-28.166 26.156-8.907 8.258-17.788 16.545-26.76 24.732-5.652 5.156-11.322 10.312-17.265 15.12-1.812 1.467-4.557 2.508-6.877 2.512-70.661.13-141.323.072-211.984.185-4.522.008-6.11-1.861-6.085-5.962.021-3.666.104-7.336-.023-10.998-.134-3.84 1.699-5.23 5.374-5.154 6.164.128 12.332.063 18.498.03 61.748-.326 123.496-.64 185.242-1.085 2.204-.016 4.74-.896 6.523-2.194 3.413-2.482 6.467-5.48 9.544-8.398 8.034-7.617 15.939-15.37 24.006-22.95 14.977-14.073 30.03-28.065 45.058-42.083 9.734-9.08 19.462-18.168 29.224-27.218 13.239-12.274 26.436-24.594 39.81-36.718 3.51-3.18 7.502-5.877 11.497-8.444 1.341-.862 3.382-.87 5.104-.87 45.33-.044 90.66-.124 135.989.088 5.114.024 8.31-2.205 11.138-5.703 6.443-7.97 12.764-16.04 19.158-24.052 8-10.024 15.966-20.076 24.053-30.029 7.82-9.623 15.854-19.073 23.649-28.716 9.162-11.335 18.103-22.85 27.264-34.186 6.485-8.025 13.125-15.926 19.797-23.797 3.171-3.741 6.624-7.244 9.839-10.95.669-.771.853-1.963 1.26-2.96-1.02-.244-2.05-.726-3.062-.692-8.087.265-16.176.548-24.255.995-4.294.237-5.918-1.642-5.725-5.817.192-4.158-.013-8.332.059-12.497.064-3.745 2.025-5.829 5.813-5.69 6.032.223 12.055.687 18.087.95 2.884.125 5.78.021 8.67.021 8.056 0 16.141.422 24.161-.116 8.374-.562 12.002 5.516 12.127 11.68.356 17.659.19 35.33-.022 52.992-.014 1.161-2.075 3.194-3.301 3.287-4.97.378-10.029.52-14.964-.045-1.667-.19-4.274-2.66-4.363-4.21-.28-4.826.515-9.707.727-14.574.058-1.325-.47-2.675-.728-4.014-1.229.654-2.807 1.018-3.63 2.01-5.95 7.157-11.766 14.427-17.589 21.69a4363.972 4363.972 0 0 0-18.872 23.682c-4.75 6.01-9.425 12.077-14.383 18.368z" id="1688062954149-207408_path6" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6636)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6638)" d="M320.677 278.324v40.99c0 3.39.284 6.818-.162 10.148-.146 1.085-2.147 2.65-3.383 2.732-4.811.319-9.673-.116-14.483.207-3.933.264-5.084-1.014-5.059-4.988.168-26.326.09-52.653.085-78.98-.002-7.05 1.072-7.096-6.765-7.15-34.02-.237-68.042-.555-102.06-1.05-4.206-.06-5.425 1.15-5.265 5.3.314 8.152.092 16.326.092 24.49 0 10.612.125 21.226-.041 31.835-.122 7.754-.926 15.503-.888 23.252.057 11.36.678 22.717.9 34.079.15 7.661.03 15.329.03 22.994 0 7.67.007 15.339-.003 23.008-.009 6.246-.865 7.131-6.827 7.133-3.832 0-7.682-.225-11.492.064-3.738.284-4.774-1.086-4.754-4.767.14-26.493.075-52.987.075-79.481 0-32.326.028-64.652-.016-96.977-.013-10.39 7.176-14.152 15.169-12.957 2.75.41 5.704-.833 8.566-.839 35.658-.066 71.316-.105 106.974.033 4.664.018 6.436-1.47 6.381-6.232-.191-16.494.225-33-.216-49.484-.185-6.929 6.26-13.583 13.675-13.507 32.989.338 65.984.055 98.975.193 12.917.054 25.833.598 38.748.966 4.747.136 8.724 4.899 8.734 10.462.029 16.163.01 32.326.01 48.489 0 16.22.003 32.44-.001 48.66-.002 5.82-.58 6.373-6.583 6.377-3.5.002-7.022-.251-10.492.066-3.987.365-5.033-1.105-5.01-5.025.163-27.16 0-54.32.176-81.48.028-4.194-.85-5.694-5.406-5.668-34.158.196-68.317.168-102.475.036-4.705-.018-6.43 1.618-6.307 6.327.12 4.516-.793 9.05-.83 13.58-.028 3.525.843 7.053.882 10.584.124 11.22.172 22.443.005 33.662-.125 8.42-.708 16.833-.93 25.253-.15 5.718-.029 11.443-.029 17.665z" id="1688062954149-207408_path8" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6640)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6642)" d="M572.677 378.324c0-6.33-.326-12.184.105-17.982.337-4.54-1.63-5.112-5.468-5.088-22.653.142-45.307.07-67.96.07-12.16 0-24.32.091-36.478-.061-3.233-.04-4.339.976-4.26 4.24.19 7.99-.07 15.991.115 23.982.097 4.148-1.323 6.132-5.678 5.882-3.652-.21-7.327-.075-10.99-.034-4.19.047-6.389-1.898-6.387-6.168.004-12.16-.06-24.32.021-36.479.064-9.416 5.135-14.36 14.497-14.36 43.975-.003 87.95.075 131.923-.075 7.58-.026 13.808 5.13 13.739 13.809-.377 46.803-.26 93.611-.059 140.416.022 4.963-1.51 6.25-6.152 5.957-3.492-.22-7.055.482-10.57.91-4.683.57-6.532-1.656-6.508-6.082.196-36.145.11-72.291.11-108.937z" id="1688062954149-207408_path10" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6644)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6646)" d="M435.677 558.324v-35.997c0-13.446.112-26.894-.044-40.338-.085-7.365-.938-14.726-.887-22.084.094-13.586.789-27.17.825-40.754.012-4.575 3.407-4.345 5.765-4.67 4.088-.565 8.326-.375 12.472-.086 3.129.219 4.976 1.585 4.968 5.528-.137 68.327-.126 136.654-.022 204.98.006 3.583-1.604 5.302-4.621 5.323-4.86.033-9.73-.915-14.581-.798-4.24.103-3.893-2.358-3.89-5.11.027-21.831.015-43.663.015-65.994z" id="1688062954149-207408_path12" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6648)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6650)" d="M320.677 476.324v146.488c0 5.917-1.6 7.507-7.537 7.512-14.463.013-14.463.013-14.463-14.5l.001-137.988c0-5.917 1.6-7.508 7.536-7.512 3.167-.002 6.345-.174 9.496.048 3.208.226 5.61 1.544 4.967 5.952z" id="1688062954149-207408_path14" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6652)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6654)" d="M688.677 221.324c4.667 16.722 9.526 32.892 13.91 49.19 1.873 6.964 2.844 14.18 4.035 21.313.34 2.036.538 4.157-2.8 4.59-4.962.642-9.812 2.125-14.768 2.85-5.904.866-5.498-4.44-6.249-7.63-2.977-12.646-4.774-25.605-8.317-38.075-3.698-13.015-8.824-25.631-13.498-38.358-1.347-3.666 1.156-5.419 3.293-6.765 3.493-2.2 7.468-3.628 11.21-5.445 3.17-1.54 5.457-1.093 6.853 2.465 2.023 5.156 4.213 10.247 6.331 15.865z" id="1688062954149-207408_path16" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6656)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6658)" d="M160.677 536.324c0-16.656.104-32.813-.067-48.967-.047-4.438 1.453-6.375 5.996-6.082 3.705.24 7.44.113 11.16.03 3.196-.072 4.922 1.222 4.919 4.567-.016 19.654.09 39.309-.2 58.958-.023 1.519-2.569 3.403-4.349 4.358-1.293.695-3.259.104-4.924.141-11.398.251-13.306-.253-12.535-13.005z" id="1688062954149-207408_path18" fillOpacity="1"></path><path fill="url(#1688062954149-207408_linearGradient6660)" opacity="1" stroke="url(#1688062954149-207408_linearGradient6662)" d="M655.677 269.324c1.334 7.614 2.674 14.727 3.997 21.843.604 3.247-.38 5.23-4 5.713-4.848.645-9.634 1.785-14.49 2.312-1.075.116-3.147-1.248-3.383-2.254-2.858-12.184-5.141-24.51-8.298-36.611-1.075-4.12.827-5.57 3.483-6.69 4.113-1.734 8.602-2.592 12.669-4.41 3.332-1.49 4.257.112 5.018 2.67 1.68 5.639 3.338 11.284 5.004 17.427z" id="1688062954149-207408_path20" fillOpacity="1"></path></g></g></g></svg>
                </Link>
              </div>
              <div className="text-gray-400">DegenPlays taking the work out of making money.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div> */}

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div> */}

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            {/* <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul> */}

            {/* Copyrights note */}
            {/* <div className="text-gray-400 text-sm mr-4">&copy; DegenPlays.win. All rights reserved.</div> */}

          </div>

        </div>
      </div>
    </footer>
  )
}
