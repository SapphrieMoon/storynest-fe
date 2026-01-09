<p align="center">
  <img src="./public/cover.png" alt="StoryNest Banner" width="100%"/>
</p>

# 📖 StoryNest

AI-powered storytelling platform for creating, reading, and sharing interactive stories.

## 🎯 Overview

**StoryNest** is a modern web application that allows users to create and explore stories with the support of AI.  
The platform focuses on a smooth reading experience, intuitive story creation flows, and scalable frontend architecture.

This project was built as a real-world product, covering UI/UX design, frontend development, deployment, and integration with backend services.

---

## 🌐 Live Demo

The project has been deployed and is publicly accessible at:

👉 **https://storynest.io.vn/**

You can explore the full user flow, including browsing stories, reading content, and interacting with the platform directly on the live website.

---

## 🎬 Demo Video

Watch the demo video showcasing the main features and user flow:

👉 **Video Demo**  
https://drive.google.com/file/d/1_6xgTiictEM8jzR6oXjrjL0GbYUjMQkJ/view

---

## 🧩 Key Features

- 📚 Browse and read stories with a clean, distraction-free UI
- ✍️ Story creation workflow
- 🤖 AI-assisted content generation
- 🔍 Story discovery and navigation
- 📱 Fully responsive design
- ⚡ Optimized performance with Next.js App Router

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **API Communication**: REST API
- **Deployment**: Vercel
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```
├── 📁 public
│   ├── 📁 assets
│   │   ├── 🖼️ Anonymous_avatar-removebg-preview.png
│   │   ├── 🖼️ StoryNest_logo.svg
│   │   ├── 🖼️ UploadIcon.png
│   │   ├── 🖼️ background.jpg
│   │   ├── 🖼️ icon.png
│   │   ├── 🖼️ loader.svg
│   │   └── 🖼️ neat.png
│   ├── 📁 svg
│   │   ├── 🖼️ StoryNest_logo.svg
│   │   ├── 🖼️ arrow_back.svg
│   │   └── 🖼️ logo-2.svg
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 (Policy)
│   │   │   ├── 📁 privacy-policy
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📁 term-of-services
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 (auth)
│   │   │   ├── 📁 forgot-password
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 google-callback
│   │   │   │   ├── 📄 GoogleCallbackClient.tsx
│   │   │   │   ├── 📄 google-login-button.tsx
│   │   │   │   ├── 🎨 oauthButton.module.css
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 login
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 login1
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 refresh
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 register
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 reset-password
│   │   │   │   ├── 📄 ResetPasswordContent.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📄 layout.tsx
│   │   ├── 📁 (landing-page)
│   │   │   ├── 📄 layout.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 admin
│   │   │   └── 📁 login
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 home
│   │   │   ├── 📁 (private)
│   │   │   │   └── 📁 (user)
│   │   │   │       ├── 📁 create-story
│   │   │   │       │   ├── 📄 old-page.tsx
│   │   │   │       │   └── 📄 page.tsx
│   │   │   │       ├── 📁 create-story-ai
│   │   │   │       │   └── 📄 page.tsx
│   │   │   │       ├── 📁 profile
│   │   │   │       │   ├── 📁 modals
│   │   │   │       │   │   ├── 📄 ChangePasswordForm.tsx
│   │   │   │       │   │   ├── 📄 EditProfileModal.tsx
│   │   │   │       │   │   └── 📄 ProfileForm.tsx
│   │   │   │       │   └── 📄 page.tsx
│   │   │   │       ├── 📁 update-story
│   │   │   │       │   └── 📁 [id]
│   │   │   │       │       └── 📄 page.tsx
│   │   │   │       └── 📄 layout.tsx
│   │   │   ├── 📁 (public)
│   │   │   │   ├── 📁 detail-story
│   │   │   │   │   └── 📁 [id]
│   │   │   │   │       ├── 📄 CommentItem.tsx
│   │   │   │   │       ├── 📄 CommentSection.tsx
│   │   │   │   │       ├── 📄 page.tsx
│   │   │   │   │       └── 📄 story-detail-action.tsx
│   │   │   │   ├── 📁 invoice
│   │   │   │   │   ├── 📄 PaymentSuccessClient.tsx
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 payment
│   │   │   │   │   ├── 📄 Paymentclient.tsx
│   │   │   │   │   └── 📄 page.tsx
│   │   │   │   ├── 📁 search
│   │   │   │   │   ├── 📄 page.tsx
│   │   │   │   │   └── 📄 searchComponent.tsx
│   │   │   │   └── 📁 subcription
│   │   │   │       ├── 📄 data.tsx
│   │   │   │       └── 📄 page.tsx
│   │   │   ├── 📄 layout.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 manage
│   │   │   ├── 📁 dashboard
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 payment
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 stories
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📄 layout.tsx
│   │   ├── 🎨 globals.css
│   │   ├── 🖼️ icon.png
│   │   ├── 📄 layout.tsx
│   │   └── 📄 middleware.ts
│   ├── 📁 auth
│   │   └── 📄 RequireRole.tsx
│   ├── 📁 components
│   │   ├── 📁 GradientText
│   │   │   ├── 🎨 GradientText.module.css
│   │   │   └── 📄 GradientText.tsx
│   │   ├── 📁 custom-ui
│   │   │   ├── 📁 FileUpload
│   │   │   │   ├── 🎨 FileUpload.module.css
│   │   │   │   ├── 📄 FileUpload.tsx
│   │   │   │   └── 📝 README.md
│   │   │   ├── 📄 RippleButton.tsx
│   │   │   └── 📄 SparkleSwitch.tsx
│   │   ├── 📁 home
│   │   │   ├── 📄 create-story.tsx
│   │   │   └── 📄 post-card.tsx
│   │   ├── 📁 landing
│   │   │   ├── 📄 Features.tsx
│   │   │   ├── 📄 Footer.tsx
│   │   │   └── 📄 Hero.tsx
│   │   ├── 📁 profile
│   │   │   ├── 📄 profile-header.tsx
│   │   │   ├── 📄 profile-tabs.tsx
│   │   │   └── 📄 story-card-preview.tsx
│   │   ├── 📁 story-nest-loader
│   │   │   └── 📄 StoryNestLoader.tsx
│   │   ├── 📁 ui
│   │   │   ├── 📄 GoogleButton.tsx
│   │   │   ├── 📄 avatar.tsx
│   │   │   ├── 📄 badge.tsx
│   │   │   ├── 📄 button.tsx
│   │   │   ├── 📄 calendar.tsx
│   │   │   ├── 📄 card.tsx
│   │   │   ├── 📄 carousel.tsx
│   │   │   ├── 📄 checkbox.tsx
│   │   │   ├── 📄 dialog.tsx
│   │   │   ├── 📄 dropdown-menu.tsx
│   │   │   ├── 📄 form.tsx
│   │   │   ├── 📄 input.tsx
│   │   │   ├── 📄 label.tsx
│   │   │   ├── 📄 popover.tsx
│   │   │   ├── 📄 select.tsx
│   │   │   ├── 📄 separator.tsx
│   │   │   ├── 📄 sheet.tsx
│   │   │   ├── 📄 sidebar.tsx
│   │   │   ├── 📄 skeleton.tsx
│   │   │   ├── 📄 sonner.tsx
│   │   │   ├── 📄 tabs.tsx
│   │   │   ├── 📄 textarea.tsx
│   │   │   └── 📄 tooltip.tsx
│   │   ├── 📄 AdminSidebar.tsx
│   │   ├── 📄 Anonymous.tsx
│   │   ├── 🎨 ElectricBorder.css
│   │   ├── 📄 ElectricBorder.tsx
│   │   ├── 📄 GoogleButton.tsx
│   │   ├── 🎨 GradientText.css
│   │   ├── 📄 GradientText.jsx
│   │   ├── 📄 Header.tsx
│   │   ├── 📄 ImagePreview.tsx
│   │   ├── 📄 Loader.tsx
│   │   ├── 📄 NeatBackground.tsx
│   │   ├── 📄 Notification.tsx
│   │   ├── 📄 SearchBar.tsx
│   │   ├── 📄 Sidebar.tsx
│   │   ├── 📄 StoryForm.tsx
│   │   ├── 📄 StoryMoreMenu.tsx
│   │   ├── 📄 TagInput.tsx
│   │   ├── 🎨 TiltedCard.css
│   │   ├── 📄 TiltedCard.tsx
│   │   ├── 📄 UserSidebar.tsx
│   │   └── 📄 VoicePlayer.tsx
│   ├── 📁 context
│   │   ├── 📄 AppProvider.tsx
│   │   ├── 📄 AuthContext.tsx
│   │   └── 📄 SignalRContext.tsx
│   ├── 📁 helper
│   │   ├── 📄 format-time.ts
│   │   └── 📄 unwrap.tsx
│   ├── 📁 hooks
│   │   ├── 📄 use-mobile.ts
│   │   └── 📄 useNeatBackgroundInit.ts
│   ├── 📁 lib
│   │   ├── 📄 axios.ts
│   │   ├── 📄 jwt.ts
│   │   ├── 📄 localStorage.ts
│   │   ├── 📄 useRefreshToken.ts
│   │   └── 📄 utils.ts
│   ├── 📁 queries
│   │   ├── 📄 admin.queries.ts
│   │   ├── 📄 auth.queries.ts
│   │   ├── 📄 media.queries.ts
│   │   ├── 📄 notification.queries.ts
│   │   ├── 📄 payment.queries.ts
│   │   ├── 📄 story.queries.ts
│   │   └── 📄 user.queries.ts
│   ├── 📁 services
│   │   ├── 📄 admin.service.ts
│   │   ├── 📄 auth.service.ts
│   │   ├── 📄 media.service.ts
│   │   ├── 📄 notification.service.ts
│   │   ├── 📄 payment.service.ts
│   │   ├── 📄 story.service.ts
│   │   └── 📄 user.service.ts
│   ├── 📁 styles
│   │   └── 🎨 ripple.css
│   └── 📁 types
│       ├── 📄 admin.type.ts
│       ├── 📄 auth.type.ts
│       ├── 📄 jwt.type.ts
│       ├── 📄 media.type.ts
│       ├── 📄 notification.ts
│       ├── 📄 payment.ts
│       ├── 📄 story.type.ts
│       └── 📄 user.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ components.json
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package.json
├── ⚙️ pnpm-lock.yaml
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with  
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites

- Node.js **v18+**
- pnpm (recommended) / npm / yarn / bun

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SapphrieMoon/storynest-fe.git
cd storynest-fe
pnpm install
```

### Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

### Environment Variables

Create a .env.local file in the root directory:

```bash
NEXT_PUBLIC_API_URL=your_backend_api_url
```

Note: The backend service is maintained in a separate repository.

### 📈 What I Learned

Designing scalable frontend architecture with Next.js App Router

Structuring large React applications

Working with real-world API flows

Deploying and maintaining a production-ready web application

Writing clean, maintainable, and documented code

### 👨‍💻 Author

SapphireMoon

GitHub: https://github.com/SapphrieMoon

Project Repository: https://github.com/SapphrieMoon/storynest-fe

### 📄 License

This project is for educational and portfolio purposes.

<p align="center">Made with ❤️ using Next.js</p>
```
