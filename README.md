# IT Consulting Landing Page

This project is an landing page built with Next.js and TypeScript. It includes various components and assets to create an engaging and interactive user experience. The landing page is designed for the IT Consultant Challenge, a team-based competition where participants develop innovative solutions for real-life IT problems.

The IT Consultant Challenge is an engaging team-based competition where participants step into the role of IT consultants. In groups of four, you are tasked with solving real-life IT problems by developing innovative, digitalized solutions for a client. This challenge simulates the dynamic environment of IT consulting

## Project Structure

The project structure is as follows:

- `components.json`: Configuration file for components.
- `global.d.ts`: Global TypeScript declarations.
- `messages`: Contains localization files for English and Vietnamese.
- `public`: Contains public assets like images and icons.
- `src/@types`: Contains TypeScript type definitions.
- `src/app`: Contains the main application files.
- `src/assets`: Contains various asset files like icons and images.
- `src/components`: Contains React components used in the project.
- `src/constants`: Contains constant values used throughout the project.
- `src/i18n.ts`: Contains internationalization setup.
- `src/lib`: Contains utility functions and validation schemas.
- `src/middleware.ts`: Contains middleware configuration.
- `src/styles`: Contains CSS files for styling.
- `src/types`: Contains additional TypeScript type definitions.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Localization Support

The project includes localization support with translations in English and Vietnamese. The localization files are located in the `messages` folder.

## Form Handling

The project uses Formik for form handling. Relevant components can be found in the `src/components` folder, such as `FormField.tsx` and `PersonalRegistrationForm.tsx`.

## Animations and Interactive Elements

The project includes animations and interactive elements. Relevant components can be found in the `src/components/ui` folder, such as `AppCard.tsx` and `background-gradient-animation.tsx`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
