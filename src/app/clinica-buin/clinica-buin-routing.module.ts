const routes: Routes = [
  {
    path: '',
    component: ReservaPage  // Ruta de la página de reservas
  },
  {
    path: 'clinica-buin',  // Ruta para la Clínica Buin
    component: ClinicaBuinPage  // Asegúrate de crear esta página o componente
  },
  {
    path: 'hospital-de-santiago',  // Ruta para el Hospital de Santiago
    component: HospitalSantiagoPage  // Asegúrate de crear esta página o componente
  },
  {
    path: 'hospital-de-paine',  // Ruta para el Hospital de Paine
    component: HospitalPainePage  // Asegúrate de crear esta página o componente
  }
];
