📊 Sistema de Registro y Consulta Empresarial
Sistema integral de gestión empresarial desarrollado con Angular y PHP que permite administrar de manera eficiente todos los aspectos operativos de una empresa.
🚀 Características Principales
Módulos de Gestión

👥 Empleados: Registro completo con datos personales, fotos y notas
🏢 Clientes: Gestión de información de contacto y ubicación
📦 Productos: Catálogo con precios, categorías y proveedores
🏷️ Categorías: Organización y clasificación de productos
🚚 Proveedores: Base de datos de suministradores
💰 Ventas: Sistema completo de transacciones con múltiples productos

Características Técnicas

✨ Interfaz moderna y responsive
🎨 Gradientes únicos para cada módulo
📱 Diseño adaptable a dispositivos móviles
🔄 Formularios reactivos con validación
📊 Integración completa con base de datos
🎯 Navegación intuitiva

🛠️ Tecnologías Utilizadas
Frontend

Angular 17+ - Framework principal
TypeScript - Lenguaje de programación
Bootstrap 5 - Framework CSS
Reactive Forms - Manejo de formularios
RxJS - Programación reactiva

Backend

PHP - Servidor backend
MySQL - Base de datos
HTTP Client - Comunicación API REST

Herramientas de Desarrollo

FontAwesome - Iconografía
Google Fonts - Tipografías
CSS Grid/Flexbox - Layout responsive

🚀 Instalación y Configuración
Prerrequisitos

Node.js (v16 o superior)
Angular CLI
Servidor web con PHP
MySQL

Configuración del Backend

Configurar servidor web (Apache/Nginx) con PHP
Crear base de datos MySQL
Configurar endpoints en src/app/services/
Ajustar URLs de API según tu servidor

📱 Funcionalidades por Módulo
🏠 Dashboard Principal

Navegación rápida a todos los módulos
Diseño tipo tarjetas con iconos distintivos
Enlaces directos a cada funcionalidad

👥 Gestión de Empleados

Formulario completo con datos personales
Carga de fotografías
Campo de notas adicionales
Validación de formularios

🏢 Gestión de Clientes

Información de contacto completa
Datos de ubicación y dirección
Confirmación de registro exitoso

📦 Gestión de Productos

Selección dinámica de categorías
Asignación de proveedores
Control de precios y unidades
Validación de datos

💰 Sistema de Ventas

Selección de clientes y empleados
Múltiples productos por venta
Cálculo automático de totales
Gestión de transportistas

🎨 Diseño Visual
Cada módulo cuenta con su propio esquema de colores:

Categorías: Gradiente azul cielo
Empleados: Gradiente verde natural
Clientes: Gradiente rosa intenso
Productos: Gradiente púrpura suave
Proveedores: Gradiente naranja cálido
Ventas: Gradiente azul púrpura

🔧 API Endpoints
El sistema utiliza los siguientes endpoints PHP:

POST /categoria.php - Registro de categorías
POST /employee.php - Registro de empleados
POST /customer.php - Registro de clientes
POST /product.php - Registro de productos
POST /proveedor.php - Registro de proveedores
POST /ventas.php - Procesamiento de ventas
GET /Cnsul_*.php - Consultas de datos

👨‍💻 Autor
Brayan Velázquez Zamora
