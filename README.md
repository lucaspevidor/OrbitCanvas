# Planet Orbit Simulation using HTML Canvas

![Demo](https://github.com/lucaspevidor/OrbitCanvas/blob/main/Demo.gif)

This project is a simple planet orbit simulation built using HTML Canvas. It provides a visual representation of the gravitational interactions between a central star and orbiting planets. By adjusting parameters such as planet mass, initial velocity, and gravitational constant, users can observe the resulting orbits and explore different scenarios.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simulate planet orbits around a central star.
- Adjust initial conditions like planet mass, initial velocity, and more.
- Visualize the gravitational forces at play.
- Visual representation using HTML Canvas.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need a modern web browser to run this project locally.

### Installation

1. Clone the repository:

   ```bash
   git clone https://repo.git
   ```

1. Navigate to the project directory:

   ```bash
   cd planet-orbit-simulation
   ```

1. Install the dependencies using npm:

    ```bash
    npm i
    ```

1. Run the project with the command:

    ```bash
    npm run dev
    ```

1. Access the app by connecting to the following url in the browser:

    ```
    http://localhost:1234
    ```

## Usage

1. Open the simulation in your web browser.

1. Adjust various parameters like planet mass, initial velocity, and gravitational constant on the ```script.ts``` file.

1. Watch as the planets orbit around the central star according to the laws of gravity.

## Customization

You can customize the project by modifying the following aspects:

- **Visuals**: Adjust colors, sizes, and styles of the central star and planets by modifying the code in the `script.ts` file.

- **Physics Constants**: Modify the gravitational constant or other physics-related parameters in the `Gravitation.ts` file to create different scenarios.

- **UI**: Enhance the user interface by adding more controls or information sections in the HTML file.

## Contributing

Contributions are welcome! If you have any improvements or new features to add, please follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/your-feature-name`.

3. Make your changes and commit them: `git commit -m "Add a new feature"`.

4. Push to the branch: `git push origin feature/your-feature-name`.

5. Open a pull request describing your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out to the project author at lucas.pevidor@gmail.com with any questions or feedback!
