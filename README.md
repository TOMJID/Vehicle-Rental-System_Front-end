Vehicle Rental System - Frontend
A modern, responsive frontend application for the Vehicle Rental System built with Next.js and shadcn/ui. This application provides an intuitive interface for customers to browse and book vehicles, and for administrators to manage the fleet.

🌐 Live Deployment
Frontend URL: [IN DEVELOPMENT]

Backend API: https://vehicle-rental-system-ivory-five.vercel.app/

✨ Features
Customer Features
Authentication: Secure login and registration
Vehicle Browsing: View all available vehicles with filtering options
Vehicle Details: Detailed view of individual vehicles
Booking Management: Create and view personal bookings
Responsive Design: Seamless experience across all devices
Admin Features
Dashboard: Overview of system statistics
Vehicle Management: Add, edit, and delete vehicles
Booking Overview: View and manage all customer bookings
User Management: Monitor registered users
🛠️ Technology Stack
Category	Technology
Framework	Next.js 14 (App Router)
Language	TypeScript
Styling	Tailwind CSS
UI Components	shadcn/ui
State Management	React Context / Zustand
HTTP Client	Axios / Fetch API
Form Handling	React Hook Form
Validation	Zod
Icons	Lucide React
📁 Project Structure
text
```
vehicle-rental-frontend/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── vehicles/
│   │   │   ├── bookings/
│   │   │   └── page.tsx
│   │   └── customer/
│   │       ├── bookings/
│   │       └── page.tsx
│   ├── vehicles/
│   │   ├── [vehicleId]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── layout/       # Header, Footer, Sidebar
│   ├── vehicles/     # Vehicle-related components
│   ├── bookings/     # Booking-related components
│   └── auth/         # Auth-related components
├── lib/
│   ├── api.ts        # API configuration
│   ├── utils.ts      # Utility functions
│   └── validations.ts # Zod schemas
├── hooks/            # Custom React hooks
├── types/            # TypeScript interfaces
├── context/          # React Context providers
└── public/           # Static assets
```
🚀 Setup & Installation
Prerequisites
Node.js 18+ and bun installed
Installation Steps


Clone the repository:
```
Bash
git clone https://github.com/TOMJID/Vehicle-Rental-Frontend.git
cd Vehicle-Rental-Frontend
```
Install dependencies:

```
Bash
bun install
```

Set up Environment Variables:
Create a .env.local file in the root directory:
```
NEXT_PUBLIC_API_URL=https://vehicle-rental-system-ivory-five.vercel.app/api/v1
```

Run the Development Server:
```
Bash
bun dev
```

```
Open in Browser:
Navigate to http://localhost:3000
```

📄 Pages & Routes
Route	Access	Description
```
/	Public	Landing page
/login	Public	User login
/register	Public	User registration
/vehicles	Public	Browse all vehicles
/vehicles/:id	Public	Vehicle details
/customer/bookings	Customer	View personal bookings
/admin	Admin	Admin dashboard
/admin/vehicles	Admin	Manage vehicles
/admin/bookings	Admin	Manage all bookings
```
🔗 API Integration
This frontend connects to the Vehicle Rental System Backend API:

Endpoint	Method	Description
```
/auth/signup	POST	Register new user
/auth/signin	POST	User login
/vehicles	GET	Fetch all vehicles
/vehicles/:id	GET	Fetch single vehicle
/vehicles	POST	Add vehicle (Admin)
/vehicles/:id	PUT	Update vehicle (Admin)
/vehicles/:id	DELETE	Delete vehicle (Admin)
/bookings	GET	Fetch bookings
/bookings	POST	Create booking
/bookings/:id	PUT	Update booking status
```