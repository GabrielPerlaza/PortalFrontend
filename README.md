#  Portal Frontend

Frontend desarrollado en **Angular** para la administración de artículos de un portal web. La aplicación permite gestionar el contenido mediante una interfaz moderna, intuitiva y responsiva, consumiendo una API REST desarrollada en **ASP.NET Core**.

##  Descripción

Este proyecto corresponde al cliente web del Portal de Administración, donde los usuarios autenticados pueden crear, editar, visualizar y eliminar artículos de forma sencilla.

El sistema consume una API REST para la gestión de la información y utiliza **Cloudinary** para el almacenamiento de imágenes de portada.

---

##  Tecnologías utilizadas

- Angular 22
- TypeScript
- RxJS
- Bootstrap 5
- HTML5
- CSS3
- SweetAlert2
- Cloudinary

---

##  Características

- Inicio de sesión de usuarios.
- Gestión completa de artículos (CRUD).
- Visualización previa de artículos mediante modal.
- Carga de imágenes hacia Cloudinary.
- Consumo de API REST.
- Interfaz responsiva.
- Alertas y confirmaciones mediante SweetAlert2.
- Arquitectura basada en componentes y servicios.
- Comunicación mediante HttpClient.

---

##  Estructura del proyecto

```text
src/
│
├── app/
│   ├── components/
│   ├── interfaces/
│   ├── models/
│   ├── pages/
│   ├── services/
│   ├── shared/
│   └── guards/
│
├── assets/
├── environments/
└── styles.css
```

---

##  Integración

El frontend consume una API desarrollada en ASP.NET Core encargada de:

- Autenticación de usuarios.
- Gestión de artículos.
- Almacenamiento de información.
- Gestión de imágenes mediante Cloudinary.

---

##  Gestión de imágenes

Las imágenes son almacenadas en Cloudinary. La aplicación únicamente conserva la URL generada para mostrar la imagen cuando sea necesario.

---

##  Instalación

Clonar el repositorio:

```bash
git clone https://github.com/GabrielPerlaza/PortalFrontend.git
```

Ingresar al proyecto:

```bash
cd PortalFrontend
```

Instalar dependencias:

```bash
npm install
```

o

```bash
pnpm install
```

Ejecutar la aplicación:

```bash
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

##  Estado del proyecto

Actualmente el proyecto cuenta con:

- ✔ Autenticación de usuarios.
- ✔ Administración de artículos.
- ✔ Subida de imágenes.
- ✔ Integración con API REST.
- ✔ Diseño responsivo.

Próximamente se incorporarán nuevas funcionalidades como gestión de categorías, etiquetas y mejoras en la experiencia de usuario.

---

##  Autor

**Gabriel Sebastián Perlaza Mendoza**

Desarrollador Full Stack especializado en el desarrollo de aplicaciones web utilizando Angular, ASP.NET Core, Entity Framework Core y PostgreSQL.

GitHub:
https://github.com/GabrielPerlaza
