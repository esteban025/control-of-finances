# Finanzas Personales App

Una aplicación web construida con [Astro](https://astro.build/) que permite a los usuarios llevar un control sencillo y privado de sus finanzas personales. La app ofrece informes generales sobre finanzas personales y proporciona a los usuarios autenticados una plantilla online para registrar sus gastos, ayudándolos a administrar mejor su dinero.

## Características

- **Acceso seguro:** Solo los usuarios que inicien sesión con Google pueden acceder a la plantilla de registro de gastos.
- **Informes generales:** Página pública con consejos y datos sobre la gestión de finanzas personales.
- **Registro de gastos:** Los usuarios pueden agregar y consultar sus gastos, visualizar reportes y tener un seguimiento de su salud financiera.
- **Privacidad:** La aplicación NO solicita información sobre tarjetas de crédito, cuentas bancarias u otros datos sensibles de dinero. Es simplemente una herramienta de acompañamiento y guía.
- **Interfaz moderna:** Diseño responsivo y atractivo usando [Tailwind CSS](https://tailwindcss.com/).
- **Autenticación:** Implementada con [auth-astro](https://auth-astro.jonasmerlin.com/) para login seguro con Google.

## Tecnologías utilizadas

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [auth-astro](https://auth-astro.jonasmerlin.com/) (autenticación con Google)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/finanzas-personales-app.git
   cd finanzas-personales-app
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las credenciales de Google para la autenticación siguiendo la [documentación de auth-astro](https://auth-astro.jonasmerlin.com/).

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Uso

- Los visitantes pueden ver informes y consejos financieros generales.
- Para registrar gastos y acceder a la plantilla personalizada, es necesario iniciar sesión con Google.
- No se recolecta ni se solicita información bancaria o de tarjetas de crédito.

## Contribuciones

¡Las contribuciones son bienvenidas! Abre un Issue o haz un Pull Request para sugerir mejoras o reportar bugs.

## Licencia

[MIT](LICENSE)

---
**Nota:** Este proyecto es una guía para la administración personal de finanzas y no ofrece asesoría financiera profesional.